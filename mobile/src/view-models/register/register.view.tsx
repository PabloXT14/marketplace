import { Text, TouchableOpacity, View } from "react-native"

import type { useRegisterViewModel } from "./use-register.viewmodel"

import { InputController } from "@/shared/components/input-controller"

type RegisterViewProps = ReturnType<typeof useRegisterViewModel>

export const RegisterView = ({
  onSubmit,
  control,
  errors,
}: RegisterViewProps) => (
  <View className="flex-1 items-center justify-center bg-zinc-100 px-10 py-9">
    <View className="w-full gap-5">
      <InputController
        control={control}
        name="name"
        errors={errors}
        label="Nome"
        leftIcon="User"
        placeholder="Seu nome completo"
      />

      <InputController
        control={control}
        name="phone"
        errors={errors}
        label="Telefone"
        leftIcon="Phone"
        placeholder="(00) 00000-0000"
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
