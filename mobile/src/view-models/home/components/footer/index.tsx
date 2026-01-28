import { ActivityIndicator, View } from "react-native"

import { colors } from "@/styles/colors"

type FooterProps = {
  isLoading: boolean
}

export const Footer = ({ isLoading }: FooterProps) => {
  if (!isLoading) {
    return null
  }

  return (
    <View className="flex-1 items-center justify-center p-8">
      <ActivityIndicator size="small" color={colors.purple.base} />
    </View>
  )
}
