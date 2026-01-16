import type { ImagePickerOptions } from "expo-image-picker"

import { useCamera } from "./use-camera"
import { useGallery } from "./use-gallery"
import { useModal } from "./use-modal"
import { useModalStore } from "../store/modal-store"

type UseImageProps = ImagePickerOptions & {
  callback: (uri: string | null) => void
}

export const useImage = ({ callback, ...pickerOptions }: UseImageProps) => {
  const modals = useModal()
  const { openCamera, isLoading: isCameraLoading } = useCamera({
    ...pickerOptions,
  })
  const { openGallery, isLoading: isGalleryLoading } = useGallery({
    ...pickerOptions,
  })
  const { close } = useModalStore()

  const isLoading = isCameraLoading || isGalleryLoading

  const handleCallback = (uri: string | null) => {
    close()
    callback(uri)
  }

  const handleSelectImage = () => {
    modals.showSelection({
      title: "Selecionar foto",
      message: "Escolha uma das opções abaixo",
      options: [
        {
          text: "Câmera",
          icon: "Camera",
          variant: "secondary",
          onPress: async () => {
            const photoUri = await openCamera()
            handleCallback(photoUri)
          },
        },
        {
          text: "Galeria",
          icon: "Gallery",
          variant: "primary",
          onPress: async () => {
            const imageUri = await openGallery()
            handleCallback(imageUri)
          },
        },
      ],
    })
  }

  return {
    handleSelectImage,
    isLoading,
  }
}
