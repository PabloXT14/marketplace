import { colors } from "@/styles/colors"
import { useRef, useState } from "react"
import type { BlurEvent, TextInput } from "react-native"

type InputViewModelProps = {
  isError?: boolean
  isFocused?: boolean
  isDisabled?: boolean
  errorMessage?: string
  secureTextEntry?: boolean
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: BlurEvent) => void
  mask?: (value: string) => string | undefined
  onChangeText?: (value: string) => void
  value?: string
}

export const useInputViewModel = ({
  value,
  onChangeText,
  secureTextEntry,
  onFocus,
  onBlur,
  mask,
  errorMessage,
  isError,
  isDisabled,
}: InputViewModelProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const inputRef = useRef<TextInput>(null)

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const handleFocus = (event: FocusEvent) => {
    console.log("Focused")

    inputRef.current?.focus()
    setIsFocused(true)
    onFocus?.(event)
  }

  const handleBlur = (event: BlurEvent) => {
    console.log("Blurred")

    inputRef.current?.blur()
    setIsFocused(false)
    onBlur?.(event)
  }

  const getIconColor = () => {
    if (isFocused) {
      return colors.purple.base
    }

    if (isError) {
      return colors.danger
    }

    if (value) {
      return colors.purple.base
    }

    return colors.gray[200]
  }

  const handleChangeText = (value: string) => {
    if (mask) {
      onChangeText?.(mask(value) || "")
    } else {
      onChangeText?.(value)
    }
  }

  return {
    showPassword,
    isFocused,
    handleFocus,
    handleBlur,
    handleTogglePassword,
    handleChangeText,
    getIconColor,
  }
}
