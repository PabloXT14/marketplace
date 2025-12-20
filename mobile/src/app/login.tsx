import { Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"

export default function Login() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-100">
      <Text className="text-2xl text-zinc-950">Login</Text>

      <TouchableOpacity
        className="mt-5 rounded-md bg-purple-base px-4 py-2"
        activeOpacity={0.7}
        onPress={() => router.navigate("/register")}
      >
        <Text className="text-white">Register</Text>
      </TouchableOpacity>
    </View>
  )
}
