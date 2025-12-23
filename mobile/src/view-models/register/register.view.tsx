import { Text, TouchableOpacity, View } from "react-native"

import type { useRegisterViewModel } from "./use-register.viewmodel"

type RegisterViewProps = ReturnType<typeof useRegisterViewModel>

export const RegisterView = ({ onSubmit }: RegisterViewProps) => (
  <View className="flex-1 items-center justify-center bg-zinc-100">
    <Text className="text-2xl text-zinc-950">Register</Text>

    <TouchableOpacity
      className="mt-5 rounded-md bg-purple-base px-4 py-2"
      activeOpacity={0.7}
      onPress={() => onSubmit()}
    >
      <Text className="text-white">Cadastrar</Text>
    </TouchableOpacity>
  </View>
)
