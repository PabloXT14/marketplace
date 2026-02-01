import { useState } from "react"

import { useGetProductCategoriesQuery } from "@/shared/queries/product/use-get-product-categories-query"

import type { ProductCategory } from "@/shared/interfaces/product"

export const useFilterViewModel = () => {
  const {
    data: categories,
    isLoading,
    error,
    refetch,
  } = useGetProductCategoriesQuery()

  const [selectedCategories, setSelectedCategories] = useState<
    ProductCategory[]
  >([])

  const handleSelectCategory = (category: ProductCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category))
    } else {
      setSelectedCategories([...selectedCategories, category])
    }
  }

  return {
    categories,
    isLoading,
    error,
    refetch,
    selectedCategories,
    handleSelectCategory,
  }
}
