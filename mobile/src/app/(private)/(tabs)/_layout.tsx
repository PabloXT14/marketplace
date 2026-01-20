import { Tabs } from "expo-router"
import { SolarIcon } from "react-native-solar-icons"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { colors } from "@/styles/colors"
import { fontFamily } from "@/styles/font-family"

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
            <SolarIcon type="linear" name="Shop2" size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="orders"
        options={{
          title: "Pedidos",
          tabBarIcon: ({ color }) => (
            <SolarIcon
              type="linear"
              name="ClipboardText"
              size={20}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Carrinho",
          tabBarIcon: ({ color }) => (
            <SolarIcon
              type="linear"
              name="CartLarge2"
              size={20}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  )
}
