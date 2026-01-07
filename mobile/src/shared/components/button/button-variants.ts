import { tv, type VariantProps } from "tailwind-variants"

export const buttonVariants = tv({
  slots: {
    container: "h-button w-full flex-row items-center gap-3 rounded-xl px-4",
    text: "font-lato-bold text-base",
  },
  variants: {
    hasIcon: {
      true: {
        container: "justify-between",
      },
      false: {
        container: "justify-center",
      },
    },
    isLoading: {
      true: {
        container: "justify-center opacity-60",
      },
      false: {},
    },
    isDisabled: {
      true: {
        container: "opacity-60",
      },
      false: {},
    },
    variant: {
      solid: {
        container: "bg-purple-base",
        text: "text-white",
      },
      outline: {
        container: "border border-purple-base",
        text: "text-purple-base",
      },
    },
  },
  defaultVariants: {
    hasIcon: false,
    isLoading: false,
    isDisabled: false,
    variant: "solid",
  },
})

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>
