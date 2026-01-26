import { Tabs } from "expo-router"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/font-family"

import { AppIcon } from "@/shared/components/app-icon"

export default function PrivateTabsLayout() {
  const insets = useSafeAreaInsets()

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: "shift",
        tabBarStyle: {
          height: 76 + insets.bottom,
          paddingTop: 10,
          backgroundColor: colors.white,
          borderTopWidth: 0,
          elevation: 0, // Remove sombra no Android
          shadowOpacity: 0, // Remove sombra no iOS
        },
        tabBarLabelStyle: {
          marginTop: 4,
          fontSize: 10,
          fontFamily: fontFamily.lato.bold,
          textTransform: "uppercase",
        },
        tabBarActiveTintColor: colors.purple.base,
        tabBarInactiveTintColor: colors.gray[100],
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Produtos",
          tabBarIcon: ({ color }) => (
            <AppIcon name="Shop2" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "Pedidos",
          tabBarIcon: ({ color }) => (
            <AppIcon name="ClipboardText" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Carrinho",
          tabBarIcon: ({ color }) => (
            <AppIcon name="CartLarge2" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}
