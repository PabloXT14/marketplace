import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner-native"

import { updateProfileService } from "@/shared/services/profile-service"
import { useUserStore } from "@/shared/store/user-store"

export const useUpdateProfileMutation = () => {
  const { updateUser } = useUserStore()

  const mutation = useMutation({
    mutationFn: updateProfileService,
    onSuccess: (response) => {
      toast.success("Perfil atualizado com sucesso!")

      updateUser(response.user)
    },
    onError: (error) => {
      toast.error(error.message ?? "Ocorreu um erro ao atualizar o perfil.")
    },
  })

  return mutation
}
