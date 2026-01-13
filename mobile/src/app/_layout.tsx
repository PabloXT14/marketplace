import { Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { QueryClientProvider } from "@tanstack/react-query"
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
} from "@expo-google-fonts/lato"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Toaster } from "sonner-native"

import "@/styles/global.css"

import { queryClient } from "@/lib/query"

import { Modal } from "@/shared/components/modal"

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
    Lato_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar style="dark" />

        <Stack
          screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        >
          <Stack.Screen name="login" />
          <Stack.Screen name="register" />
          <Stack.Screen name="(private)" />
        </Stack>

        <Modal />

        <Toaster theme="light" closeButton />
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}
