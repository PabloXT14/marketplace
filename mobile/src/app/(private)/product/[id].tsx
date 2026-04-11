import { useLocalSearchParams } from "expo-router"

import { ProductView } from "@/view-models/product/product-view"
import { useProductViewModel } from "@/view-models/product/use-product-view-model"

type ProductDetailsParams = {
  id: string
  openFeedbackBottomSheet?: string
}

export default function ProductDetails() {
  const { id, openFeedbackBottomSheet } =
    useLocalSearchParams<ProductDetailsParams>()
  const props = useProductViewModel({
    id: Number(id),
    openFeedbackBottomSheet: Boolean(openFeedbackBottomSheet),
  })

  return <ProductView {...props} />
}
