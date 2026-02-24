import { useProductCardViewModel } from "./use-product-card-view-model"
import { ProductCardView } from "./product-card-view"

import type { CartProduct } from "@/shared/store/cart-store"

type ProductCardProps = {
  product: CartProduct
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const props = useProductCardViewModel({
    product,
  })

  return <ProductCardView {...props} />
}
