import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner-native"

// biome-ignore lint/performance/noNamespaceImport: needed for authService
import * as authService from "@/shared/services/auth-service"

import { useUserStore } from "@/shared/store/user-store"

export const useUploadAvatarMutation = () => {
  const { updateUser } = useUserStore()

  const mutation = useMutation({
    mutationFn: (avatarUri: string) =>
      authService.uploadAvatarService(avatarUri),
    onSuccess: (response) => {
      updateUser({ avatarUrl: response.url })
    },
    onError: (error) => {
      console.error("Error uploading avatar:", error)

      toast.error("Error ao fazer upload do avatar.")
    },
  })

  return mutation
}
