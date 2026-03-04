import { useCartStore } from "@/shared/store/cart-store"

import type { CreditCard } from "@/shared/interfaces/credit-card"
import { useState } from "react"

export type UseCartFooterViewModelProps = {
  openAddCardBottomSheet: () => void
  creditCards: CreditCard[]
  isLoadingCreditCards: boolean
}

export const useCartFooterViewModel = ({
  openAddCardBottomSheet,
  creditCards,
  isLoadingCreditCards,
}: UseCartFooterViewModelProps) => {
  const [selectedCreditCard, setSelectedCreditCard] =
    useState<CreditCard | null>(null)

  const { totalPrice } = useCartStore()

  const handleSelectCreditCard = (creditCard: CreditCard) => {
    setSelectedCreditCard(creditCard)
  }

  return {
    totalPrice,
    creditCards,
    isLoadingCreditCards,
    selectedCreditCard,
    openAddCardBottomSheet,
    handleSelectCreditCard,
  }
}
