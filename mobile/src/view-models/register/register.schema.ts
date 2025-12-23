import { z } from "zod"

export const registerSchema = z
  .object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    email: z.email("Email inválido"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
    confirmPassword: z
      .string()
      .min(6, "Confirmação de senha deve ter pelo menos 6 caracteres"),
    phone: z
      .string()
      .nonempty("Telefone é obrigatório")
      .regex(
        /^\d{11}$/,
        "Telefone deve conter 11 dígitos numéricos (DDD + número)"
      ),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "As senhas não coincidem",
    path: ["confirmPassword"],
  })

export type RegisterFormData = z.infer<typeof registerSchema>
