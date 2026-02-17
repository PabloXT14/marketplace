import { Text, View } from "react-native"

import type { useReviewBottomSheetViewModel } from "./use-review-bottom-sheet-view-model"

type ReviewBottomSheetViewProps = ReturnType<
  typeof useReviewBottomSheetViewModel
>

export const ReviewBottomSheetView = ({
  productId,
}: ReviewBottomSheetViewProps) => (
  <View>
    <Text>Review Bottom Sheet View for Product ID: {productId}</Text>
  </View>
)
