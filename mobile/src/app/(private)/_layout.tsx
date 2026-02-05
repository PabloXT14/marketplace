import { Redirect, Stack } from "expo-router"

import { useUserStore } from "@/shared/store/user-store"

import { BottomSheet } from "@/shared/components/bottom-sheet"

export default function PrivateLayout() {
  const { user, token } = useUserStore()

  if (!(user && token)) {
    return <Redirect href="/(public)/login" />
  }

  return (
    <>
      <Stack
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="product/[id]" />
      </Stack>

      <BottomSheet />
    </>
  )
}
