import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { useCartViewModel } from "./use-cart-view-model"

import { ProductCard } from "./components/product-card"
import { CartHeader } from "./components/cart-header"
import { EmptyList } from "./components/empty-list"
import { CartFooter } from "./components/cart-footer"

type CartViewProps = ReturnType<typeof useCartViewModel>

export const CartView = ({
  products,
  openAddCardBottomSheet,
}: CartViewProps) => (
  <SafeAreaView edges={["top"]} className="flex-1 bg-background">
    <FlatList
      data={products}
      keyExtractor={(item) => `cart-item-${item.id}`}
      renderItem={({ item }) => <ProductCard product={item} />}
      className="px-6 pt-9"
      contentContainerStyle={{ gap: 8, paddingBottom: 20 }}
      ListHeaderComponent={<CartHeader />}
      ListEmptyComponent={<EmptyList />}
      ListFooterComponent={() =>
        products.length > 0 && (
          <CartFooter openAddCardBottomSheet={openAddCardBottomSheet} />
        )
      }
    />
  </SafeAreaView>
)
