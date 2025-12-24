import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { type RegisterFormData, registerSchema } from "./register.schema"

import { useRegisterMutation } from "@/shared/queries/auth/use-register.mutation"
import { useUserStore } from "@/shared/store/user-store"

export const useRegisterViewModel = () => {
  const { mutateAsync } = useRegisterMutation()
  const { setSession, user } = useUserStore()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "Alice Doe",
      email: "alicedoe@email.com",
      password: "123456",
      confirmPassword: "123456",
      phone: "11999999999",
    },
  })

  const onSubmit = handleSubmit(async (userData: RegisterFormData) => {
    const { confirmPassword: _, ...rest } = userData

    const response = await mutateAsync(rest)

    setSession({
      user: response.user,
      token: response.token,
      refreshToken: response.refreshToken,
    })
  })

  console.log("Current user in store:", user)

  return {
    control,
    onSubmit,
    errors,
  }
}
