import type { Product } from "@/shared/interfaces/product"

type UseProductCardViewModelProps = {
  product: Product
}

export const useProductCardViewModel = ({
  product,
}: UseProductCardViewModelProps) => {
  const formattedRating = product.averageRating.toFixed(1)

  return {
    product,
    formattedRating,
  }
}
