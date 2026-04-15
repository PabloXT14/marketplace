import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner-native"

import { addFavoriteService } from "@/shared/services/favorites-service"

export const useAddFavoriteMutation = () => {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: addFavoriteService,
    onSuccess: (_response) => {
      queryClient.invalidateQueries({ queryKey: ["favorites"] })
      toast.success("Produto adicionado aos favoritos!")
    },
    onError: (error) => {
      toast.error(error.message ?? "Ocorreu um erro ao favoritar o produto.")
    },
  })

  return mutation
}
