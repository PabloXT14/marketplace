import { Text, View } from "react-native"

import { colors } from "@/styles/colors"

import { AppIcon } from "@/shared/components/app-icon"
import { Button } from "@/shared/components/button"
import { router } from "expo-router"

export const EmptyList = () => (
  <View className="flex-1 items-center gap-7 pt-16">
    <AppIcon name="CartLarge2" size={36} color={colors.gray[200]} />

    <View className="max-w-[250px] items-center gap-2">
      <Text className="font-lato-bold text-gray-400 text-sm leading-tight">
        Seu carrinho está vazio
      </Text>

      <Text className="text-center font-lato text-gray-300 text-sm leading-snug">
        Explore o catálogo de produtos e faça sua primeira compra!
      </Text>
    </View>

    <Button
      onPress={() => router.navigate("/(private)/(tabs)/home")}
      variant="outline"
      text="Explorar produtos"
      leftIcon="Shop2"
      className="w-fit"
    />
  </View>
)
