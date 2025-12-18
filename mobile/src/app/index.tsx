import { Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-zinc-950">
      <Text className="text-2xl text-white">Home</Text>

      <TouchableOpacity
        className="mt-5 rounded-md bg-purple-base px-4 py-2"
        activeOpacity={0.7}
        onPress={() => router.navigate("/login")}
      >
        <Text className="text-white">Login</Text>
      </TouchableOpacity>
    </View>
  )
}
