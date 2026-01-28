import { useInfiniteQuery } from "@tanstack/react-query"

import { getProductsService } from "@/shared/services/product-service"
import { buildImageUrl } from "@/shared/helpers/build-image-url"

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
