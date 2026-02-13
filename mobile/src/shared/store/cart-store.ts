import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

export type CartProduct = {
  id: number
  name: string
  price: string
  quantity: number
  image?: string
}

type CartStore = {
  products: CartProduct[]
  total: number
  addProduct: (product: Omit<CartProduct, "quantity">) => void
  removeProduct: (id: number) => void
  updateQuantity: (params: { id: number; quantity: number }) => void
  clearCart: () => void
  getItemsCount: () => number
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      products: [],
      total: 0,

      addProduct: (product) => null,
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
