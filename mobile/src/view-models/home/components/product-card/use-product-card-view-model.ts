import type { Product } from "@/shared/interfaces/product"

type UseProductCardViewModelProps = {
  product: Product
}

export const useProductCardViewModel = ({
  product,
}: UseProductCardViewModelProps) => {
  const formattedRating = product.ratingCount.toFixed(1)

  return {
    product,
    formattedRating,
  }
}
