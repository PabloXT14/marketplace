import { useCallback, useState } from "react"
// biome-ignore lint/performance/noNamespaceImport: needed for ImagePicker
import * as ImagePicker from "expo-image-picker"
import { toast } from "sonner-native"

type UseGalleryOptions = ImagePicker.ImagePickerOptions

export const useGallery = (pickerOptions: UseGalleryOptions) => {
  const [isLoading, setIsLoading] = useState(false)

  const requestGalleryPermission = useCallback(async () => {
    try {
      const permissionResult =
        await ImagePicker.requestMediaLibraryPermissionsAsync()

      if (!permissionResult.granted) {
        toast.error("Permissão negada", {
          description:
            "Por favor, habilite a permissão para acessar a sua galeria.",
        })
      }

      return permissionResult.granted
    } catch (error) {
      toast.error("Erro ao solicitar permissão")

      console.error(error)

      return false
    }
  }, [])

  const openGallery = useCallback(async () => {
    setIsLoading(true)

    try {
      const hasPermission = await requestGalleryPermission()

      if (!hasPermission) {
        return null
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ["images"],
        ...pickerOptions,
      })

      if (result.canceled || result.assets.length <= 0) {
        toast.error("Nenhuma imagem selecionada")
        return null
      }

      toast.success("Imagem selecionada com sucesso!")

      return result.assets[0].uri
    } catch (error) {
      toast.error("Erro ao abrir a galeria")

      console.error(error)

      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { openGallery, isLoading }
}
