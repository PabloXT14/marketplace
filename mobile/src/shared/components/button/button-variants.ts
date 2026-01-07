import { tv, type VariantProps } from "tailwind-variants"

export enum ButtonVariantsEnum {
  SOLID = "solid",
  OUTLINE = "outline",
}

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
        container: "opacity-50",
      },
      false: {},
    },
    isDisabled: {
      true: {
        container: "opacity-50",
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
    variant: ButtonVariantsEnum.SOLID,
  },
})

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>
