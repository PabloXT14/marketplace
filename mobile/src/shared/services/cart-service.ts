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

    if (productAlreadyExists) {
      return products.map((product) =>
        product.id === newProduct.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    }

    return [...products, { ...newProduct, quantity: 1 }]
  },
  calculateTotalPrice: (products: CartProduct[]) =>
    products.reduce((acc, product) => {
      const productPrice = Number(product.price) * product.quantity
      return acc + productPrice
    }, 0),
}
