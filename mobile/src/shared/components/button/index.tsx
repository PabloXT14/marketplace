import {
  Text,
  TouchableOpacity,
  type TouchableOpacityProps,
} from "react-native"

import type { LinearIconName } from "react-native-solar-icons/dist/icons"

import { buttonVariants, type ButtonVariantsProps } from "./button-variants"

type ButtonProps = TouchableOpacityProps &
  ButtonVariantsProps & {
    title?: string
    leftIcon?: LinearIconName
    rightIcon?: LinearIconName
  }

export const Button = ({
  title,

  className,
  ...rest
}: ButtonProps) => {
  const styles = buttonVariants()

  return (
    <TouchableOpacity
      className={styles.container({ className })}
      activeOpacity={0.7}
      {...rest}
    >
      <Text>{title}</Text>
    </TouchableOpacity>
  )
}
