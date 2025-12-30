import { useRef, useState } from "react"
import type { BlurEvent, FocusEvent, TextInput } from "react-native"

import { colors } from "@/styles/colors"

type InputViewModelProps = {
  isError?: boolean
  isFocused?: boolean
  isDisabled?: boolean
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
  isError,
}: InputViewModelProps) => {
  const [showPassword, setShowPassword] = useState(secureTextEntry)
  const [isFocused, setIsFocused] = useState(false)

  const inputRef = useRef<TextInput>(null)

  const handleTogglePassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const handleFocus = (event: FocusEvent) => {
    inputRef.current?.focus()
    setIsFocused(true)
    onFocus?.(event)
  }

  const handleBlur = (event: BlurEvent) => {
    inputRef.current?.blur()
    setIsFocused(false)
    onBlur?.(event)
  }

  const getIconColor = () => {
    if (isError) {
      return colors.danger
    }

    if (isFocused) {
      return colors.purple.base
    }

    if (value) {
      return colors.purple.base
    }

    return colors.gray[200]
  }

  const handleChangeText = (text: string) => {
    if (mask) {
      onChangeText?.(mask(text) || "")
    } else {
      onChangeText?.(text)
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
