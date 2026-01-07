import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native"
import { SolarIcon } from "react-native-solar-icons"

import type { LinearIconName } from "react-native-solar-icons/dist/icons"

import { buttonVariants, type ButtonVariantsProps } from "./button-variants"
import { colors } from "@/styles/colors"

type ButtonProps = TouchableOpacityProps &
  ButtonVariantsProps & {
    text?: string
    leftIcon?: LinearIconName
    rightIcon?: LinearIconName
  }

export const Button = ({
  text,
  variant = "solid",
  leftIcon,
  rightIcon,
  isLoading,
  isDisabled,
  className,
  ...rest
}: ButtonProps) => {
  const styles = buttonVariants({
    variant,
    hasIcon: !!leftIcon || !!rightIcon,
    isLoading,
    isDisabled,
  })

  const iconColor = variant === "solid" ? colors.white : colors.purple.base

  if (isLoading) {
    return (
      <TouchableOpacity
        className={styles.container({ className })}
        activeOpacity={0.7}
        disabled
        {...rest}
      >
        <ActivityIndicator size="small" color={iconColor} />
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity
      className={styles.container({ className })}
      activeOpacity={0.7}
      disabled={isDisabled}
      {...rest}
    >
      {leftIcon ? (
        <SolarIcon name={leftIcon} type="linear" size={24} color={iconColor} />
      ) : null}

      <Text className={styles.text()}>{text}</Text>

      {rightIcon ? (
        <SolarIcon name={rightIcon} type="linear" size={24} color={iconColor} />
      ) : null}
    </TouchableOpacity>
  )
}
