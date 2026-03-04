import dayjs from "dayjs"

import type { CreditCard } from "@/shared/interfaces/credit-card"

export type UseCreditCardItemViewModelProps = {
  creditCard: CreditCard
  isSelected: boolean
  setSelectedCreditCard: (creditCard: CreditCard) => void
}

export const useCreditCardViewModel = ({
  creditCard,
  isSelected,
  setSelectedCreditCard,
}: UseCreditCardItemViewModelProps) => {
  const { number, expirationDate } = creditCard

  const formattedExpirationDate = dayjs(new Date(expirationDate)).format(
    "MM/YYYY"
  )

  const formattedCardNumber = number.slice(-4)

  return {
    formattedExpirationDate,
    formattedCardNumber,
    isSelected,
    setSelectedCreditCard,
    creditCard,
  }
}
