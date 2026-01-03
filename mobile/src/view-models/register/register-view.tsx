import { Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

import { AuthFormHeader } from "@/shared/components/auth-form-header"
import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"
import { InputController } from "@/shared/components/input-controller"

import type { useRegisterViewModel } from "./use-register-view-model"
import { SolarIcon } from "react-native-solar-icons"
import { colors } from "@/styles/colors"

type RegisterViewProps = ReturnType<typeof useRegisterViewModel>

export const RegisterView = ({
  onSubmit,
  control,
  errors,
}: RegisterViewProps) => (
  <SafeAreaView className="flex-1 py-0">
    <DismissKeyboardView>
      <View className="flex-1 bg-zinc-100 px-10 py-9">
        <AuthFormHeader
          title="Crie sua conta"
          subtitle="Informe os seus dados pessoais e de acesso"
        />

        {/* FORM */}
        <View className="mb-16 w-full gap-10">
          {/* FIELD */}
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

          {/* FIELD */}
          <View className="w-full gap-5">
            <Text className="font-lato-bold text-base leading-tight">
              Acesso
            </Text>

            <InputController
              control={control}
              name="email"
              errors={errors}
              label="E-mail"
              leftIcon="Letter"
              placeholder="mail@exemplo.br"
            />

            <InputController
              control={control}
              name="password"
              errors={errors}
              label="Senha"
              leftIcon="KeyMinimalisticSquare2"
              placeholder="Sua senha"
              secureTextEntry
            />

            <InputController
              control={control}
              name="confirmPassword"
              errors={errors}
              label="Confirmar senha"
              leftIcon="KeyMinimalisticSquare2"
              placeholder="Confirme a senha"
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            className="mb-4 h-button w-full flex-row items-center justify-between rounded-xl bg-purple-base px-4"
            activeOpacity={0.7}
            onPress={() => onSubmit()}
          >
            <Text className="font-lato-bold text-base text-white">
              Cadastrar
            </Text>

            <SolarIcon
              name="ArrowRight"
              type="linear"
              size={24}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>

        {/* FOOTER */}
        <View className="mt-auto gap-5">
          <Text className="font-lato text-base text-gray-300">
            Já tem uma conta?
          </Text>

          <TouchableOpacity
            className="h-button w-full flex-row items-center justify-between rounded-xl border border-purple-base px-4"
            activeOpacity={0.7}
            onPress={() => {
              router.back()
            }}
          >
            <Text className="font-lato-bold text-base text-purple-base">
              Acessar
            </Text>

            <SolarIcon
              name="ArrowRight"
              type="linear"
              size={24}
              color={colors.purple.base}
            />
          </TouchableOpacity>
        </View>
      </View>
    </DismissKeyboardView>
  </SafeAreaView>
)
