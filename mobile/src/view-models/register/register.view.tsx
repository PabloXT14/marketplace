import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"

import type { useRegisterViewModel } from "./use-register.viewmodel"

import { Input } from "@/shared/components/input"

type RegisterViewProps = ReturnType<typeof useRegisterViewModel>

export const RegisterView = ({ onSubmit }: RegisterViewProps) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <View className="flex-1 items-center justify-center bg-zinc-100 px-10 py-9">
      <View className="w-full gap-4">
        <Input
          label="E-mail"
          placeholder="mail@exemplo.br"
          value={email}
          onChangeText={setEmail}
          leftIcon="Letter"
        />

        <Input
          label="Senha"
          placeholder="Sua senha"
          value={password}
          onChangeText={setPassword}
          leftIcon="KeyMinimalisticSquare2"
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        className="mt-5 rounded-md bg-purple-base px-4 py-2"
        activeOpacity={0.7}
        onPress={() => onSubmit()}
      >
        <Text className="text-white">Cadastrar</Text>
      </TouchableOpacity>
    </View>
  )
}
