export type Favorite = {
  id: number
  productId: number
  product: string
  createdAt: string
}

export type AddFavoriteRequest = {
  productId: number
}

export type AddFavoriteResponse = {
  id: number
  productId: number
  userId: number
  createdAt: string
}

export type RemoveFavoriteRequest = {
  productId: number
}
