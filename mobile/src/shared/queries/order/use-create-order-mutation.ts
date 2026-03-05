import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner-native"

import { createOrderService } from "@/shared/services/order-service"

export const useCreateOrderMutation = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: createOrderService,
    onSuccess: (response) => {
      toast.success(response.message || "Pedido criado com sucesso!")

      queryClient.invalidateQueries({ queryKey: ["orders"] })
    },
    onError: (error) => {
      toast.error(error.message ?? "Ocorreu um erro ao criar o pedido.")
    },
  })

  return mutation
}
