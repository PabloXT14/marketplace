import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { type LoginFormData, loginSchema } from "./login-schema"

import { useLoginMutation } from "@/shared/queries/auth/use-login-mutation"

export const useLoginViewModel = () => {
  const { mutateAsync } = useLoginMutation()

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const onSubmit = handleSubmit(async (data: LoginFormData) => {
    await mutateAsync(data)
  })

  return {
    control,
    onSubmit,
    errors,
  }
}
