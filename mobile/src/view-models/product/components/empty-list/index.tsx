import { ActivityIndicator, Text, View } from "react-native"

import { colors } from "@/styles/colors"

type EmptyListProps = {
  isLoadingComments: boolean
}

export const EmptyList = ({ isLoadingComments }: EmptyListProps) => {
  if (isLoadingComments) {
    return (
      <View className="flex-1 items-center justify-center gap-2 py-9">
        <ActivityIndicator size="small" color={colors.purple.base} />

        <Text className="text-center font-lato text-base text-gray-500">
          Carregando avaliações...
        </Text>
      </View>
    )
  }

  return (
    <View className="flex-1 items-center justify-center gap-1 py-9">
      <Text className="text-center font-lato text-gray-500 text-sm">
        Ainda não há avaliações para esse produto
      </Text>

      <Text className="text-center font-lato text-gray-500 text-sm">
        Seja o primeiro a avaliar!
      </Text>
    </View>
  )
}
