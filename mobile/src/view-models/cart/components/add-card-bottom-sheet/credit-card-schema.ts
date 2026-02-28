import { z } from "zod"

export const creditCardSchema = z.object({
  titularName: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  number: z
    .string()
    .nonempty("Número de cartão é obrigatório")
    .refine(
      (value) => {
        const cardNumber = value.replace(/\s/g, "").replace(/\D/g, "") // remove espacos e letras
        return cardNumber.length === 16
      },
      {
        error: "O número de cartão deve ter 16 dígitos",
      }
    ),
  expirationDate: z
    .string()
    .nonempty("Data de vencimento é obrigatória")
    .refine(
      (value) => {
        const expirationDate = value.replace(/\s/g, "") // remove espacos
        // biome-ignore lint/performance/useTopLevelRegex: for option
        return expirationDate.match(/^d{2}\/\d{2}$/) // MM/AA
      },
      {
        error: "Formato deve ser MM/AA",
      }
    ),
  CVV: z.string().regex(/^\d{3}$/, "CVV deve ter 3 dígitos"),
})

export type CreditCardFormData = z.infer<typeof creditCardSchema>
