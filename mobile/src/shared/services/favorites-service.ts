import { marketplaceApiClient } from "../api/marketplace"

import type {
  Favorite,
  AddFavoriteRequest,
  AddFavoriteResponse,
  RemoveFavoriteRequest,
} from "../interfaces/http/favorite"

export const getFavoritesService = async () => {
  const response = await marketplaceApiClient.get<Favorite[]>("/favorites")

  const { data } = response

  return data
}

export const addFavoriteService = async ({ productId }: AddFavoriteRequest) => {
  const response = await marketplaceApiClient.post<AddFavoriteResponse>(
    "/favorites",
    {
      productId,
    }
  )

  const { data } = response

  return data
}

export const removeFavoriteService = async ({
  productId,
}: RemoveFavoriteRequest) => {
  const response = await marketplaceApiClient.delete(`/favorites/${productId}`)

  const { data } = response

  return data
}
