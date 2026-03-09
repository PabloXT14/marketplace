import { Text, View } from "react-native"

export const ListHeader = () => (
  <View className="mb-6 gap-1">
    <Text className="font-lato-bold text-gray-500 text-xl leading-tight">
      Pedidos
    </Text>
    <Text className="font-lato text-gray-400 text-sm leading-snug">
      Confira sua lista de produtos comprados
    </Text>
  </View>
)
