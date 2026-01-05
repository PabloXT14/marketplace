import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { type LoginFormData, loginSchema } from "./login-schema"

export const useLoginViewModel = () => {
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

  const onSubmit = handleSubmit((data: LoginFormData) => {
    console.log("Login data:", data)
  })

  return {
    control,
    onSubmit,
    errors,
  }
}
