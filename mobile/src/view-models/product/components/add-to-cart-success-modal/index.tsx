import { Text, View } from "react-native"

import { AppIcon } from "@/shared/components/app-icon"
import { Button } from "@/shared/components/button"

import { colors } from "@/styles/colors"

type AddToCartSuccessModalProps = {
  productName: string
  onGoToCart: () => void
  onContinueShopping: () => void
}

export const AddToCartSuccessModal = ({
  productName,
  onGoToCart,
  onContinueShopping,
}: AddToCartSuccessModalProps) => (
  <View className="w-full rounded-xl bg-white p-6 shadow-2xl">
    {/* HEADER */}
    <View className="mb-6 items-center gap-4">
      <AppIcon name="CheckCircle" size={64} color={colors.success} />

      <Text className="text-center font-lato-bold text-gray-500 text-lg leading-tight">
        Produto adicionado ao carrinho!
      </Text>

      <Text className="text-center font-lato text-gray-300 text-sm leading-snug">
        Você adicionou{" "}
        <Text className="font-lato-bold text-gray-500">{productName}</Text> ao
        seu carrinho com sucesso.
      </Text>
    </View>

    {/* ACTIONS */}
    <View className="items-center gap-3">
      <Button
        text="Ver carrinho"
        leftIcon="CartLarge2"
        className="w-full justify-center"
        onPress={onGoToCart}
      />

      <Button
        text="Continuar comprando"
        variant="outline"
        className="w-full"
        onPress={onContinueShopping}
      />
    </View>
  </View>
)
