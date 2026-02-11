import { useGetCommentsInfiniteQuery } from "@/shared/queries/product/use-get-comments-infinite-query"
import { useGetProductDetailsQuery } from "@/shared/queries/product/use-get-product-details-query"

type UseProductViewModelProps = {
  id: number
}

export const useProductViewModel = ({ id }: UseProductViewModelProps) => {
  const { data: product, isLoading, error } = useGetProductDetailsQuery({ id })

  const {
    data: comments,
    isLoading: commentsLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
    isRefetching,
    error: commentsError,
  } = useGetCommentsInfiniteQuery({ productId: id })

  const handleLoadMore = () => {
    if (
      hasNextPage &&
      !commentsLoading &&
      !isRefetching &&
      !isFetchingNextPage
    ) {
      fetchNextPage()
    }
  }

  const handleRefresh = async () => {
    if (!isRefetching) {
      await refetch()
    }
  }

  const handleEndReached = () => {
    handleLoadMore()
  }

  return {
    product,
    isLoading,
    isRefetching,
    isFetchingNextPage,
    error,
    comments,
    commentsLoading,
    commentsError,
    handleLoadMore,
    handleRefresh,
    handleEndReached,
  }
}
