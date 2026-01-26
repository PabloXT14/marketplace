import type { Product } from "@/shared/interfaces/product"

type UseProductCardViewModelProps = {
  product: Product
}

export const useProductCardViewModel = ({
  product,
}: UseProductCardViewModelProps) => ({ product })
