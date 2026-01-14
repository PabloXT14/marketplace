import { Modal as RNModal, TouchableWithoutFeedback, View } from "react-native"
import { Toaster } from "sonner-native"

import { useModalStore } from "@/shared/store/modal-store"

export const Modal = () => {
  const { isOpen, config, content, close } = useModalStore()

  if (!(isOpen && content)) {
    return null
  }

  return (
    <RNModal
      visible={isOpen}
      animationType={config.animationType}
      transparent={config.transparent}
      statusBarTranslucent={config.statusBarTranslucent}
      onRequestClose={close}
    >
      <TouchableWithoutFeedback onPress={close}>
        {/* OVERLAY */}
        <View className="flex-1 items-center justify-center bg-black/50 px-6">
          {/* CONTENT */}
          <TouchableWithoutFeedback
            onPress={(e) => {
              /* TO PREVENT CLOSE */
              e.stopPropagation()
            }}
          >
            {content}
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>

      <Toaster theme="light" closeButton richColors />
    </RNModal>
  )
}
