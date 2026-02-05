import { FlatList, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import type { useProductViewModel } from "./use-product-view-model"

type ProductViewProps = ReturnType<typeof useProductViewModel>

export const ProductView = ({ product, error }: ProductViewProps) => {
  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-background px-10 py-9">
        <Text className="text-center font-lato-bold text-xl text-zinc-950">
          Houve um erro ao carregar os detalhes do produto
        </Text>
      </View>
    )
  }

  return (
    <SafeAreaView className="flex-1 bg-background px-4 pt-9">
      <FlatList
        data={[]}
        renderItem={<></>}
        ListHeaderComponent={
          <View>
            <Text>{product?.name}</Text>
          </View>
        }
      />
    </SafeAreaView>
  )
}
