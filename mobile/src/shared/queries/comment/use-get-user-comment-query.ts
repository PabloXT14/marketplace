import { useQuery } from "@tanstack/react-query"

import type { UserCommentHttpRequest } from "@/shared/interfaces/http/product"
import { getUserCommentService } from "@/shared/services/product-service"

type UseGetUserCommentQueryParams = UserCommentHttpRequest

export const useGetUserCommentQuery = ({
  productId,
}: UseGetUserCommentQueryParams) => {
  const query = useQuery({
    queryKey: ["user-comment", productId],
    queryFn: () => getUserCommentService({ productId }),
    staleTime: 1000 * 60 * 5, // (5 minutes)
  })

  return query
}
