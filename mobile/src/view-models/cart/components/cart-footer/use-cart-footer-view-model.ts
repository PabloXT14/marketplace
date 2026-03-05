import { useState } from "react"

import { useCartStore } from "@/shared/store/cart-store"
import { useCreateOrderMutation } from "@/shared/queries/order/use-create-order-mutation"

import type { CreditCard } from "@/shared/interfaces/credit-card"
import { router } from "expo-router"

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

  const { totalPrice, products, clearCart } = useCartStore()

  const createOrderMutation = useCreateOrderMutation()

  const handleSelectCreditCard = (creditCard: CreditCard) => {
    setSelectedCreditCard(creditCard)
  }

  const handleCreateOrder = async () => {
    if (!selectedCreditCard) {
      return
    }

    await createOrderMutation.mutateAsync({
      creditCardId: selectedCreditCard.id,
      items: products.map((product) => ({
        productId: product.id,
        quantity: product.quantity,
      })),
    })

    clearCart()

    router.push("/(private)/(tabs)/orders")
  }

  return {
    totalPrice,
    creditCards,
    isLoadingCreditCards,
    isLoadingOrder: createOrderMutation.isPending,
    selectedCreditCard,
    openAddCardBottomSheet,
    handleSelectCreditCard,
    handleCreateOrder,
  }
}
