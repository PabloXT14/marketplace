import { Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
import { SolarIcon } from "react-native-solar-icons"

import { colors } from "@/styles/colors"

import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"
import { AuthFormHeader } from "@/shared/components/auth-form-header"
import { InputController } from "@/shared/components/input-controller"

import type { useLoginViewModel } from "./use-login-view-model"

type LoginViewProps = ReturnType<typeof useLoginViewModel>

export const LoginView = ({ control, onSubmit, errors }: LoginViewProps) => (
  <SafeAreaView className="flex-1">
    <DismissKeyboardView>
      <View className="flex-1 bg-zinc-100 px-10 py-9">
        <AuthFormHeader
          title="Acesse sua conta"
          subtitle="Informe seu e-mail e senha para entrar"
        />

        {/* FORM */}
        <View className="mb-10 w-full gap-10">
          {/* FIELD */}
          <View className="w-full gap-5">
            <InputController
              control={control}
              name="email"
              errors={errors}
              label="E-mail"
              placeholder="mail@exemplo.br"
              leftIcon="Letter"
            />

            <InputController
              control={control}
              name="password"
              errors={errors}
              label="Senha"
              placeholder="Sua senha"
              leftIcon="KeyMinimalisticSquare2"
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            className="mb-4 h-button w-full flex-row items-center justify-between rounded-xl bg-purple-base px-4"
            activeOpacity={0.7}
            onPress={() => {
              onSubmit()
            }}
          >
            <Text className="font-lato-bold text-base text-white">Acessar</Text>

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
            Ainda não tem conta?
          </Text>

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
