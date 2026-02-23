import { Text, View } from "react-native"

export const CartHeader = () => (
  <View className="mb-6 gap-1">
    <Text className="font-lato-bold text-gray-500 text-xl leading-tight">
      Carrinho
    </Text>
    <Text className="font-lato text-gray-400 text-sm leading-snug">
      Veja seu carrinho de compras
    </Text>
  </View>
)
