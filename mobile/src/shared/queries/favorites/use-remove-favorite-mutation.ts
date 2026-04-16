import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner-native"

import { removeFavoriteService } from "@/shared/services/favorites-service"

export const useRemoveFavoriteMutation = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: removeFavoriteService,
    onSuccess: (_response) => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] })
      toast.success("Produto removido dos favoritos!", {
        position: "bottom-center",
      })
    },
    onError: (error) => {
      toast.error(
        error.message ?? "Ocorreu um erro ao remover o produto dos favoritos."
      )
    },
  })

  return mutation
}
