import { Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"

export default function Register() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-100">
      <Text className="text-2xl text-zinc-950">Register</Text>

      <TouchableOpacity
        className="mt-5 rounded-md bg-purple-base px-4 py-2"
        activeOpacity={0.7}
        onPress={() => router.back()}
      >
        <Text className="text-white">Login</Text>
      </TouchableOpacity>
    </View>
  )
}
