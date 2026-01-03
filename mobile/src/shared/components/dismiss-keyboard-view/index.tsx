import type { ReactNode } from "react"
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native"

type DismissKeyboardViewProps = {
  children: ReactNode
}

const IOS_KEYBOARD_VERTICAL_OFFSET = 64

export const DismissKeyboardView = ({ children }: DismissKeyboardViewProps) => (
  <KeyboardAvoidingView
    style={{ flex: 1 }}
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    keyboardVerticalOffset={
      Platform.OS === "ios" ? IOS_KEYBOARD_VERTICAL_OFFSET : 0
    }
  >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </ScrollView>
    </TouchableWithoutFeedback>
  </KeyboardAvoidingView>
)
