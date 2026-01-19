import { Text, View } from "react-native"

import { Button } from "@/shared/components/button"

import { useUserStore } from "@/shared/store/user-store"

export default function Home() {
  const { logout } = useUserStore()

  return (
    <View className="flex-1 items-center justify-center bg-white px-10 py-9">
      <Text className="mb-4 font-lato-bold text-2xl text-zinc-950">Home</Text>

      <Button text="Logout" onPress={logout} />
    </View>
  )
}
