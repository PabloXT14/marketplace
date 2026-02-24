import { useCartStore, type CartProduct } from "@/shared/store/cart-store"

type UseProductCardViewModelProps = {
  product: CartProduct
}

export const useProductCardViewModel = ({
  product,
}: UseProductCardViewModelProps) => {
  const { updateQuantity } = useCartStore()

  const handleIncrement = () => {
    updateQuantity({ id: product.id, quantity: product.quantity + 1 })
  }

  const handleDecrement = () => {
    updateQuantity({ id: product.id, quantity: product.quantity - 1 })
  }

  return {
    product,
    handleIncrement,
    handleDecrement,
  }
}
