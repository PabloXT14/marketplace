import {
  Text,
  TextInput,
  type TextInputProps,
  TouchableOpacity,
  View,
} from "react-native"
import { SolarIcon } from "react-native-solar-icons"
import type { LinearIconName } from "react-native-solar-icons/dist/icons"

import { colors } from "@/styles/colors"

import { inputVariants, type InputVariantsProps } from "./input.variants"
import { useInputViewModel } from "./use-input-view-model"

type InputProps = TextInputProps &
  InputVariantsProps & {
    label?: string
    leftIcon?: LinearIconName
    rightIcon?: LinearIconName
    containerClassName?: string
    mask?: (value: string) => string | undefined
    errorMessage?: string
  }

export const Input = ({
  label,
  leftIcon,
  rightIcon,
  containerClassName,
  isFocused,
  isError,
  isDisabled,
  value,
  onChangeText,
  secureTextEntry = false,
  onBlur,
  onFocus,
  mask,
  errorMessage,
  ...textInputProps
}: InputProps) => {
  const styles = inputVariants({
    isFocused,
    isError,
    isDisabled,
  })

  const {
    showPassword,
    getIconColor,
    handleTogglePassword,
    handleBlur,
    handleFocus,
  } = useInputViewModel({
    value,
    onChangeText,
    isError: !!errorMessage,
    onBlur,
    onFocus,
    secureTextEntry,
    mask,
    errorMessage,
    isDisabled,
  })

  return (
    <View className={styles.container({ className: containerClassName })}>
      <Text className={styles.label()}>Label</Text>

      <View className={styles.content()}>
        <SolarIcon
          name="Letter"
          size={24}
          color={colors.gray[200]}
          type="linear"
        />

        <TextInput
          placeholder="Placeholder"
          placeholderTextColor={colors.gray[200]}
          cursorColor={colors.gray[500]}
          style={{
            padding: 0,
            margin: 0,
            textAlignVertical: "center",
            includeFontPadding: false, // Remove extra padding on Android
          }}
          className={styles.input()}
          {...textInputProps}
        />

        <TouchableOpacity>
          <SolarIcon
            name="Eye"
            size={24}
            color={colors.gray[300]}
            type="linear"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
