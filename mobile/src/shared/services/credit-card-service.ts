import { marketplaceApiClient } from "../api/marketplace"

import type {
  GetCreditCardsHttpResponse,
  CreateCreditCardHttpRequest,
  CreateCreditCardHttpResponse,
} from "../interfaces/http/credit-card"

export const getCreditCardsService = async () => {
  const response =
    await marketplaceApiClient.get<GetCreditCardsHttpResponse>("/credit-cards")
  const { data } = response

  return data
}

export const createCreditCardService = async (
  params: CreateCreditCardHttpRequest
) => {
  const response =
    await marketplaceApiClient.post<CreateCreditCardHttpResponse>(
      "/credit-cards",
      params
    )
  const { data } = response

  return data
}
