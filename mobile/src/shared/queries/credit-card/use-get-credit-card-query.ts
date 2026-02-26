import { useQuery } from "@tanstack/react-query"

import { getCreditCardsService } from "@/shared/services/credit-card-service"

export const useGetCreditCardsQuery = () => {
  const query = useQuery({
    queryKey: ["credit-cards"],
    queryFn: getCreditCardsService,
    staleTime: 1000 * 60 * 5, // (5 minutes)
  })

  return query
}
