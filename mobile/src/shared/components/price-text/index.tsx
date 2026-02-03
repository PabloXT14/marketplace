import { PriceTextView } from "./price-text-view"
import {
  usePriceTextViewModel,
  type UsePriceTextViewModelProps,
} from "./use-price-text-view-model"

type PriceTextProps = UsePriceTextViewModelProps

export const PriceText = ({
  value,
  currencyClassName,
  valueClassName,
}: PriceTextProps) => {
  const props = usePriceTextViewModel({
    value,
    currencyClassName,
    valueClassName,
  })

  return <PriceTextView {...props} />
}
