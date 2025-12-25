import { tv, type VariantProps } from "tailwind-variants"

export const inputVariants = tv({
  slots: {
    container: "w-full",
    label: "",
    content: "",
    input: "",
    errorMessage: "",
  },
  variants: {
    isFocused: {
      true: {},
      false: {},
    },
    isError: {
      true: {},
      false: {},
    },
    isDisabled: {
      true: {},
      false: {},
    },
  },
  defaultVariants: {
    isFocused: false,
    isError: false,
    isDisabled: false,
  },
})

export type InputVariants = VariantProps<typeof inputVariants>
