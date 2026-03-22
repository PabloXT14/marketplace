import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner-native"

import { deleteCreditCardService } from "@/shared/services/credit-card-service"

export const useDeleteCreditCardMutation = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: deleteCreditCardService,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["credit-cards"] })

      toast.success("Cartão deletado com sucesso.")
    },
    onError: (error) => {
      console.error("Erro ao deletar cartão:", error)

      toast.error("Ocorreu um erro ao deletar o cartão.")
    },
  })

  return mutation
}
