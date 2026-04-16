import { useMemo } from "react"

import { useGetFavoritesQuery } from "@/shared/queries/favorites/use-get-favorites-query"
import { useAddFavoriteMutation } from "@/shared/queries/favorites/use-add-favorite-mutation"
import { useRemoveFavoriteMutation } from "@/shared/queries/favorites/use-remove-favorite-mutation"

export type UseFavoriteButtonViewModelProps = {
  productId: number
}

export const useFavoriteButtonViewModel = ({
  productId,
}: UseFavoriteButtonViewModelProps) => {
  const { data: favorites = [], isLoading: isLoadingFavorites } =
    useGetFavoritesQuery()

  const addFavoriteMutation = useAddFavoriteMutation()
  const removeFavoriteMutation = useRemoveFavoriteMutation()

  const isFavorite = useMemo(
    () => favorites.some((favorite) => favorite.productId === productId),
    [favorites, productId]
  )

  const handleToggleFavorite = async () => {
    if (isLoadingFavorites) {
      return
    }

    if (isFavorite) {
      await removeFavoriteMutation.mutateAsync({ productId })
    } else {
      await addFavoriteMutation.mutateAsync({ productId })
    }
  }

  const isLoading =
    addFavoriteMutation.isPending ||
    removeFavoriteMutation.isPending ||
    isLoadingFavorites

  return {
    isFavorite,
    isLoading,
    handleToggleFavorite,
  }
}
