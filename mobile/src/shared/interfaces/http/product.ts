import type { Product } from "../product"
import type { ProductComment } from "../product-comment"
import type { PaginationResponse } from "./pagination"

export type ProductHttpRequest = {
  pagination: {
    page: number
    perPage: number
  }
  filters?: {
    from?: string
    to?: string
    categoryIds?: number[]
    searchText?: string
    minValue?: number
    maxValue?: number
  }
  sort?: {
    averageRating: string
  }
}

export type ProductHttpResponse = PaginationResponse<Product>

export type ProductCommentsHttpRequest = {
  productId: number
  pagination: {
    page: number
    perPage: number
  }
}

export type ProductCommentsHttpResponse = PaginationResponse<ProductComment>

export type CreateCommentHttpRequest = {
  productId: number
  rating: number
  comment: string
}

export type CreateCommentHttpResponse = {
  message: string
  ratingApplied: boolean
}

export type UserCommentHttpRequest = {
  productId: number
}

export type UserCommentHttpResponse = {
  content: string
  rating: number
}

export type UpdateUserCommentHttpRequest = {
  commentId: number
  content: string
  rating: number
}

export type UpdateUserCommentHttpResponse = {
  message: string
  ratingApplied: boolean
  comment: {
    id: number
    content: string
    createdAt: Date
    updatedAt: Date
  }
}
