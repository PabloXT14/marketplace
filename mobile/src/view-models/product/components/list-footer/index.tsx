import { ActivityIndicator, View } from "react-native"

import { colors } from "@/styles/colors"

type ListFooterProps = {
  isLoading: boolean
}

export const ListFooter = ({ isLoading }: ListFooterProps) => {
  if (!isLoading) {
    return null
  }

  return (
    <View className="flex-1 items-center justify-center p-8">
      <ActivityIndicator size="small" color={colors.purple.base} />
    </View>
  )
}
