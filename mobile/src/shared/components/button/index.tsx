import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native"

import type { LinearIconName } from "react-native-solar-icons/dist/icons"

import { buttonVariants, type ButtonVariantsProps } from "./button-variants"

type ButtonProps = TouchableOpacityProps &
  ButtonVariantsProps & {
    text?: string
    leftIcon?: LinearIconName
    rightIcon?: LinearIconName
  }

export const Button = ({ text, variant, className, ...rest }: ButtonProps) => {
  const styles = buttonVariants({ variant })

  return (
    <TouchableOpacity
      className={styles.container({ className })}
      activeOpacity={0.7}
      {...rest}
    >
      <Text className={styles.text()}>{text}</Text>
    </TouchableOpacity>
  )
}
