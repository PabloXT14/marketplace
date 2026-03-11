import { z } from "zod"

export const profileSchema = z
  .object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.email("Email inválido"),
    phone: z
      .string()
      .nonempty("Telefone é obrigatório")
      .regex(
        /^\d{11}$/,
        "Telefone deve conter 11 dígitos numéricos (DDD + número)"
      ),
    password: z.string(),
    newPassword: z.string(),
  })
  .refine(
    (data) => {
      if (data.password.length === 0) {
        return true // se a senha atual estiver vazia, a nova senha pode ser vazia
      }

      if (data.password === data.newPassword) {
        return false
      }

      return true
    },
    {
      error: "A nova senha deve ser diferente da senha atual",
      path: ["newPassword"],
    }
  )

export type ProfileFormData = z.infer<typeof profileSchema>
