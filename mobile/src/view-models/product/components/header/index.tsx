import { Image, Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"

import { AppIcon } from "@/shared/components/app-icon"
import { PriceText } from "@/shared/components/price-text"

import { colors } from "@/styles/colors"
import { buildImageUrl } from "@/shared/helpers/build-image-url"

import type { Product } from "@/shared/interfaces/product"

type HeaderProps = {
  product: Product
  onOpenReview: () => void
}

export const Header = ({ product, onOpenReview }: HeaderProps) => {
  if (!product) {
    return null
  }

  return (
    <View>
      {/* BACK BUTTON */}
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

      {/* IMAGE */}
      <View className="relative mb-7 w-full overflow-hidden rounded-lg bg-white shadow-gray-500/30 shadow-xl">
        <Image
          source={{ uri: buildImageUrl(product.photo) }}
          alt={product.name}
          className="h-[192px] w-full"
        />

        {/* RATING */}
        <View className="absolute top-0 right-0 flex-row items-center gap-1.5 rounded-bl-lg bg-blue-light px-2 py-1.5">
          <AppIcon name="Star" type="bold" size={14} color={colors.blue.base} />

          {/* VALUE */}
          <View className="flex-row items-baseline gap-1">
            <Text className="font-lato-bold text-gray-500 text-sm leading-tight">
              {product.averageRating.toFixed(1)}
            </Text>

            <Text className="font-lato-bold text-[10px] text-gray-400">
              / 5
            </Text>
          </View>
        </View>
      </View>

      {/* CONTENT */}
      <View className="gap-5">
        {/* DETAILS */}
        <View className="gap-4">
          {/* TITLE */}
          <View className="flex-row items-baseline justify-between gap-4">
            <Text className="max-w-[70%] flex-1 font-lato-bold text-gray-500 text-xl leading-tight">
              {product.name}
            </Text>

            <PriceText
              value={Number(product.value)}
              currencyClassName="text-sm"
              valueClassName="text-xl"
            />
          </View>

          {/* ITEM */}
          <View className="flex-row items-center gap-3 rounded-lg bg-blue-light p-3">
            {/* ICON */}
            <View className="size-[36px] items-center justify-center rounded-[6px] bg-blue-base">
              <AppIcon name="DiagramUp" size={20} color={colors.white} />
            </View>

            <Text className="flex-1 font-lato text-gray-400 text-sm leading-snug">
              <Text className="font-lato-bold">{product.views} pessoas</Text>{" "}
              visualizaram este produto nos últimos 7 dias
            </Text>
          </View>

          {/* DESCRIPTION */}
          <View className="gap-4">
            <Text className="font-lato text-base text-gray-400 leading-6">
              {product.description}
            </Text>

            {(product.weight || product.height || product.width) && (
              <View>
                {product.width && (
                  <Text className="font-lato text-base text-gray-400 leading-6">
                    Largura: {product.width}
                  </Text>
                )}

                {product.height && (
                  <Text className="font-lato text-base text-gray-400 leading-6">
                    Altura: {product.height}
                  </Text>
                )}

                {product.weight && (
                  <Text className="font-lato text-base text-gray-400 leading-6">
                    Peso: {product.weight}
                  </Text>
                )}
              </View>
            )}
          </View>

          {/* CATEGORY */}
          <View className="gap-1.5">
            <Text className="font-lato-bold text-base text-gray-500 leading-tight">
              Categoria
            </Text>
            <Text className="font-lato text-gray-400 text-sm leading-snug">
              {product.category.name}
            </Text>
          </View>
        </View>

        {/* DIVIDER */}
        <View className="h-px w-full bg-gray-100" />

        {/* COMMENTS */}
        <View className="mb-3">
          {/* TITLE */}
          <View className="flex-row items-center justify-between">
            <Text className="font-lato-bold text-base text-gray-500 leading-tight">
              Avaliações
            </Text>

            <TouchableOpacity activeOpacity={0.7} onPress={onOpenReview}>
              <Text className="font-lato-bold text-base text-purple-base leading-tight">
                Avaliar
              </Text>
            </TouchableOpacity>
          </View>

          {/* LIST IS LOADED ON THE FLATLIST THAT WRAPS THIS COMPONENT */}
        </View>
      </View>
    </View>
  )
}
