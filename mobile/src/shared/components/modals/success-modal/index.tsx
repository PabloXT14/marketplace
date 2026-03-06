import { Text, View } from "react-native"

import { colors } from "@/styles/colors"

import { AppIcon } from "../../app-icon"
import { Button } from "../../button"

export type SuccessModalProps = {
  title: string
  message?: string
  buttonText?: string
  onButtonPress?: () => void
}

export const SuccessModal = ({
  title,
  message,
  buttonText = "Fechar",
  onButtonPress,
}: SuccessModalProps) => {
  return (
    <View className="w-full rounded-xl bg-white p-6 shadow-2xl">
      {/* HEADER */}
      <View className="mb-6 items-center gap-4">
        <AppIcon name="CheckCircle" size={64} color={colors.success} />

        <Text className="text-center font-lato-bold text-gray-500 text-lg leading-tight">
          {title}
        </Text>

        {message && (
          <Text className="text-center font-lato text-gray-300 text-sm leading-snug">
            {message}
          </Text>
        )}
      </View>

      {/* ACTIONS */}

      <Button
        text={buttonText}
        className="w-full justify-center"
        onPress={onButtonPress}
      />
    </View>
  )
}
