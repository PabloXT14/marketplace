import { Text, TouchableOpacity, View } from "react-native"

import type { useReviewBottomSheetViewModel } from "./use-review-bottom-sheet-view-model"

import { AppIcon } from "@/shared/components/app-icon"
import { Button } from "@/shared/components/button"
import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"
import { Input } from "@/shared/components/input"
import { Stars } from "./components/stars"

import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"
import { colors } from "@/styles/colors"

type ReviewBottomSheetViewProps = ReturnType<
  typeof useReviewBottomSheetViewModel
>

export const ReviewBottomSheetView = ({
  handleRatingChange,
  handleCommentChange,
  ratingForm,
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
              {ratingForm.isEditing ? "Editar avaliação" : "Avaliar produto"}
            </Text>

            <TouchableOpacity onPress={close}>
              <AppIcon name="CloseSquare" size={24} color={colors.gray[300]} />
            </TouchableOpacity>
          </View>

          <View className="gap-3">
            <Text className="font-lato-bold text-gray-300 text-xs uppercase">
              Nota
            </Text>

            <Stars
              rating={ratingForm.rating}
              onRatingChange={handleRatingChange}
            />
          </View>

          <Input
            value={ratingForm.comment}
            onChangeText={handleCommentChange}
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
            onPress={() => close()}
          />

          <Button
            text={ratingForm.isEditing ? "Atualizar" : "Enviar"}
            className="flex-1"
            onPress={() => {
              /* TODO */
            }}
          />
        </View>
      </View>
    </DismissKeyboardView>
  )
}
