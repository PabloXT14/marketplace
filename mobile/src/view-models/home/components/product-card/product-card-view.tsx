import { Image, Text, TouchableOpacity, View } from "react-native"

import { AppIcon } from "@/shared/components/app-icon"
import { PriceText } from "@/shared/components/price-text"

import type { useProductCardViewModel } from "./use-product-card-view-model"

import { colors } from "@/styles/colors"

type ProductCardViewProps = ReturnType<typeof useProductCardViewModel>

export const ProductCardView = ({
  product,
  formattedRating,
}: ProductCardViewProps) => {
  return (
    <TouchableOpacity
      className="relative flex-1 justify-between gap-2 overflow-hidden rounded-xl bg-white p-2"
      activeOpacity={0.7}
    >
      <Image
        source={{ uri: product.photo }}
        alt={product.name}
        className="h-[96px] w-full rounded-lg"
        resizeMode="cover"
      />

      {/* INFO */}
      <View className="flex-grow justify-between gap-1 p-1">
        <Text
          className="font-lato text-gray-400 text-sm leading-snug"
          numberOfLines={2}
        >
          {product.name}
        </Text>

        {/* PRICE */}
        {/* <View className="flex-row items-center gap-1">
          <Text className="font-lato-bold text-gray-500 text-xs leading-tight">
            R$
          </Text>
          <Text className="font-lato-bold text-gray-500 text-sm leading-tight">
            {product.value}
          </Text>
        </View> */}
        <PriceText value={Number(product.value)} />
      </View>

      {/* RATING */}
      <View className="absolute top-0 right-0 flex-row items-center gap-1 rounded-bl-lg bg-white py-2 pr-3 pl-2">
        <AppIcon type="bold" name="Star" size={12} color={colors.blue.base} />

        <Text className="font-lato-bold text-gray-500 text-xs leading-tight">
          {formattedRating}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
