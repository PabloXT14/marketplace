import { Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"

import { AuthFormHeader } from "@/shared/components/auth-form-header"

export const LoginView = () => (
  <View className="flex-1 items-center justify-center bg-zinc-100 px-10 py-9">
    <AuthFormHeader
      title="Acesse sua conta"
      subtitle="Informe seu e-mail e senha para entrar"
    />

    <TouchableOpacity
      className="mb-4 h-button w-full flex-row items-center justify-between rounded-xl bg-purple-base px-4"
      activeOpacity={0.7}
      onPress={() => {
        /* TODO: navigate to home */
      }}
    >
      <Text className="font-lato-bold text-base text-white">Acessar</Text>
    </TouchableOpacity>

    <TouchableOpacity
      className="h-button w-full flex-row items-center justify-between rounded-xl border border-purple-base px-4"
      activeOpacity={0.7}
      onPress={() => {
        router.navigate("/register")
      }}
    >
      <Text className="font-lato-bold text-base text-purple-base">
        Cadastrar
      </Text>
    </TouchableOpacity>
  </View>
)
