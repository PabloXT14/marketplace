import { Stack } from "expo-router"
import { QueryClientProvider } from "@tanstack/react-query"

import "@/styles/global.css"

import { queryClient } from "@/lib/query"

export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Stack
        screenOptions={{ headerShown: false, animation: "slide_from_right" }}
      />
    </QueryClientProvider>
  )
}
