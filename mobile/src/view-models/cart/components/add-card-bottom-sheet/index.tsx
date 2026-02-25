import { AddCardBottomSheetView } from "./add-card-bottom-sheet-view"
import { useAddCardBottomSheetViewModel } from "./use-add-card-bottom-sheet-view-model"

export const AddCardBottomSheet = () => {
  const props = useAddCardBottomSheetViewModel()

  return <AddCardBottomSheetView {...props} />
}
