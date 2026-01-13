import { useCallback, useState } from "react"
// biome-ignore lint/performance/noNamespaceImport: needed for ImagePicker
import * as ImagePicker from "expo-image-picker"
import { toast } from "sonner-native"

type UseCameraOptions = {
  aspect?: [number, number]
  quality?: number
  allowsEditing?: boolean
  exif?: boolean
}

export const useCamera = ({
  aspect,
  quality,
  allowsEditing,
  exif,
}: UseCameraOptions) => {
  const [isLoading, setIsLoading] = useState(false)

  const requestCameraPermission = useCallback(async () => {
    try {
      const permissionResult = await ImagePicker.requestCameraPermissionsAsync()

      if (!permissionResult.granted) {
        toast.error("Permissão negada", {
          description:
            "Por favor, habilite a permissão para acessar a sua câmera.",
        })
      }

      return permissionResult.granted
    } catch (_error) {
      toast.error("Erro ao solicitar permissão")
      return false
    }
  }, [])

  const openCamera = useCallback(async () => {
    setIsLoading(true)

    try {
      const hasPermission = await requestCameraPermission()

      if (!hasPermission) {
        return null
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ["images"],
        allowsEditing,
        aspect,
        quality,
        exif, // serve para retornar a orientação da imagem (ex: sensor vertical ou horizontal)
      })

      if (result.canceled || result.assets.length <= 0) {
        toast.error("Nenhuma imagem selecionada")
        return null
      }

      toast.success("Foto capturada com sucesso")
      return result.assets[0].uri
    } catch (_error) {
      toast.error("Erro ao abrir a câmera")
      return null
    } finally {
      setIsLoading(false)
    }
  }, [])

  return {
    isLoading,
    requestCameraPermission,
    openCamera,
  }
}
