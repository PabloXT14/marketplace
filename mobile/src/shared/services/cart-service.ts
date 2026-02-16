import type {
  CartProduct,
  CartProductWithoutQuantity,
} from "../store/cart-store"

export const cartService = {
  findExistingProduct: (products: CartProduct[], productId: number) =>
    products.some((product) => product.id === productId),

  addProductToCart: (
    products: CartProduct[],
    newProduct: CartProductWithoutQuantity
  ) => {
    const productAlreadyExists = cartService.findExistingProduct(
      products,
      newProduct.id
    )

    let updatedProducts: CartProduct[] = []

    if (productAlreadyExists) {
      updatedProducts = products.map((product) =>
        product.id === newProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    } else {
      updatedProducts = [...products, { ...newProduct, quantity: 1 }]
    }

    const newTotalPrice = cartService.calculateTotalPrice(updatedProducts)

    return { products: updatedProducts, totalPrice: newTotalPrice }
  },

  calculateTotalPrice: (products: CartProduct[]) =>
    products.reduce((acc, product) => {
      const productPrice = Number(product.price) * product.quantity
      return acc + productPrice
    }, 0),

  removeProductFromCart: (products: CartProduct[], productId: number) => {
    const updatedProducts = products.filter(
      (product) => product.id !== productId
    )

    const newTotalPrice = cartService.calculateTotalPrice(updatedProducts)

    return {
      products: updatedProducts,
      totalPrice: newTotalPrice,
    }
  },

  updateProductQuantity: ({
    products,
    productId,
    quantity,
  }: {
    products: CartProduct[]
    productId: number
    quantity: number
  }) => {
    if (quantity <= 0) {
      return cartService.removeProductFromCart(products, productId)
    }

    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity }
      }

      return product
    })

    const newTotalPrice = cartService.calculateTotalPrice(updatedProducts)

    return {
      products: updatedProducts,
      totalPrice: newTotalPrice,
    }
  },

  getItemsCount: (products: CartProduct[]) =>
    products.reduce((acc, product) => acc + product.quantity, 0),
}
