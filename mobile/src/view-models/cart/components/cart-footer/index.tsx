import { Text, TouchableOpacity, View } from "react-native"

import { colors } from "@/styles/colors"

import { useCartStore } from "@/shared/store/cart-store"

import { Button } from "@/shared/components/button"
import { PriceText } from "@/shared/components/price-text"
import { AppIcon } from "@/shared/components/app-icon"

export const CartFooter = () => {
  const { totalPrice } = useCartStore()

  return (
    <View className="mt-5 gap-4 rounded-lg bg-white p-4">
      {/* TEXTS */}
      <View className="gap-3 py-2">
        {/* VALUE */}
        <View className="flex-row items-center justify-between gap-3">
          <Text className="font-lato-bold text-gray-400 text-xs uppercase leading-tight">
            Valor total
          </Text>

          <PriceText
            value={totalPrice}
            currencyClassName="text-base"
            valueClassName="text-base"
          />
        </View>

        {/* PAYMENT */}
        <View className="flex-row items-center justify-between gap-3">
          <Text className="font-lato-bold text-gray-400 text-xs uppercase leading-tight">
            Pagamento
          </Text>

          <TouchableOpacity
            className="flex-row items-center justify-center gap-2 p-0.5"
            activeOpacity={0.7}
          >
            <AppIcon name="Card" size={20} color={colors.purple.base} />

            <Text className="font-lato-bold text-purple-base text-sm leading-tight">
              Adicionar cartão
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Button text="Confirmar compra" />
    </View>
  )
}
