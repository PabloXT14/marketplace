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

import { inputVariants, type InputVariantsProps } from "./input-variants"
import { useInputViewModel } from "./use-input-view-model"

export type InputProps = TextInputProps &
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
  const {
    isFocused,
    showPassword,
    handleTogglePassword,
    handleBlur,
    handleFocus,
    handleChangeText,
    getIconColor,
  } = useInputViewModel({
    value,
    onChangeText,
    isError: !!errorMessage,
    onBlur,
    onFocus,
    secureTextEntry,
    mask,
    isDisabled,
  })

  const styles = inputVariants({
    isFocused,
    isError: !!errorMessage,
    isDisabled,
  })

  return (
    <View className={styles.container({ className: containerClassName })}>
      {label && <Text className={styles.label()}>{label}</Text>}

      <View className={styles.content()}>
        {leftIcon ? (
          <SolarIcon
            name={leftIcon}
            size={24}
            color={getIconColor()}
            type="linear"
          />
        ) : null}

        <TextInput
          value={value}
          onChangeText={handleChangeText}
          editable={!isDisabled}
          placeholderTextColor={colors.gray[200]}
          cursorColor={colors.gray[500]}
          onBlur={handleBlur}
          onFocus={handleFocus}
          style={{
            padding: 0,
            margin: 0,
            textAlignVertical: "center",
            includeFontPadding: false, // Remove extra padding on Android
          }}
          className={styles.input()}
          secureTextEntry={showPassword}
          {...textInputProps}
        />

        {secureTextEntry ? (
          <TouchableOpacity onPress={handleTogglePassword} activeOpacity={0.7}>
            <SolarIcon
              name={showPassword ? "Eye" : "EyeClosed"}
              size={24}
              color={colors.gray[300]}
              type="linear"
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {errorMessage ? (
        <View className={styles.errorContainer()}>
          <SolarIcon
            name="InfoCircle"
            type="linear"
            size={16}
            color={colors.danger}
          />

          <Text className={styles.errorMessage()}>{errorMessage}</Text>
        </View>
      ) : null}
    </View>
  )
}
