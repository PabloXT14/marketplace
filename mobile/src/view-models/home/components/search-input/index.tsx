import { Text, TouchableOpacity, View } from "react-native"
import { AppIcon } from "@/shared/components/app-icon"

import { Input, type InputProps } from "@/shared/components/input"

import { colors } from "@/styles/colors"
import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"

type SearchInputProps = InputProps

export const SearchInput = (props: SearchInputProps) => {
  const { open } = useBottomSheetStore()

  return (
    <View className="mb-6 gap-1">
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

        <TouchableOpacity
          onPress={() =>
            open({
              content: <Text>Teste</Text>,
              config: {},
            })
          }
          className="size-12 items-center justify-center rounded-xl border border-purple-base"
        >
          <AppIcon name="Filter" size={20} color={colors.purple.base} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
