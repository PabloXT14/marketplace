import { Text, View } from "react-native"
import { router } from "expo-router"

import { AppIcon } from "@/shared/components/app-icon"

import { colors } from "@/styles/colors"
import { Button } from "@/shared/components/button"

export const ProductError = () => (
  <View className="flex-1 items-center justify-center gap-2 bg-background px-6 pt-9">
    <AppIcon name="Danger" size={40} color={colors.purple.base} />

    <Text className="text-center font-lato text-base text-gray-500">
      Houve um erro ao carregar os detalhes do produto
    </Text>

    <Button text="Voltar" className="mt-4" onPress={() => router.back()} />
  </View>
)
