import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { type RegisterFormData, registerSchema } from "./register.schema"

export const useRegisterViewModel = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return {
    control,
    onSubmit,
    errors,
  }
}
