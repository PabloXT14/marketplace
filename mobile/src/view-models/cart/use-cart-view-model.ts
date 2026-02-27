import { createElement } from "react"

import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"
import { useCartStore } from "@/shared/store/cart-store"
import { useGetCreditCardsQuery } from "@/shared/queries/credit-card/use-get-credit-card-query"

import { AddCardBottomSheet } from "./components/add-card-bottom-sheet"

export const useCartViewModel = () => {
  const { products } = useCartStore()
  const { open: openBottomSheet } = useBottomSheetStore()

  const { data: creditCards = [], isLoading: isLoadingCreditCards } =
    useGetCreditCardsQuery()

  const openAddCardBottomSheet = () => {
    openBottomSheet({
      content: createElement(AddCardBottomSheet),
    })
  }

  return {
    products,
    creditCards,
    isLoadingCreditCards,
    openAddCardBottomSheet,
  }
}
