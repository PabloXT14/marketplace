import { SafeAreaView } from "react-native-safe-area-context"
import { FlatList } from "react-native"

import type { useOrdersViewModel } from "./use-orders-view-model"

import { OrderItem } from "./components/order-item"
import { EmptyList } from "./components/empty-list"
import { ListHeader } from "./components/list-header"
import { OrdersError } from "./components/orders-error"
import { Loading } from "./components/loading"

type OrdersViewProps = ReturnType<typeof useOrdersViewModel>

export const OrdersView = ({ orders, error, isLoading }: OrdersViewProps) => {
  if (error) {
    return <OrdersError />
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-background">
      <FlatList
        data={orders}
        keyExtractor={(item) => `order-${item.id}`}
        renderItem={({ item }) => <OrderItem order={item} />}
        className="px-6 pt-9"
        contentContainerStyle={{ gap: 8, paddingBottom: 120 }}
        ListHeaderComponent={<ListHeader />}
        ListEmptyComponent={<EmptyList />}
      />
    </SafeAreaView>
  )
}
