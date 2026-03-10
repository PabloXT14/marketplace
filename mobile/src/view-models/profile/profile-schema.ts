import { z } from "zod"

export const profileSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.email("Email inválido"),
  phone: z
    .string()
    .nonempty("Telefone é obrigatório")
    .regex(
      /^\d{11}$/,
      "Telefone deve conter 11 dígitos numéricos (DDD + número)"
    ),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  newPassword: z.string().min(6, "Nova senha deve ter pelo menos 6 caracteres"),
})

export type ProfileFormData = z.infer<typeof profileSchema>
