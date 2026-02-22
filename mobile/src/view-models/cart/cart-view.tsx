import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { useCartViewModel } from "./use-cart-view-model"

import { ProductCard } from "./components/product-card"

type CartViewProps = ReturnType<typeof useCartViewModel>

export const CartView = ({ products }: CartViewProps) => (
  <SafeAreaView edges={["top"]} className="flex-1 bg-background">
    <FlatList
      data={products}
      keyExtractor={(item) => `cart-item-${item.id}`}
      renderItem={({ item }) => <ProductCard product={item} />}
      className="px-6 pt-9"
      contentContainerStyle={{ gap: 8, paddingBottom: 20 }}
    />
  </SafeAreaView>
)
