import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner-native"

import type { UpdateUserCommentHttpRequest } from "@/shared/interfaces/http/product"

import { updateUserCommentService } from "@/shared/services/product-service"

type UseUpdateUserCommentMutationProps = {
  productId: number
}

export const useUpdateUserCommentMutation = ({
  productId,
}: UseUpdateUserCommentMutationProps) => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: (params: UpdateUserCommentHttpRequest) =>
      updateUserCommentService(params),
    onSuccess: (response) => {
      queryClient.invalidateQueries({ queryKey: ["user-comment", productId] })
      queryClient.invalidateQueries({
        queryKey: ["product-comments", productId],
      })

      toast.success(response.message || "Avaliação atualizada com sucesso!")
    },
    onError: (error) => {
      toast.error(
        error.message ?? "Ocorreu um erro ao atualizar a avaliação.",
        {
          description: "Tente novamente em instantes.",
        }
      )
    },
  })

  return mutation
}
