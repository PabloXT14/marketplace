import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { cartService } from "../services/cart-service"

export type CartProduct = {
  id: number
  name: string
  price: string
  quantity: number
  image?: string
}

export type CartProductWithoutQuantity = Omit<CartProduct, "quantity">

type CartStore = {
  products: CartProduct[]
  totalPrice: number
  addProduct: (product: CartProductWithoutQuantity) => void
  removeProduct: (id: number) => void
  updateQuantity: (params: { id: number; quantity: number }) => void
  clearCart: () => void
  getItemsCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],
      totalPrice: 0,

      addProduct: (newProduct) => {
        const updatedProducts = cartService.addProductToCart(
          get().products,
          newProduct
        )

        const newTotalPrice = cartService.calculateTotalPrice(updatedProducts)

        set({
          products: updatedProducts,
          totalPrice: newTotalPrice
        })
      },
      removeProduct: (id) => null,
      updateQuantity: (params) => null,
      clearCart: () => null,
      getItemsCount: () => 0,
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
