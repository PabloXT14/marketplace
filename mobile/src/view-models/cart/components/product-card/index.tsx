import { Image, Text, TouchableOpacity, View } from "react-native"

import { PriceText } from "@/shared/components/price-text"
import { AppIcon } from "@/shared/components/app-icon"

import { colors } from "@/styles/colors"
import { buildImageUrl } from "@/shared/helpers/build-image-url"

import type { CartProduct } from "@/shared/store/cart-store"

type ProductCardProps = {
  product: CartProduct
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <View className="flex-row gap-1 rounded-lg bg-white p-2">
      <Image
        source={{ uri: buildImageUrl(product.image || "") }}
        alt={product.name}
        className="size-[64px] rounded-md"
        resizeMode="cover"
      />

      {/* DESCRIPTION */}
      <View className="flex-1 flex-row items-center justify-center gap-3 p-2 pb-3">
        {/* TEXTS */}
        <View className="flex-1 gap-1.5">
          <Text
            numberOfLines={1}
            className="font-lato text-gray-400 text-sm leading-snug"
          >
            {product.name}
          </Text>

          <PriceText
            value={Number(product.price)}
            currencyClassName="text-sm"
            valueClassName="text-sm"
          />
        </View>

        {/* ACTIONS */}
        <View className="flex-row items-center justify-center gap-2">
          <TouchableOpacity>
            <AppIcon name="MinusSquare" size={20} color={colors.purple.base} />
          </TouchableOpacity>

          <View className="size-[20px] items-center justify-center border-gray-100 border-b">
            <Text className="font-lato-bold text-gray-400 text-xs leading-tight">
              {product.quantity}
            </Text>
          </View>

          <TouchableOpacity>
            <AppIcon name="AddSquare" size={20} color={colors.purple.base} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
