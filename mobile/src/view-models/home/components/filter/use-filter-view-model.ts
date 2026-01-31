import { useGetProductCategoriesQuery } from "@/shared/queries/product/use-get-product-categories-query"

export const useFilterViewModel = () => {
  const {
    data: categories,
    isLoading,
    error,
    refetch,
  } = useGetProductCategoriesQuery()

  return {
    categories,
    isLoading,
    error,
    refetch,
  }
}
