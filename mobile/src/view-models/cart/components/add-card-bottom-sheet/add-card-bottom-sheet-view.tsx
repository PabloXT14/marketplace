import { Text, TouchableOpacity, View } from "react-native"

import type { useAddCardBottomSheetViewModel } from "./use-add-card-bottom-sheet-view-model"

import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"

import { colors } from "@/styles/colors"

import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"
import { AppIcon } from "@/shared/components/app-icon"
import { Button } from "@/shared/components/button"
import { InputController } from "@/shared/components/input-controller"
import { CreditCard } from "./components/credit-card"

type AddCardBottomSheetViewProps = ReturnType<
  typeof useAddCardBottomSheetViewModel
>

export const AddCardBottomSheetView = ({
  control,
  expirationDateMask,
  cardNumberMask,
  isLoading,
  handleCreateCreditCard,
  handleFieldFocus,
  handleFieldBlur,
  isFlipped,
  focusedField,
}: AddCardBottomSheetViewProps) => {
  const { close } = useBottomSheetStore()

  return (
    <DismissKeyboardView>
      <View className="gap-10 px-6 py-8">
        {/* ITEMS */}
        <View className="gap-6">
          {/* HEADER */}
          <View className="item-center flex-row justify-between">
            <Text className="font-lato-bold text-base text-gray-500 leading-tight">
              Cartão de crédito
            </Text>

            <TouchableOpacity onPress={close}>
              <AppIcon name="CloseSquare" size={24} color={colors.gray[300]} />
            </TouchableOpacity>
          </View>

          {/* CREDIT CARD */}
          <CreditCard isFlipped={isFlipped} focusedField={focusedField} />

          {/* NAME INPUT */}
          <InputController
            control={control}
            name="titularName"
            label="Nome"
            placeholder="Nome do titular"
            onFocus={() => handleFieldFocus("name")}
            onBlur={handleFieldBlur}
          />

          {/* NUMBER INPUT */}
          <InputController
            control={control}
            name="number"
            label="Número"
            placeholder="Número do cartão"
            keyboardType="numeric"
            maxLength={19} // 16 + 3 espacos
            mask={cardNumberMask}
            onFocus={() => handleFieldFocus("number")}
            onBlur={handleFieldBlur}
          />

          {/* EXPIRATION AND CVV INPUTS */}
          <View className="flex-row gap-4">
            <InputController
              control={control}
              name="expirationDate"
              label="Vencimento"
              placeholder="MM/AA"
              keyboardType="numeric"
              maxLength={5}
              mask={expirationDateMask}
              containerClassName="flex-1"
              onFocus={() => handleFieldFocus("expiry")}
              onBlur={handleFieldBlur}
            />

            <InputController
              control={control}
              name="CVV"
              label="CVV"
              placeholder="Código de 3 dígitos"
              keyboardType="numeric"
              maxLength={3}
              containerClassName="flex-1"
              onFocus={() => handleFieldFocus("cvv")}
              onBlur={handleFieldBlur}
            />
          </View>
        </View>

        {/* ACTIONS */}
        <View className="flex-row items-center gap-3">
          <Button
            text="Cancelar"
            variant="outline"
            className="flex-1"
            onPress={() => close()}
          />

          <Button
            text="Salvar"
            className="flex-1"
            isLoading={isLoading}
            disabled={isLoading}
            onPress={handleCreateCreditCard}
          />
        </View>
      </View>
    </DismissKeyboardView>
  )
}
