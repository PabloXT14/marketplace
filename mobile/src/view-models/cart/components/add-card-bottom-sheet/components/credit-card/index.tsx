import { CreditCardView } from "./credit-card-view"
import {
  useCreditCardViewModel,
  type UseCreditCardViewModelProps,
} from "./use-credit-card-view-model"

type CreditCardProps = UseCreditCardViewModelProps

export const CreditCard = (props: CreditCardProps) => {
  const viewModel = useCreditCardViewModel(props)

  return <CreditCardView {...viewModel} />
}
