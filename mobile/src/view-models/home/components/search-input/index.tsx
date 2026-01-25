import { Text, TouchableOpacity, View } from "react-native"
import { SolarIcon } from "react-native-solar-icons"

import { Input, type InputProps } from "@/shared/components/input"

import { colors } from "@/styles/colors"

type SearchInputProps = InputProps

export const SearchInput = (props: SearchInputProps) => (
  <View className="gap-1">
    <Text className="font-lato-bold text-base text-gray-500 leading-tight">
      Explore produtos
    </Text>

    <View className="flex-row items-end gap-4">
      <Input
        leftIcon="Magnifer"
        placeholder="Pesquisar"
        containerClassName="flex-1"
        {...props}
      />

      <TouchableOpacity className="size-12 items-center justify-center rounded-xl border border-purple-base">
        <SolarIcon
          type="linear"
          name="Filter"
          size={20}
          color={colors.purple.base}
        />
      </TouchableOpacity>
    </View>
  </View>
)
