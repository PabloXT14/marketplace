import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { profileSchema, type ProfileFormData } from "./profile-schema"

import { useUserStore } from "@/shared/store/user-store"

export const useProfileViewModel = () => {
  const { user } = useUserStore()

  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl ?? null
  )

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      phone: user?.phone ?? "",
      password: "",
      newPassword: "",
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return {
    avatarUri,
    control,
    onSubmit,
    errors,
  }
}
