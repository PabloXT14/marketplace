import { Text, TouchableOpacity, View } from "react-native"

import { colors } from "@/styles/colors"

import { AppIcon } from "@/shared/components/app-icon"

import type { useCreditCardViewModel } from "./use-credit-card-view-model"

type CreditCardItemViewProps = ReturnType<typeof useCreditCardViewModel>

export const CreditCardItemView = ({
  formattedExpirationDate,
  formattedCardNumber,
}: CreditCardItemViewProps) => (
  <TouchableOpacity
    onPress={() => console.log("Selected card")}
    className="flex-row items-start gap-4 rounded-lg border border-shape bg-white p-4"
  >
    <AppIcon name="Card" size={24} color={colors.gray[300]} />

    <View className="flex-1 gap-1.5">
      <Text className="font-lato text-gray-400 text-sm leading-snug">
        Cartão final {formattedCardNumber}
      </Text>

      <Text className="font-lato text-gray-400 text-sm leading-snug">
        {formattedExpirationDate}
      </Text>
    </View>

    <TouchableOpacity onPress={() => console.log("Edit card")}>
      <AppIcon name="Pen2" size={24} color={colors.purple.base} />
    </TouchableOpacity>
  </TouchableOpacity>
)
