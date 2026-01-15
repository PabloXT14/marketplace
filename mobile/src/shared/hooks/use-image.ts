import type { ImagePickerOptions } from "expo-image-picker"

import { useCamera } from "./use-camera"
import { useGallery } from "./use-gallery"
import { useModal } from "./use-modal"

type UseImageProps = ImagePickerOptions

export const useImage = (pickerOptions: UseImageProps) => {
  const modals = useModal()
  const { openCamera, isLoading: isCameraLoading } = useCamera({
    ...pickerOptions,
  })
  const { openGallery, isLoading: isGalleryLoading } = useGallery({
    ...pickerOptions,
  })

  const isLoading = isCameraLoading || isGalleryLoading

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
            console.log("FOTO URI: ", photoUri)
          },
        },
        {
          text: "Galeria",
          icon: "Gallery",
          variant: "primary",
          onPress: async () => {
            const imageUri = await openGallery()
            console.log("IMAGE URI: ", imageUri)
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
