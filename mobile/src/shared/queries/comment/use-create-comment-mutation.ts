import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner-native"

import type { CreateCommentHttpRequest } from "@/shared/interfaces/http/product"

import { createCommentService } from "@/shared/services/product-service"

type UseCreateCommentMutationProps = {
  productId: number
}

export const useCreateCommentMutation = ({
  productId,
}: UseCreateCommentMutationProps) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (params: CreateCommentHttpRequest) =>
      createCommentService(params),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["user-comment", productId] })
      queryClient.invalidateQueries({
        queryKey: ["product-comments", productId],
      })

      toast.success(response.message || "Avaliação criada com sucesso!")
    },
    onError: (error) => {
      toast.error(error.message ?? "Ocorreu um erro ao criar a avaliação.", {
        description: "Tente novamente em instantes.",
      })
    },
  })

  return mutation
}
