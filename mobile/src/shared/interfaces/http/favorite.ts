export type AddFavoriteRequest = {
  productId: number
}

export type RemoveFavoriteRequest = {
  productId: number
}

export type Favorite = {
  id: number
  productId: number
  product: string
  createdAt: string
}
