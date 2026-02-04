import { useQuery } from "@tanstack/react-query"

import { getProductDetailsService } from "@/shared/services/product-service"

type UseGetProductDetailsQueryProps = {
  id: number
}

export const useGetProductDetailsQuery = ({
  id,
}: UseGetProductDetailsQueryProps) => {
  const query = useQuery({
    queryKey: ["product-details", id],
    queryFn: () => getProductDetailsService(id),
    staleTime: 1000 * 60 * 60, // Tempo de expiração do cache em milissegundos
  })

  return query
}
