import { Text, TouchableOpacity, View } from "react-native"
import dayjs from "dayjs"

import { colors } from "@/styles/colors"

import { AppIcon } from "@/shared/components/app-icon"

import type { CreditCard } from "@/shared/interfaces/credit-card"

type CreditCardItemProps = {
  creditCard: CreditCard
}

export const CreditCardItem = ({ creditCard }: CreditCardItemProps) => {
  const { number, expirationDate } = creditCard

  const formattedExpirationDate = dayjs(new Date(expirationDate)).format(
    "MM/YY"
  )

  return (
    <View className="flex-row items-start gap-4 rounded-lg border border-gray-100 bg-white p-4">
      <AppIcon name="Card" size={24} color={colors.purple.base} />

      <View className="flex-1 gap-1">
        <Text className="font-lato-bold text-gray-400 text-sm leading-snug">
          {number}
        </Text>

        <Text className="font-lato text-gray-400 text-sm leading-snug">
          Vencimento: {formattedExpirationDate}
        </Text>
      </View>

      <TouchableOpacity>
        <AppIcon name="Pen2" size={24} color={colors.gray[300]} />
      </TouchableOpacity>
    </View>
  )
}
