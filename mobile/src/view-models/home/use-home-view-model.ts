import { useProductInfinityQuery } from "@/shared/queries/product/use-product-infinity-query"
import { useFilterStore } from "@/shared/store/use-filter-store"

export const useHomeViewModel = () => {
  const { appliedFilterState } = useFilterStore()

  const {
    data: products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    refetch,
  } = useProductInfinityQuery({
    filters: appliedFilterState,
  })

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage && !isLoading && !isRefetching) {
      fetchNextPage()
    }
  }

  const handleRefresh = async () => {
    await refetch()
  }

  const handleEndReached = () => {
    handleLoadMore()
  }

  return {
    products,
    isLoading,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    handleLoadMore,
    handleRefresh,
    handleEndReached,
  }
}
