import { Text, TouchableOpacity, View } from "react-native"

import type { useRegisterViewModel } from "./use-register.viewmodel"

type RegisterViewProps = ReturnType<typeof useRegisterViewModel>

export const RegisterView = ({ onSubmit, control }: RegisterViewProps) => (
  <View className="flex-1 items-center justify-center bg-zinc-100 px-10 py-9">
    <View className="w-full gap-4"></View>

    <TouchableOpacity
      className="mt-5 rounded-md bg-purple-base px-4 py-2"
      activeOpacity={0.7}
      onPress={() => onSubmit()}
    >
      <Text className="text-white">Cadastrar</Text>
    </TouchableOpacity>
  </View>
)
