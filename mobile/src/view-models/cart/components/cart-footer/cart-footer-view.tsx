import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native"

import { colors } from "@/styles/colors"

import { PriceText } from "@/shared/components/price-text"
import { AppIcon } from "@/shared/components/app-icon"
import { Button } from "@/shared/components/button"
import { CreditCardItem } from "../credit-card-item"

import type { useCartFooterViewModel } from "./use-cart-footer-view-model"

type CartFooterViewProps = ReturnType<typeof useCartFooterViewModel>

export const CartFooterView = ({
  totalPrice,
  creditCards,
  isLoadingCreditCards,
  isLoadingOrder,
  openAddCardBottomSheet,
  selectedCreditCard,
  handleSelectCreditCard,
  handleCreateOrder,
}: CartFooterViewProps) => {
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
            onPress={openAddCardBottomSheet}
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

      {isLoadingCreditCards ? (
        <View className="items-center justify-center gap-2">
          <ActivityIndicator color={colors.purple.base} size="small" />

          <Text className="text-center font-lato text-gray-300 text-sm leading-snug">
            Carregando cartões de crédito...
          </Text>
        </View>
      ) : (
        <FlatList
          data={creditCards}
          keyExtractor={(item) => `credit-card-${item.id}`}
          renderItem={({ item }) => (
            <CreditCardItem
              creditCard={item}
              isSelected={selectedCreditCard?.id === item.id}
              setSelectedCreditCard={handleSelectCreditCard}
            />
          )}
          className="gap-2"
          ListEmptyComponent={
            <Text className="text-center font-lato text-gray-300 text-sm leading-snug">
              Nenhum cartão de crédito cadastrado
            </Text>
          }
        />
      )}

      <Button
        text="Confirmar compra"
        onPress={handleCreateOrder}
        isLoading={isLoadingOrder}
      />
    </View>
  )
}
