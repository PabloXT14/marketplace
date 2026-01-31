import { marketplaceApiClient } from "../api/marketplace"

import type {
  ProductHttpRequest,
  ProductHttpResponse,
} from "../interfaces/http/product"
import type { ProductCategory } from "../interfaces/product"

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
