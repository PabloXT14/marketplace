import { useState } from "react"
import { router } from "expo-router"

import { useCartStore } from "@/shared/store/cart-store"
import { useCreateOrderMutation } from "@/shared/queries/order/use-create-order-mutation"
import { useModal } from "@/shared/hooks/use-modal"
import { localNotificationsService } from "@/shared/services/local-notifications-service"

import type { CreditCard } from "@/shared/interfaces/credit-card"

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
  const { showSuccess } = useModal()

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

    products.forEach((product, index) => {
      localNotificationsService.schedulePurchaseFeedbackNotification({
        productName: product.name,
        productId: product.id,
        delayInMinutes: 60 * 24 * 7 + index * 60 * 24, // 7 days + 1 day per product to avoid scheduling multiple notifications at the same time
      })
    })

    clearCart()

    showSuccess({
      title: "Sucesso!",
      message: "Pedido realizado com sucesso",
      buttonText: "Ver pedidos",
      onButtonPress: () => {
        router.push("/(private)/(tabs)/orders")
      },
    })
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
