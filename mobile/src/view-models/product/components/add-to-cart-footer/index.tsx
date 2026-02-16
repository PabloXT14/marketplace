import { View } from "react-native"

import { Button } from "@/shared/components/button"
import { PriceText } from "@/shared/components/price-text"

import type { Product } from "@/shared/interfaces/product"

type AddToCArtFooterProps = {
  product: Product
  handleAddToCart: () => void
}

export const AddToCArtFooter = ({
  product,
  handleAddToCart,
}: AddToCArtFooterProps) => (
  <View className="fixed bottom-0 left-0 w-full flex-row items-center justify-between bg-white p-6">
    <PriceText
      value={Number(product.value)}
      currencyClassName="text-sm"
      valueClassName="text-2xl"
    />

    <View className="">
      <Button
        leftIcon="CartLarge2"
        text="Adicionar"
        className="w-auto"
        onPress={handleAddToCart}
      />
    </View>
  </View>
)
