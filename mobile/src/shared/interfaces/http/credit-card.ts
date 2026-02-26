import type { CreditCard } from "../credit-card"

export type GetCreditCardsHttpResponse = CreditCard[]

export type CreateCreditCardHttpRequest = {
  number: string
  CVV: number
  expirationDate: string
}

export type CreateCreditCardHttpResponse = {
  success: boolean
  message: string
  data: CreditCard
}
