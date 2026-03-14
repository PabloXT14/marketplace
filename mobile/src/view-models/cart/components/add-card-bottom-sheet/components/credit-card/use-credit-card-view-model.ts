import type { FocusedField } from "../../use-add-card-bottom-sheet-view-model"

export type UseCreditCardViewModelProps = {
  isFlipped: boolean
  focusedField: FocusedField | null
}

export const useCreditCardViewModel = ({
  isFlipped,
  focusedField,
}: UseCreditCardViewModelProps) => {
  console.log("FOCUSED FIELD: ", isFlipped)

  return {
    isFlipped,
    focusedField,
  }
}
