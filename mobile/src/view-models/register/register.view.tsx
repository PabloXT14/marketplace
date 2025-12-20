import { Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"

import type { useRegisterViewModel } from "./use-register.viewmodel"

type RegisterViewProps = ReturnType<typeof useRegisterViewModel>

export const RegisterView = ({ userData, setUserData }: RegisterViewProps) => (
  <View className="flex-1 items-center justify-center bg-zinc-100">
    <Text className="text-2xl text-zinc-950">Register</Text>

    <Text className="mt-5 text-zinc-950">Name: {userData.name}</Text>
    <Text className="mt-5 text-zinc-950">Email: {userData.email}</Text>
    <Text className="mt-5 text-zinc-950">Password: {userData.password}</Text>

    <TouchableOpacity
      className="mt-5 rounded-md bg-purple-base px-4 py-2"
      activeOpacity={0.7}
      onPress={() => router.back()}
    >
      <Text className="text-white">Login</Text>
    </TouchableOpacity>
  </View>
)
