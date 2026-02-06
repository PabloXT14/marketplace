import { Image, Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"

import { AppIcon } from "@/shared/components/app-icon"

import { colors } from "@/styles/colors"
import { buildImageUrl } from "@/shared/helpers/build-image-url"

import type { Product } from "@/shared/interfaces/product"

type HeaderProps = {
  product: Product
}

export const Header = ({ product }: HeaderProps) => {
  if (!product) {
    return null
  }

  return (
    <View>
      <TouchableOpacity
        className="mb-4 flex-row items-center gap-2 p-0.5"
        activeOpacity={0.7}
        onPress={() => router.back()}
      >
        <AppIcon name="ArrowLeft" size={20} color={colors.purple.base} />

        <Text className="font-lato-bold text-purple-base text-sm leading-tight">
          Voltar
        </Text>
      </TouchableOpacity>

      <View className="relative w-full overflow-hidden rounded-lg bg-white shadow-gray-500/30 shadow-xl">
        <Image
          source={{ uri: buildImageUrl(product.photo) }}
          alt={product.name}
          className="h-[192px] w-full"
        />

        {/* RATING */}
        <View className="absolute top-0 right-0 flex-row items-center gap-1.5 rounded-bl-lg bg-blue-light px-2 py-1.5">
          <AppIcon name="Star" type="bold" size={14} color={colors.blue.base} />

          {/* VALUE */}
          <View className="flex-row items-center gap-1">
            <Text className="font-lato-bold text-gray-500 text-sm leading-tight">
              {product.averageRating.toFixed(1)}
            </Text>

            <Text className="font-lato-bold text-[10px] text-gray-400">
              / 5
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}
