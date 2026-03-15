import { Text, View } from "react-native"
import Animated from "react-native-reanimated"
import { LinearGradient } from "expo-linear-gradient"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { colors } from "@/styles/colors"
import { cn } from "@/shared/lib/utils"

import { AppIcon } from "@/shared/components/app-icon"

import type { useCreditCardViewModel } from "./use-credit-card-view-model"

type CreditCardViewProps = ReturnType<typeof useCreditCardViewModel>

const PURPLE_GRADIENT: readonly [string, string, string] = [
  colors.purple.dark,
  colors.purple.base,
  colors.purple.light,
]

const CARD_NUMBER = "4716 8039 02•• ••••"

export const CreditCardView = ({ focusedField }: CreditCardViewProps) => (
  <View className="h-[192px] w-full self-center rounded-2xl bg-gray-100">
    {/* FRONT */}
    <Animated.View
      style={{
        position: "absolute",
        height: 192,
        width: "100%",
        backfaceVisibility: "hidden",
      }}
    >
      <LinearGradient
        colors={PURPLE_GRADIENT}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          borderRadius: 16,
          padding: 20,
        }}
      >
        {/* TOP */}
        <View className="mb-10 flex-row items-center justify-between">
          <AppIcon name="Card" size={32} color={colors.background} />
          <MaterialCommunityIcons
            name="contactless-payment-circle-outline"
            size={24}
            color={colors.background}
          />
        </View>

        {/* CARD NUMBER */}
        <View
          className={cn(
            "flex-row items-center justify-between px-2 py-1",
            focusedField === "number" && " bg-white/20 rounded-md"
          )}
        >
          {CARD_NUMBER.split(" ").map((group) => (
            <Text
              key={group}
              className="font-lato-bold text-background text-base leading-tight tracking-[4px]"
            >
              {group}
            </Text>
          ))}
        </View>

        {/* BOTTOM */}
        <View className="mt-auto flex-row items-center justify-between gap-4">
          <View
            className={cn(
              "px-2 py-1",
              focusedField === "name" && "bg-white/20 rounded-md"
            )}
          >
            <Text className="font-lato text-background text-base uppercase leading-snug">
              Nome do titular
            </Text>
          </View>

          <View className={cn("flex-row items-center gap-1.5 px-2 py-1", focusedField === "expiry" && "bg-white/20 rounded-md")}>
            <Text className="font-lato text-background text-base leading-snug">
              ••
            </Text>

            <Text className="font-lato text-background text-base leading-snug">
              /
            </Text>

            <Text className="font-lato text-background text-base leading-snug">
              ••
            </Text>
          </View>
        </View>
      </LinearGradient>
    </Animated.View>

    {/* BACK */}
    <Animated.View />
  </View>
)
