import { Image, Text, TouchableOpacity, View } from "react-native"
import { SolarIcon } from "react-native-solar-icons"

import type { useProductCardViewModel } from "./use-product-card-view-model"

import { colors } from "@/styles/colors"

type ProductCardViewProps = ReturnType<typeof useProductCardViewModel>

export const ProductCardView = ({ product }: ProductCardViewProps) => {
  return (
    <TouchableOpacity>
      <Image
        source={{ uri: product.photo }}
        alt={product.name}
        className="h-24 w-full"
        resizeMode="cover"
      />

      {/* INFO */}
      <View>
        <Text>{product.name}</Text>
        {/* PRICE */}
        <View>
          <Text>R$</Text>
          <Text>{product.value}</Text>
        </View>
      </View>

      {/* RATING */}
      <View>
        <SolarIcon type="bold" name="Star" size={10} color={colors.blue.base} />
        <Text>4.5</Text>
      </View>
    </TouchableOpacity>
  )
}
