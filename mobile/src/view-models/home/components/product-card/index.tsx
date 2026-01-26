import { ProductCardView } from "./product-card-view"
import { useProductCardViewModel } from "./use-product-card-view-model"

import type { Product } from "@/shared/interfaces/product"

type ProductCardProps = {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const props = useProductCardViewModel({ product })

  return <ProductCardView {...props} />
}
