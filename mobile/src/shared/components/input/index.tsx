import {
  Text,
  TextInput,
  type TextInputProps,
  TouchableOpacity,
  View,
} from "react-native"
import { AppIcon, type IconName } from "../app-icon"

import { colors } from "@/styles/colors"

import { inputVariants, type InputVariantsProps } from "./input-variants"
import { useInputViewModel } from "./use-input-view-model"

export type InputProps = TextInputProps &
  InputVariantsProps & {
    label?: string
    leftIcon?: IconName
    rightIcon?: IconName
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
          <AppIcon name={leftIcon} size={24} color={getIconColor()} />
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
            <AppIcon
              name={showPassword ? "Eye" : "EyeClosed"}
              size={24}
              color={colors.gray[300]}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {errorMessage ? (
        <View className={styles.errorContainer()}>
          <AppIcon name="InfoCircle" size={16} color={colors.danger} />

          <Text className={styles.errorMessage()}>{errorMessage}</Text>
        </View>
      ) : null}
    </View>
  )
}
