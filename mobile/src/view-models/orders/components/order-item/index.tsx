import { Image, Text, View } from "react-native"
import dayjs from "dayjs"

import { buildImageUrl } from "@/shared/helpers/build-image-url"

import type { Order } from "@/shared/interfaces/order"

type OrderItemProps = {
  order: Order
}

export const OrderItem = ({ order }: OrderItemProps) => (
  <View className="flex-row gap-2 rounded-lg bg-white p-2">
    <Image
      source={{ uri: buildImageUrl(order.productPhoto) }}
      alt={order.productName}
      className="h-full w-[88px] rounded-md"
      resizeMode="cover"
    />

    {/* DESCRIPTION */}
    <View className="flex-1 gap-3 p-2">
      {/* TITLE */}
      <View className="flex-row items-center gap-3">
        <Text
          className="flex-1 font-lato-bold text-gray-500 text-sm leading-tight"
          numberOfLines={1}
        >
          {order.productName}
        </Text>

        <Text className="font-lato-bold text-gray-300 text-xs leading-tight">
          {dayjs(order.createdAt).format("DD/MM/YYYY")}
        </Text>
      </View>

      {/* INFO */}
      <View className="gap-0.5">
        <Text className="font-lato text-gray-400 text-xs leading-snug">
          {order.quantity} {order.quantity > 1 ? "unidades" : "unidade"}{" "}
          <Text className="text-gray-200">•</Text> R$ {order.totalPrice}
        </Text>

        <Text className="font-lato text-gray-400 text-xs leading-snug">
          Cartão final {order.creditCard.maskedNumber.slice(-4)}
        </Text>
      </View>
    </View>
  </View>
)
