import { Text, View } from "react-native"
import { router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"
import { AuthFormHeader } from "@/shared/components/auth-form-header"
import { InputController } from "@/shared/components/input-controller"
import { Button } from "@/shared/components/button"

import type { useLoginViewModel } from "./use-login-view-model"

type LoginViewProps = ReturnType<typeof useLoginViewModel>

export const LoginView = ({ control, onSubmit, errors }: LoginViewProps) => (
  <SafeAreaView className="flex-1 bg-white">
    <DismissKeyboardView>
      <View className="flex-1 px-10 py-9">
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

          <Button
            text="Acessar"
            rightIcon="ArrowRight"
            onPress={() => {
              onSubmit()
            }}
          />
        </View>

        {/* FOOTER */}
        <View className="mt-auto gap-5">
          <Text className="font-lato text-base text-gray-300">
            Ainda não tem conta?
          </Text>

          <Button
            text="Cadastrar"
            variant="outline"
            rightIcon="ArrowRight"
            onPress={() => {
              router.navigate("/register")
            }}
          />
        </View>
      </View>
    </DismissKeyboardView>
  </SafeAreaView>
)
