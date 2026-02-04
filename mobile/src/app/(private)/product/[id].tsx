import { Text, View } from "react-native"

import { useLocalSearchParams } from "expo-router"

type ProductDetailsParams = {
  id: string
}

export default function ProductDetails() {
  const { id } = useLocalSearchParams<ProductDetailsParams>()

  return (
    <View className="flex-1 items-center justify-center bg-background px-10 py-9">
      <Text className="mb-4 font-lato-bold text-2xl text-zinc-950">
        Product Details - {id}
      </Text>
    </View>
  )
}
