import { Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"

import { AppIcon } from "@/shared/components/app-icon"

import { colors } from "@/styles/colors"

type HeaderProps = {
  onLogout: () => void
}

export const Header = ({ onLogout }: HeaderProps) => {
  return (
    <View className="flex-row items-center justify-between">
      {/* BACK BUTTON */}
      <TouchableOpacity
        className="flex-row items-center gap-2 p-0.5"
        activeOpacity={0.7}
        onPress={() => router.back()}
      >
        <AppIcon name="ArrowLeft" size={20} color={colors.purple.base} />

        <Text className="font-lato-bold text-purple-base text-sm leading-tight">
          Voltar
        </Text>
      </TouchableOpacity>

      {/* EXIT BUTTON */}
      <TouchableOpacity
        className="flex-row items-center gap-2 p-0.5"
        activeOpacity={0.7}
        onPress={onLogout}
      >
        <AppIcon name="Logout3" size={20} color={colors.danger} />

        <Text className="font-lato-bold text-danger text-sm leading-tight">
          Sair
        </Text>
      </TouchableOpacity>
    </View>
  )
}
