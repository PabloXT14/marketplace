import { ActivityIndicator, Text, View } from "react-native"

import { colors } from "@/styles/colors"

export const Loading = () => (
  <View className="flex-1 items-center justify-center gap-2 bg-background">
    <ActivityIndicator size="large" color={colors.purple.base} />

    <Text className="text-center font-lato text-base text-gray-500">
      Carregando produto...
    </Text>
  </View>
)
