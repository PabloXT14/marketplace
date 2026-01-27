import { marketplaceApiClient } from "../api/marketplace"

import type {
  ProductHttpRequest,
  ProductHttpResponse,
} from "../interfaces/http/product"

export const getProductsService = async (params: ProductHttpRequest) => {
  const response = await marketplaceApiClient.get<ProductHttpResponse>(
    "/products",
    {
      params,
    }
  )

  const { data } = response

  return data
}
