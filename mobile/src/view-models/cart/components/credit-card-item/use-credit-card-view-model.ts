import dayjs from "dayjs"

import type { CreditCard } from "@/shared/interfaces/credit-card"

type UseCreditCardItemViewModelProps = {
  creditCard: CreditCard
}

export const useCreditCardViewModel = ({
  creditCard,
}: UseCreditCardItemViewModelProps) => {
  const { number, expirationDate } = creditCard

  const formattedExpirationDate = dayjs(new Date(expirationDate)).format(
    "MM/YYYY"
  )

  const formattedCardNumber = number.slice(-4)

  return {
    formattedExpirationDate,
    formattedCardNumber,
  }
}
