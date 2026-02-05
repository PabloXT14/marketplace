import { useGetProductDetailsQuery } from "@/shared/queries/product/use-get-product-details-query"

type UseProductViewModelProps = {
  id: number
}

export const useProductViewModel = ({ id }: UseProductViewModelProps) => {
  const { data: product, isLoading, error } = useGetProductDetailsQuery({ id })

  return {
    product,
    isLoading,
    error,
  }
}
