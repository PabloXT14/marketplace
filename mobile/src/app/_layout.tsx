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

import { queryClient } from "@/shared/lib/query"

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
    <GestureHandlerRootView className="flex-1">
      <QueryClientProvider client={queryClient}>
        <StatusBar style="dark" />

        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(public)" />
          <Stack.Screen name="(private)" />
        </Stack>

        <Modal />

        <Toaster theme="light" closeButton richColors />
      </QueryClientProvider>
    </GestureHandlerRootView>
  )
}
