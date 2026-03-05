import type { Order } from "../order"

export type CreateOrderHttpRequest = {
  creditCardId: number
  items: {
    productId: number
    quantity: number
  }[]
}

export type CreateOrderHttpResponse = {
  message: string
  ordersCount: number
  orders: Order[]
}
