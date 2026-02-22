import { Text, View } from "react-native"

import type { useCartViewModel } from "./use-cart-view-model"

type CartViewProps = ReturnType<typeof useCartViewModel>

export const CartView = ({ products }: CartViewProps) => {
  console.log("CART: ", JSON.stringify(products, null, 2))

  return (
    <View className="flex-1 items-center justify-center bg-background px-10 py-9">
      <Text className="mb-4 font-lato-bold text-2xl text-zinc-950">Cart</Text>
    </View>
  )
}
