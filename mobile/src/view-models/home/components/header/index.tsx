import { Image, Text, TouchableOpacity, View } from "react-native"
import { SolarIcon } from "react-native-solar-icons"

import { useUserStore } from "@/shared/store/user-store"
import { colors } from "@/styles/colors"

export const HomeHeader = () => {
  const { user } = useUserStore()

  return (
    <TouchableOpacity className="mb-8 w-full flex-row items-center gap-5">
      {user?.avatarUrl ? (
        <Image
          source={{ uri: user?.avatarUrl }}
          alt={user?.name}
          className="size-16 rounded-xl border border-shape"
        />
      ) : (
        <View className="size-16 items-center justify-center rounded-xl border border-shape bg-shape">
          <SolarIcon
            type="linear"
            name="User"
            size={24}
            color={colors.gray[300]}
          />
        </View>
      )}

      <View className="gap-1">
        <Text className="font-lato-bold text-base text-gray-500 leading-tight">
          Olá, {user?.name.split(" ")[0] || "Usuário"}!
        </Text>

        <View className="flex-row items-center gap-2 p-0.5">
          <Text className="font-lato-bold text-purple-base text-sm leading-tight">
            Ver perfil
          </Text>

          <SolarIcon
            type="linear"
            name="ArrowRight"
            size={20}
            color={colors.purple.base}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}
