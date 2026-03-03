import type { CreditCard } from "@/shared/interfaces/credit-card"

import { CreditCardItemView } from "./credit-card-item-view"
import { useCreditCardViewModel } from "./use-credit-card-view-model"

type CreditCardItemProps = {
  creditCard: CreditCard
}

export const CreditCardItem = ({ creditCard }: CreditCardItemProps) => {
  const props = useCreditCardViewModel({
    creditCard,
  })

  return <CreditCardItemView {...props} />
}
