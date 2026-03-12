import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner-native"

import { updateProfileService } from "@/shared/services/profile-service"
import { useUserStore } from "@/shared/store/user-store"
import { useModal } from "@/shared/hooks/use-modal"

export const useUpdateProfileMutation = () => {
  const { updateUser } = useUserStore()
  const { showSuccess } = useModal()

  const mutation = useMutation({
    mutationFn: updateProfileService,
    onSuccess: (response) => {
      updateUser(response.user)

      showSuccess({
        title: "Perfil atualizado!",
        message: "Seus dados foram atualizados com sucesso",
      })
    },
    onError: (error) => {
      toast.error(error.message ?? "Ocorreu um erro ao atualizar o perfil.")
    },
  })

  return mutation
}
