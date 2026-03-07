import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList, Text } from "react-native"

import type { useOrdersViewModel } from "./use-orders-view-model"

type OrdersViewProps = ReturnType<typeof useOrdersViewModel>

export const OrdersView = ({ orders }: OrdersViewProps) => (
  <SafeAreaView edges={["top"]} className="flex-1 bg-background">
    <FlatList
      data={orders}
      keyExtractor={(item) => `order-${item.id}`}
      renderItem={({ item }) => <Text>{item.productName}</Text>}
      className="px-6 pt-9"
      contentContainerStyle={{ gap: 8, paddingBottom: 20 }}
    />
  </SafeAreaView>
)
