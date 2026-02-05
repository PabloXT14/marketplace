import { useLocalSearchParams } from "expo-router"

import { ProductView } from "@/view-models/product/product-view"
import { useProductViewModel } from "@/view-models/product/use-product-view-model"

type ProductDetailsParams = {
  id: string
}

export default function ProductDetails() {
  const { id } = useLocalSearchParams<ProductDetailsParams>()
  const props = useProductViewModel({ id: Number(id) })

  return <ProductView {...props} />
}
