import { useInfiniteQuery } from "@tanstack/react-query"

import { getProductsService } from "@/shared/services/product-service"
import { buildImageUrl } from "@/shared/helpers/build-image-url"

import type { FilterState } from "@/shared/store/use-filter-store"

type UseProductInfinityQueryProps = {
  filters?: FilterState
}

export const useProductInfinityQuery = ({
  filters,
}: UseProductInfinityQueryProps) => {
  const query = useInfiniteQuery({
    queryKey: ["products-infinity", filters],
    queryFn: async ({ pageParam = 1 }) => {
      try {
        const response = await getProductsService({
          pagination: {
            page: pageParam,
            perPage: 10,
          },
          filters: {
            minValue: filters?.valueMin ?? undefined,
            maxValue: filters?.valueMax ?? undefined,
            categoryIds: filters?.selectedCategories ?? [],
            searchText: filters?.searchText ?? undefined,
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
    staleTime: 1000 * 60 * 1, // Tempo de expiração do cache em milissegundos
  })

  // Concatenate the data from all pages into a single array
  const products =
    query.data?.pages
      .flatMap((page) => page.data)
      .map((product) => ({
        ...product,
        photo: buildImageUrl(product.photo),
      })) || []

  return {
    ...query,
    data: products,
  }
}
