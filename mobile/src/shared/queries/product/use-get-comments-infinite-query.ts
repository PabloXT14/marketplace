import { useInfiniteQuery } from "@tanstack/react-query"

import { getProductCommentsService } from "@/shared/services/product-service"
import { buildImageUrl } from "@/shared/helpers/build-image-url"

type UseGetCommentsInfiniteQueryProps = {
  productId: number
}

export const useGetCommentsInfiniteQuery = ({
  productId,
}: UseGetCommentsInfiniteQueryProps) => {
  const query = useInfiniteQuery({
    queryKey: ["product-comments", productId],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await getProductCommentsService({
        productId,
        pagination: {
          page: pageParam,
          perPage: 10,
        },
      })

      return response
    },
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    initialPageParam: 1,
    staleTime: 1000 * 60 * 1, // Tempo de expiração do cache em milissegundos
  })

  const comments =
    query.data?.pages
      .flatMap((page) => page.data)
      .map((comment) => ({
        ...comment,
        user: {
          ...comment.user,
          avatar: {
            url: buildImageUrl(comment.user.avatar.url ?? ""),
          },
        },
      })) ?? []

  return {
    ...query,
    data: comments,
  }
}
