import { Text, View } from "react-native"

type AddToCartSuccessModalProps = {
  productName: string
  onGoToCart: () => void
  onContinueShopping: () => void
  onClose: () => void
}

export const AddToCartSuccessModal = ({
  productName,
  onGoToCart,
  onContinueShopping,
  onClose,
}: AddToCartSuccessModalProps) => (
  <View className="w-full rounded-xl bg-white p-6 shadow-2xl">
    {/* HEADER */}
    <View className="mb-6">
      <Text className="mb-1 font-lato-bold text-gray-500 text-lg leading-tight">
        Produto adicionado ao carrinho!
      </Text>

      <Text className="font-lato text-gray-300 text-sm leading-snug">
        Você adicionou "{productName}" ao seu carrinho.
      </Text>
    </View>
  </View>
)
