import { Text, View } from "react-native"

import type { useAddCardBottomSheetViewModel } from "./use-add-card-bottom-sheet-view-model"

import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"

type AddCardBottomSheetViewProps = ReturnType<
  typeof useAddCardBottomSheetViewModel
>

export const AddCardBottomSheetView = (_props: AddCardBottomSheetViewProps) => {
  const title = "Adicionar Cartão"

  return (
    <DismissKeyboardView>
      <View>
        <Text>{title}</Text>
      </View>
    </DismissKeyboardView>
  )
}
