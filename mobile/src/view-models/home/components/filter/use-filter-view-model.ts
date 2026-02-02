import { useGetProductCategoriesQuery } from "@/shared/queries/product/use-get-product-categories-query"

import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"
import { useFilterStore } from "@/shared/store/use-filter-store"

export const useFilterViewModel = () => {
  const {
    data: categories,
    isLoading,
    error,
    refetch,
  } = useGetProductCategoriesQuery()

  const { updateFilter, filterState, applyFilters, resetFilter } =
    useFilterStore()
  const { close } = useBottomSheetStore()

  const handleValueMaxChange = (value: number) => {
    updateFilter({ key: "valueMax", value })
  }

  const handleValueMinChange = (value: number) => {
    updateFilter({ key: "valueMin", value })
  }

  const handleCategoryToggle = (categoryId: number) => {
    const isCategorySelected =
      filterState.selectedCategories.includes(categoryId)

    if (isCategorySelected) {
      updateFilter({
        key: "selectedCategories",
        value: filterState.selectedCategories.filter((id) => id !== categoryId),
      })
    } else {
      updateFilter({
        key: "selectedCategories",
        value: [...filterState.selectedCategories, categoryId],
      })
    }
  }

  const handleApplyFilters = () => {
    applyFilters()
    close()
  }

  const handleResetFilters = () => {
    resetFilter()
    close()
  }

  return {
    categories,
    isLoading,
    error,
    selectedCategories: filterState.selectedCategories,
    refetch,
    handleValueMaxChange,
    handleValueMinChange,
    handleCategoryToggle,
    handleApplyFilters,
    handleResetFilters,
    close,
  }
}
