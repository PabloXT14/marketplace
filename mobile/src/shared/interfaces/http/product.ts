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
