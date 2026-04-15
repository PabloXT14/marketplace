import { useMemo } from "react"

import { useGetFavoritesQuery } from "@/shared/queries/favorites/use-get-favorites-query"

export type UseFavoriteButtonViewModelProps = {
  productId: number
}

export const useFavoriteButtonViewModel = ({
  productId,
}: UseFavoriteButtonViewModelProps) => {
  const { data: favorites = [], isLoading: isLoadingFavorites } =
    useGetFavoritesQuery()

  const isFavorite = useMemo(
    () => favorites.some((favorite) => favorite.productId === productId),
    [favorites, productId]
  )

  const handleToggleFavorite = () => {
    // TODO: Implement toggle favorite functionality
  }

  return {
    isFavorite,
    isLoadingFavorites,
    handleToggleFavorite,
  }
}
