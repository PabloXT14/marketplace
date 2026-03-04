import { CartFooterView } from "./cart-footer-view"
import {
  useCartFooterViewModel,
  type UseCartFooterViewModelProps,
} from "./use-cart-footer-view-model"

type CartFooterProps = UseCartFooterViewModelProps

export const CartFooter = (props: CartFooterProps) => {
  const viewModel = useCartFooterViewModel(props)

  return <CartFooterView {...viewModel} />
}
