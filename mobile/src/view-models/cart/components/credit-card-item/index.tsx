import { CreditCardItemView } from "./credit-card-item-view"
import {
  type UseCreditCardItemViewModelProps,
  useCreditCardViewModel,
} from "./use-credit-card-view-model"

type CreditCardItemProps = UseCreditCardItemViewModelProps

export const CreditCardItem = (props: CreditCardItemProps) => {
  const viewModel = useCreditCardViewModel(props)

  return <CreditCardItemView {...viewModel} />
}
