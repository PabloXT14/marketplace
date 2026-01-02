import { Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"

import { AuthFormHeader } from "@/shared/components/auth-form-header"

import type { useRegisterViewModel } from "./use-register-view-model"

type RegisterViewProps = ReturnType<typeof useRegisterViewModel>

export const RegisterView = ({ onSubmit }: RegisterViewProps) => (
  <View className="flex-1 items-center justify-center bg-zinc-100 px-10 py-9">
    <AuthFormHeader
      title="Crie sua conta"
      subtitle="Informe os seus dados pessoais e de acesso"
    />

    <TouchableOpacity
      className="mb-4 h-button w-full flex-row items-center justify-between rounded-xl bg-purple-base px-4"
      activeOpacity={0.7}
      onPress={() => onSubmit()}
    >
      <Text className="font-bold text-base text-white">Cadastrar</Text>
    </TouchableOpacity>

    <TouchableOpacity
      className="h-button w-full flex-row items-center justify-between rounded-xl border border-purple-base px-4"
      activeOpacity={0.7}
      onPress={() => {
        router.back()
      }}
    >
      <Text className="font-bold text-base text-purple-base">Acessar</Text>
    </TouchableOpacity>
  </View>
)
