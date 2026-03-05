import { marketplaceApiClient } from "../api/marketplace"

import type {
  CreateOrderHttpRequest,
  CreateOrderHttpResponse,
} from "../interfaces/http/order"

export const createOrderService = async (order: CreateOrderHttpRequest) => {
  const response = await marketplaceApiClient.post<CreateOrderHttpResponse>(
    "/orders",
    order
  )

  const { data } = response

  return data
}
