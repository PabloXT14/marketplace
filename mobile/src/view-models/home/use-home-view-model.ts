import { useState } from "react"

import { useProductInfiniteQuery } from "@/shared/queries/product/use-product-infinite-query"
import { useFilterStore } from "@/shared/store/use-filter-store"
import { useDebounce } from "@/shared/hooks/use-debounce"

export const useHomeViewModel = () => {
  const { appliedFilterState } = useFilterStore()

  const [searchText, setSearchText] = useState("")
  const currentSearchText = useDebounce({ value: searchText, delay: 500 })

  const {
    data: products,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isRefetching,
    refetch,
  } = useProductInfiniteQuery({
    filters: {
      ...appliedFilterState,
      searchText: currentSearchText,
    },
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
    searchText,
    setSearchText,
  }
}
