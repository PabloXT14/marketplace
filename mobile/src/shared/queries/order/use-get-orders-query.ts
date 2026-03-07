import { useQuery } from "@tanstack/react-query"

import { getOrdersService } from "@/shared/services/order-service"

export const useGetOrdersQuery = () => {
  const query = useQuery({
    queryKey: ["orders"],
    queryFn: getOrdersService,
    staleTime: 1000 * 60 * 10, // (10 minutes)
  })

  return query
}
