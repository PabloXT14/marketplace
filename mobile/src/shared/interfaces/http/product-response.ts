import type { Product } from "../product"

export type ProductHttpResponse = {
  data: Product[]
  page: number
  perPage: number
  total: number
  totalPages: number
}
