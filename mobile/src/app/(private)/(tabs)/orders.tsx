import { OrdersView } from "@/view-models/orders/orders-view"
import { useOrdersViewModel } from "@/view-models/orders/use-orders-view-model"

export default function Orders() {
  const props = useOrdersViewModel()

  return <OrdersView {...props} />
}
