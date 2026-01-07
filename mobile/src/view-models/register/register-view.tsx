import { Text, View } from "react-native"
import { router } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

import { AuthFormHeader } from "@/shared/components/auth-form-header"
import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"
import { InputController } from "@/shared/components/input-controller"
import { Button } from "@/shared/components/button"

import type { useRegisterViewModel } from "./use-register-view-model"

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

          <Button
            text="Cadastrar"
            rightIcon="ArrowRight"
            onPress={() => onSubmit()}
          />
        </View>

        {/* FOOTER */}
        <View className="mt-auto gap-5">
          <Text className="font-lato text-base text-gray-300">
            Já tem uma conta?
          </Text>

          <Button
            text="Acessar"
            variant="outline"
            rightIcon="ArrowRight"
            onPress={() => {
              router.back()
            }}
          />
        </View>
      </View>
    </DismissKeyboardView>
  </SafeAreaView>
)
