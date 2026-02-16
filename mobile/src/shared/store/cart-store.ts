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
        const { products, totalPrice } = cartService.addProductToCart(
          get().products,
          newProduct
        )

        set({
          products,
          totalPrice,
        })
      },
      removeProduct: (id) => {
        const { products, totalPrice } = cartService.removeProductFromCart(
          get().products,
          id
        )

        set({
          products,
          totalPrice,
        })
      },
      updateQuantity: ({ id, quantity }) => {
        const { products, totalPrice } = cartService.updateProductQuantity({
          products: get().products,
          productId: id,
          quantity,
        })

        set({
          products,
          totalPrice,
        })
      },
      clearCart: () => {
        set({
          products: [],
          totalPrice: 0,
        })
      },
      getItemsCount: () => cartService.getItemsCount(get().products),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
