import { marketplaceApiClient } from "../api/marketplace"

import type {
  ProductCommentsHttpRequest,
  ProductCommentsHttpResponse,
  ProductHttpRequest,
  ProductHttpResponse,
} from "../interfaces/http/product"
import type { Product, ProductCategory } from "../interfaces/product"

export const getProductsService = async (params: ProductHttpRequest) => {
  const response = await marketplaceApiClient.post<ProductHttpResponse>(
    "/products",
    params
  )

  const { data } = response

  return data
}

export const getProductsCategoriesService = async () => {
  const response = await marketplaceApiClient.get<ProductCategory[]>(
    "/products/categories"
  )

  const { data } = response

  return data
}

export const getProductDetailsService = async (id: number) => {
  const response = await marketplaceApiClient.get<Product>(`/products/${id}`)

  const { data } = response

  return data
}

export const getProductCommentsService = async (
  params: ProductCommentsHttpRequest
) => {
  const response = await marketplaceApiClient.post<ProductCommentsHttpResponse>(
    "/products/comments",
    params
  )

  const { data } = response

  return data
}
