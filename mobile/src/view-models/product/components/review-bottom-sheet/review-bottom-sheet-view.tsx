import { Text, TouchableOpacity, View } from "react-native"

import type { useReviewBottomSheetViewModel } from "./use-review-bottom-sheet-view-model"

import { AppIcon } from "@/shared/components/app-icon"
import { Button } from "@/shared/components/button"

import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"

import { colors } from "@/styles/colors"
import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"
import { Input } from "@/shared/components/input"

type ReviewBottomSheetViewProps = ReturnType<
  typeof useReviewBottomSheetViewModel
>

export const ReviewBottomSheetView = ({
  productId,
}: ReviewBottomSheetViewProps) => {
  const { close } = useBottomSheetStore()

  return (
    <DismissKeyboardView>
      <View className="gap-10 px-6 py-8">
        {/* ITEMS */}
        <View className="gap-6">
          {/* HEADER */}
          <View className="item-center flex-row justify-between">
            <Text className="font-lato-bold text-base text-gray-500 leading-tight">
              Avaliar produto
            </Text>

            <TouchableOpacity onPress={close}>
              <AppIcon name="CloseSquare" size={24} color={colors.gray[300]} />
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            <Text className="font-lato-bold text-gray-300 text-xs uppercase">
              Nota
            </Text>
            <View className="flex-row gap-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <TouchableOpacity key={`star-${index + 1}`}>
                  <AppIcon
                    key={`star-${index + 1}`}
                    name="Star"
                    size={28}
                    color={colors.gray[200]}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <Input
            label="Comentário"
            placeholder="Descreva sua avaliação"
            multiline
            numberOfLines={8}
            textAlignVertical="top"
            className="h-[150px]"
          />
        </View>

        {/* ACTIONS */}
        <View className="flex-row items-center gap-3">
          <Button
            text="Cancelar"
            variant="outline"
            className="flex-1"
            onPress={() => {}}
          />

          <Button text="Enviar" className="flex-1" onPress={() => {}} />
        </View>
      </View>
    </DismissKeyboardView>
  )
}
