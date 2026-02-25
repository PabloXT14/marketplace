import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"
import { useCartStore } from "@/shared/store/cart-store"
import { AddCardBottomSheet } from "./components/add-card-bottom-sheet"
import { createElement } from "react"

export const useCartViewModel = () => {
  const { products } = useCartStore()
  const { open: openBottomSheet } = useBottomSheetStore()

  const openAddCardBottomSheet = () => {
    openBottomSheet({
      content: createElement(AddCardBottomSheet),
    })
  }

  return {
    products,
    openAddCardBottomSheet,
  }
}
