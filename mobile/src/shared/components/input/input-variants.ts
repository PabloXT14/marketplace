import { tv, type VariantProps } from "tailwind-variants"

export const inputVariants = tv({
  slots: {
    container: "w-full",
    label: "font-lato-bold text-gray-300 text-xs uppercase",
    content:
      "flex-row items-center gap-2 border-gray-100 border-b px-0.5 py-3.5",
    input: "flex-1 bg-transparent font-lato text-base text-gray-500",
    errorContainer: "flex-row flex-wrap items-center gap-1 py-1.5",
    errorMessage: "text-danger text-xs",
  },
  variants: {
    isFocused: {
      true: {
        content: "border-purple-base",
        label: "text-purple-base",
      },
      false: {},
    },
    isError: {
      true: {
        content: "border-danger",
        label: "text-danger",
      },
      false: {},
    },
    isDisabled: {
      true: {
        content: "opacity-50",
        label: "text-gray-200",
        input: "text-gray-300",
      },
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
