import { marketplaceApiClient } from "../api/marketplace"

import type {
  CreateOrderHttpRequest,
  CreateOrderHttpResponse,
  GetOrdersHttpResponse,
} from "../interfaces/http/order"

export const createOrderService = async (order: CreateOrderHttpRequest) => {
  const response = await marketplaceApiClient.post<CreateOrderHttpResponse>(
    "/orders",
    order
  )

  const { data } = response

  return data
}

export const getOrdersService = async () => {
  const response =
    await marketplaceApiClient.get<GetOrdersHttpResponse>("/orders")

  const { data } = response

  return data
}
