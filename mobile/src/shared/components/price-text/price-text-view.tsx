import { Text, View } from "react-native"

import type { usePriceTextViewModel } from "./use-price-text-view-model"

import { cn } from "@/shared/lib/utils"

type PriceTextViewProps = ReturnType<typeof usePriceTextViewModel>

export const PriceTextView = ({
  containerClassName,
  currencyClassName,
  valueClassName,
  currencySymbol,
  valueText,
}: PriceTextViewProps) => (
  <View className={cn("flex-row items-baseline gap-1", containerClassName)}>
    <Text
      className={cn(
        "font-lato-bold text-gray-500 text-xs leading-tight",
        currencyClassName
      )}
    >
      {currencySymbol}
    </Text>

    <Text
      className={cn(
        "font-lato-bold text-base text-gray-500 leading-tight",
        valueClassName
      )}
    >
      {valueText}
    </Text>
  </View>
)
