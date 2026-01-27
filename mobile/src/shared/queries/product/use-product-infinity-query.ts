import { useInfiniteQuery } from "@tanstack/react-query"

import { getProductsService } from "@/shared/services/product-service"

export const useProductInfinityQuery = () => {
  const query = useInfiniteQuery({
    queryKey: ["products-infinity"],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await getProductsService({
          pagination: {
            page: pageParam,
            perPage: 10,
          },
        })

        return response
      } catch (error) {
        // biome-ignore lint/complexity/noUselessCatch: for clarity
        throw error
      }
    },
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
  })

  return query
}
