import { Text, TouchableOpacity, View } from "react-native"
import { AppIcon } from "../../app-icon"

import type {
  SelectionOption,
  SelectionVariant,
} from "@/shared/hooks/use-modal"

import { colors } from "@/styles/colors"
import { cn } from "@/shared/lib/utils"

export type SelectionModalProps = {
  title: string
  message?: string
  options: SelectionOption[]
}

export const SelectionModal = ({
  title,
  message,
  options,
}: SelectionModalProps) => {
  const getButtonClass = (variant: SelectionVariant) =>
    cn(
      "h-[48px] flex-row items-center justify-center gap-2 rounded-xl px-4",
      options.length <= 2 ? "flex-1" : "w-full",
      variant === "primary" && "bg-purple-base",
      variant === "secondary" && "border border-purple-base bg-transparent",
      variant === "tertiary" && "bg-blue-dark",
      variant === "danger" && "bg-danger"
    )

  const getTextClass = (variant: SelectionVariant) =>
    cn(
      "font-lato-bold text-base",
      variant === "primary" && "text-white",
      variant === "secondary" && "text-purple-base",
      variant === "tertiary" && "text-white",
      variant === "danger" && "text-white"
    )

  const getIconColor = (variant: SelectionVariant) => {
    if (
      variant === "primary" ||
      variant === "danger" ||
      variant === "tertiary"
    ) {
      return colors.white
    }

    return colors.purple.base
  }

  return (
    <View className="w-full rounded-xl bg-white p-6 shadow-2xl">
      {/* HEADER */}
      <View className="mb-6">
        <Text className="font-lato-bold text-gray-500 text-lg leading-tight">
          {title}
        </Text>

        {message && (
          <Text className="font-lato text-gray-300 text-sm leading-snug">
            {message}
          </Text>
        )}
      </View>

      <View className={cn("gap-3", options.length <= 2 && "flex-row")}>
        {options?.map((option, index) => (
          <TouchableOpacity
            key={`selection-modal-option-${index + 1}`}
            activeOpacity={0.7}
            onPress={option.onPress}
            className={getButtonClass(option.variant || "primary")}
          >
            {option.icon && (
              <AppIcon
                name={option.icon}
                size={20}
                color={getIconColor(option.variant || "primary")}
              />
            )}

            <Text className={getTextClass(option.variant || "primary")}>
              {option.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
