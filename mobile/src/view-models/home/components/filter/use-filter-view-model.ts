import { useGetProductCategoriesQuery } from "@/shared/queries/product/use-get-product-categories-query"
import { useFilterStore } from "@/shared/store/use-filter-store"

export const useFilterViewModel = () => {
  const {
    data: categories,
    isLoading,
    error,
    refetch,
  } = useGetProductCategoriesQuery()
  const { updateFilter, filterState } = useFilterStore()

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

  return {
    categories,
    isLoading,
    error,
    selectedCategories: filterState.selectedCategories,
    refetch,
    handleValueMaxChange,
    handleValueMinChange,
    handleCategoryToggle,
  }
}
