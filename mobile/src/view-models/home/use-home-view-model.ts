import { useProductInfinityQuery } from "@/shared/queries/product/use-product-infinity-query"

export const useHomeViewModel = () => {
  const {
    data: products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    refetch,
  } = useProductInfinityQuery()

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading && !isRefetching) {
      fetchNextPage()
    }
  }

  const handleRefresh = async () => {
    if (!(isLoading || isRefetching)) {
      await refetch()
    }
  }

  const handleEndReached = () => {
    handleLoadMore()
  }

  return {
    products,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    handleLoadMore,
    handleRefresh,
    handleEndReached,
  }
}
