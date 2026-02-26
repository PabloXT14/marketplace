import { marketplaceApiClient } from "../api/marketplace"

import type { GetCreditCardsHttpResponse } from "../interfaces/http/credit-card"

export const getCreditCardsService = async () => {
  const response =
    await marketplaceApiClient.get<GetCreditCardsHttpResponse>("/credit-cards")
  const { data } = response

  return data
}
