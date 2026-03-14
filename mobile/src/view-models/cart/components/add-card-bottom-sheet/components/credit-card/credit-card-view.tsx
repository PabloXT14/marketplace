import { View } from "react-native"

import type { useCreditCardViewModel } from "./use-credit-card-view-model"

type CreditCardViewProps = ReturnType<typeof useCreditCardViewModel>

export const CreditCardView = (_props: CreditCardViewProps) => (
  <View className="self-center">
    <View className="h-[168px] w-[280px] rounded-2xl bg-gray-100" />
  </View>
)
