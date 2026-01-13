import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { type RegisterFormData, registerSchema } from "./register-schema"

import { useRegisterMutation } from "@/shared/queries/auth/use-register-mutation"
import { useModal } from "@/shared/hooks/use-modal"
import { useCamera } from "@/shared/hooks/use-camera"

export const useRegisterViewModel = () => {
  const { mutateAsync } = useRegisterMutation()
  const modals = useModal()
  const { openCamera } = useCamera({})

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

  const handleSelectAvatar = () => {
    modals.showSelection({
      title: "Selecionar foto",
      message: "Escolha uma das opções abaixo",
      options: [
        {
          text: "Câmera",
          icon: "Camera",
          variant: "secondary",
          onPress: openCamera,
        },
        {
          text: "Galeria",
          icon: "Gallery",
          variant: "primary",
          onPress: () => {
            console.log("Galeria")
          },
        },
      ],
    })
  }

  return {
    control,
    onSubmit,
    errors,
    handleSelectAvatar,
  }
}
