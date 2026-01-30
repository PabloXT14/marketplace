import { useCallback, useEffect, useMemo, useRef } from "react"
import PrimitiveBottomSheet, {
  BottomSheetScrollView,
  BottomSheetBackdrop,
  type BottomSheetBackdropProps,
} from "@gorhom/bottom-sheet"
import { useSafeAreaInsets } from "react-native-safe-area-context"

import { useBottomSheetStore } from "@/shared/store/bottom-sheet-store"

import { colors } from "@/styles/colors"

export const BottomSheet = () => {
  const { isOpen, config, content, close } = useBottomSheetStore()
  const insets = useSafeAreaInsets()

  const bottomSheetRef = useRef<PrimitiveBottomSheet>(null)

  const snapPoints = useMemo(
    () => config?.snapPoints || ["80%", "90%"],
    [config?.snapPoints]
  )

  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...props}
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={0.7}
        pressBehavior="close"
      />
    ),
    []
  )

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === -1) {
        close()
      }
    },
    [close]
  )

  useEffect(() => {
    if (isOpen && content) {
      bottomSheetRef.current?.snapToIndex(0) // Open the bottom sheet in the initial position of the first snap point
    } else {
      bottomSheetRef.current?.close()
    }
  }, [isOpen, content])

  return (
    <PrimitiveBottomSheet
      ref={bottomSheetRef}
      backdropComponent={renderBackdrop}
      snapPoints={snapPoints}
      backgroundStyle={{
        backgroundColor: colors.background,
        borderTopRightRadius: 24,
        borderTopLeftRadius: 24,
      }}
      handleIndicatorStyle={{
        backgroundColor: colors.gray[100],
        width: 56,
        height: 4,
      }}
      enablePanDownToClose={config?.enablePanDownToClose}
      index={-1} // Bottom sheet is closed by default
      animateOnMount
      onChange={handleSheetChanges}
    >
      <BottomSheetScrollView
        contentContainerStyle={{ paddingBottom: insets.bottom }}
      >
        {content}
      </BottomSheetScrollView>
    </PrimitiveBottomSheet>
  )
}
