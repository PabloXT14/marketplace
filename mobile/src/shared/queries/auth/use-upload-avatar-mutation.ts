import { useMutation } from "@tanstack/react-query"

// biome-ignore lint/performance/noNamespaceImport: needed for authService
import * as authService from "@/shared/services/auth-service"
import { toast } from "sonner-native"

export const useUploadAvatarMutation = () => {
  const mutation = useMutation({
    mutationFn: (avatarUri: string) =>
      authService.uploadAvatarService(avatarUri),
    onSuccess: () => {
      console.log("Avatar uploaded successfully")
    },
    onError: (error) => {
      console.error("Error uploading avatar:", error)

      toast.error("Error ao fazer upload do avatar.")
    },
  })

  return mutation
}
