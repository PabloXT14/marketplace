import { useGetOrdersQuery } from "@/shared/queries/order/use-get-orders-query"

export const useOrdersViewModel = () => {
  const { data: ordersResponse } = useGetOrdersQuery()

  const orders = ordersResponse?.orders ?? []
  const totalOrders = ordersResponse?.totalOrders ?? 0

  return {
    orders,
    totalOrders,
  }
}
