import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner-native"

import { createCreditCardService } from "@/shared/services/credit-card-service"

import type { CreateCreditCardHttpRequest } from "@/shared/interfaces/http/credit-card"

export const useCreateCreditCardMutation = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (params: CreateCreditCardHttpRequest) =>
      createCreditCardService(params),
    onSuccess: (response) => {
      toast.success(response.message || "Cartão criado com sucesso!")

      queryClient.invalidateQueries({ queryKey: ["credit-cards"] })
    },
    onError: (error) => {
      toast.error(error.message ?? "Ocorreu um erro ao criar o cartão.", {
        description: "Tente novamente em instantes.",
      })
    },
  })

  return mutation
}
