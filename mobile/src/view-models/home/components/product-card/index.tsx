import {
  Image,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
} from "react-native"
import { SolarIcon } from "react-native-solar-icons"

import { colors } from "@/styles/colors"

import type { Product } from "@/shared/interfaces/product"

type ProductCardProps = TouchableOpacityProps & {
  product: Product
}

export const ProductCard = ({ product, ...props }: ProductCardProps) => {
  return (
    <TouchableOpacity {...props}>
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
