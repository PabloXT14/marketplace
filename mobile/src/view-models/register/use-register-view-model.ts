import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CameraType } from "expo-image-picker"

import { type RegisterFormData, registerSchema } from "./register-schema"

import { useRegisterMutation } from "@/shared/queries/auth/use-register-mutation"
import { useUploadAvatarMutation } from "@/shared/queries/auth/use-upload-avatar-mutation"
import { useUserStore } from "@/shared/store/user-store"

import { useImage } from "@/shared/hooks/use-image"

export const useRegisterViewModel = () => {
  const [avatarUri, setAvatarUri] = useState<string | null>(null)

  const { updateUser } = useUserStore()

  const uploadAvatarMutation = useUploadAvatarMutation()
  const registerMutation = useRegisterMutation({
    onSuccess: async () => {
      if (avatarUri) {
        const { url } = await uploadAvatarMutation.mutateAsync(avatarUri)

        console.log("Avatar uploaded to URL:", url)

        updateUser({
          avatarUrl: url,
        })
      }
    },
  })
  const { handleSelectImage } = useImage({
    callback: (uri: string | null) => {
      setAvatarUri(uri)
    },
    cameraType: CameraType.front,
  })

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

    await registerMutation.mutateAsync(rest)
  })

  const handleSelectAvatar = async () => {
    await handleSelectImage()
  }

  return {
    control,
    onSubmit,
    errors,
    handleSelectAvatar,
    avatarUri,
  }
}
