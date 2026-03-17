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

// const CARD_NUMBER = "4716 8039 02•• ••••"

export const CreditCardView = ({
  focusedField,
  cardData,
  frontAnimatedStyle,
  backAnimatedStyle,
}: CreditCardViewProps) => (
  <View className="h-[192px] w-full self-center">
    {/* FRONT */}
    <Animated.View
      style={[
        frontAnimatedStyle,
        {
          position: "absolute",
          height: 192,
          width: "100%",
          backfaceVisibility: "hidden",
        },
      ]}
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
            focusedField === "number" && "rounded-md bg-white/20"
          )}
        >
          {cardData.number.split(" ").map((group, index) => (
            <Text
              key={`group-${index + 1}`}
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
              focusedField === "name" && "rounded-md bg-white/20"
            )}
          >
            <Text className="font-lato text-background text-base uppercase leading-snug">
              {cardData.titularName || "Nome do titular"}
            </Text>
          </View>

          <View
            className={cn(
              "flex-row items-center gap-1.5 px-2 py-1",
              focusedField === "expiry" && "rounded-md bg-white/20"
            )}
          >
            <Text className="font-lato text-background text-base leading-snug">
              {cardData.expirationDate.split("/")[0]}
            </Text>

            <Text className="font-lato text-background text-base leading-snug">
              /
            </Text>

            <Text className="font-lato text-background text-base leading-snug">
              {cardData.expirationDate.split("/")[1]}
            </Text>
          </View>
        </View>
      </LinearGradient>
    </Animated.View>

    {/* BACK */}
    <Animated.View
      style={[
        backAnimatedStyle,
        {
          position: "absolute",
          height: 192,
          width: "100%",
          backfaceVisibility: "hidden",
        },
      ]}
    >
      <LinearGradient
        colors={PURPLE_GRADIENT}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          flex: 1,
          borderRadius: 16,
          paddingVertical: 20,
        }}
      >
        {/* MAGNET STRIPE */}
        <View className="mb-14 h-[40px] w-full bg-gray-500" />

        {/* CVV */}
        <View className="mx-6 flex-row items-center gap-3">
          <View
            className={cn(
              "flex-1 items-end gap-1 rounded-lg bg-shape px-3 py-4",
              focusedField === "cvv" && "bg-blue-light"
            )}
          >
            <Text className="font-lato-bold text-gray-500/50 text-sm tracking-[4px]">
              {cardData.CVV}
            </Text>
          </View>

          <Text className="font-lato text-shape text-sm leading-tight">
            CVV
          </Text>
        </View>
      </LinearGradient>
    </Animated.View>
  </View>
)
