import { useQuery } from "@tanstack/react-query"

import { getProductsCategoriesService } from "@/shared/services/product-service"

export const useGetProductCategoriesQuery = () => {
  const query = useQuery({
    queryKey: ["product-categories"],
    queryFn: getProductsCategoriesService,
    staleTime: 1000 * 60 * 60, // Tempo de expiração do cache em milissegundos
  })

  return query
}
