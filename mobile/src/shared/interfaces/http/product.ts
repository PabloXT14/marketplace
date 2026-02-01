import type { Product } from "../product"

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

export type ProductHttpResponse = {
  data: Product[]
  page: number
  perPage: number
  total: number
  totalPages: number
}
