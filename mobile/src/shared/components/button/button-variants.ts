import { tv, type VariantProps } from "tailwind-variants"

export const buttonVariants = tv({
  slots: {
    container:
      "h-button w-full flex-row items-center justify-center gap-3 rounded-xl px-4",
  },
  variants: {},
  defaultVariants: {},
})

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>
