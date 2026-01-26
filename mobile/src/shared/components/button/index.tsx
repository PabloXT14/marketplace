import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native"
import { AppIcon, type IconName } from "../app-icon"

import { buttonVariants, type ButtonVariantsProps } from "./button-variants"
import { colors } from "@/styles/colors"

type ButtonProps = TouchableOpacityProps &
  ButtonVariantsProps & {
    text?: string
    leftIcon?: IconName
    rightIcon?: IconName
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
        <AppIcon name={leftIcon} size={24} color={iconColor} />
      ) : null}

      <Text className={styles.text()}>{text}</Text>

      {rightIcon ? (
        <AppIcon name={rightIcon} size={24} color={iconColor} />
      ) : null}
    </TouchableOpacity>
  )
}
