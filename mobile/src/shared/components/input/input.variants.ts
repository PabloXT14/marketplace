import { tv, type VariantProps } from "tailwind-variants"

export const inputVariants = tv({
  slots: {
    container: "w-full",
    label: "font-semibold text-gray-300 text-xs uppercase",
    content:
      "flex-row items-center gap-2 border-gray-100 border-b px-0.5 py-3.5",
    input: "flex-1 bg-transparent text-base text-gray-500",
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

export type InputVariantsProps = VariantProps<typeof inputVariants>
