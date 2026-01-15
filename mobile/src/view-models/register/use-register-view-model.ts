import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { type RegisterFormData, registerSchema } from "./register-schema"

import { useRegisterMutation } from "@/shared/queries/auth/use-register-mutation"
import { useImage } from "@/shared/hooks/use-image"

export const useRegisterViewModel = () => {
  const { mutateAsync } = useRegisterMutation()
  const { handleSelectImage } = useImage({})

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

  const onSubmit = handleSubmit(async (userData: RegisterFormData) => {
    const { confirmPassword: _, ...rest } = userData

    await mutateAsync(rest)
  })

  const handleSelectAvatar = async () => {
    await handleSelectImage()
  }

  return {
    control,
    onSubmit,
    errors,
    handleSelectAvatar,
  }
}
