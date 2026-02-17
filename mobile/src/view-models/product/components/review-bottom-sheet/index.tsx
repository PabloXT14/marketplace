import { ReviewBottomSheetView } from "./review-bottom-sheet-view"
import { useReviewBottomSheetViewModel } from "./use-review-bottom-sheet-view-model"

type ReviewBottomSheetProps = {
  productId: number
}

export const ReviewBottomSheet = ({ productId }: ReviewBottomSheetProps) => {
  const props = useReviewBottomSheetViewModel({ productId })

  return <ReviewBottomSheetView {...props} />
}
