import { Text, TouchableOpacity, View } from "react-native"

import type { SelectionOption } from "@/shared/hooks/use-modal"
import { SolarIcon } from "react-native-solar-icons"

export type SelectionModalProps = {
  title: string
  message?: string
  options: SelectionOption[]
}

export const SelectionModal = ({
  title,
  message,
  options,
}: SelectionModalProps) => (
  <View className="w-full rounded-xl bg-white p-5 shadow-2xl">
    <Text>{title}</Text>

    {message && <Text>{message}</Text>}

    <View>
      {options?.map((option) => (
        <TouchableOpacity
          key={option.text}
          activeOpacity={0.7}
          onPress={option.onPress}
        >
          {option.icon && (
            <SolarIcon type="linear" name={option.icon} size={24} />
          )}

          <Text>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  </View>
)
