import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList } from "react-native"

import type { useOrdersViewModel } from "./use-orders-view-model"

import { OrderItem } from "./components/order-item"

type OrdersViewProps = ReturnType<typeof useOrdersViewModel>

export const OrdersView = ({ orders }: OrdersViewProps) => (
  <SafeAreaView edges={["top"]} className="flex-1 bg-background">
    <FlatList
      data={orders}
      keyExtractor={(item) => `order-${item.id}`}
      renderItem={({ item }) => <OrderItem order={item} />}
      className="px-6 pt-9"
      contentContainerStyle={{ gap: 8, paddingBottom: 120 }}
    />
  </SafeAreaView>
)
