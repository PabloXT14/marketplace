import { Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { colors } from "@/styles/colors"

import type { useProfileViewModel } from "./use-profile-view-model"

import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"
import { AppIcon } from "@/shared/components/app-icon"
import { InputController } from "@/shared/components/input-controller"
import { Button } from "@/shared/components/button"

type ProfileViewProps = ReturnType<typeof useProfileViewModel>

export const ProfileView = ({
  avatarUri,
  control,
  onSubmit,
  errors,
}: ProfileViewProps) => (
  <SafeAreaView className="flex-1 bg-background">
    <DismissKeyboardView>
      <View className="flex-1 px-6 py-9">
        {/* FORM */}
        <View className="mb-16 w-full gap-10">
          {/* IMAGE FIELD */}
          <View className="w-full gap-5">
            {/* IMAGE */}
            <TouchableOpacity
              onPress={() => {
                /*  */
              }}
              activeOpacity={0.7}
              className="mx-auto size-32 items-center justify-center rounded-xl bg-shape"
            >
              {avatarUri ? (
                <Image
                  source={{ uri: avatarUri }}
                  className="size-full rounded-xl"
                  resizeMode="cover"
                />
              ) : (
                <AppIcon
                  name="UploadMinimalistic"
                  size={32}
                  color={colors.purple.base}
                />
              )}
            </TouchableOpacity>
          </View>

          {/* INFO FIELD */}
          <View className="w-full gap-5">
            <Text className="font-lato-bold text-base leading-tight">
              Dados pessoais
            </Text>

            <InputController
              control={control}
              name="name"
              errors={errors}
              label="Nome"
              leftIcon="User"
              placeholder="mail@exemplo.br"
            />

            <InputController
              control={control}
              name="phone"
              errors={errors}
              label="Telefone"
              leftIcon="Phone"
              placeholder="(99) 99999-9999"
            />
          </View>

          {/* ACCESS FIELD */}
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
              name="newPassword"
              errors={errors}
              label="Nova senha"
              leftIcon="KeyMinimalisticSquare2"
              placeholder="Sua nova senha"
              secureTextEntry
            />
          </View>

          <Button text="Atualizar cadastro" onPress={() => onSubmit()} />
        </View>
      </View>
    </DismissKeyboardView>
  </SafeAreaView>
)
