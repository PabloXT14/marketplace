import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { profileSchema, type ProfileFormData } from "./profile-schema"

import { useUserStore } from "@/shared/store/user-store"
import { useUpdateProfileMutation } from "@/shared/queries/profile/use-update-profile-mutation"

export const useProfileViewModel = () => {
  const { user } = useUserStore()

  const updateProfileMutation = useUpdateProfileMutation()

  const [avatarUri, setAvatarUri] = useState<string | null>(
    user?.avatarUrl ?? null
  )

  const {
    control,
    formState: { errors, isSubmitting },
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

  // const validatePasswords = (newUserData: ProfileFormData) => {
  //   if (
  //     newUserData.password === newUserData.newPassword &&
  //     newUserData.password.length > 0
  //   ) {
  //     return false
  //   }

  //   return true
  // }

  const onSubmit = handleSubmit(async (data) => {
    await updateProfileMutation.mutateAsync({
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password ?? undefined,
      newPassword: data.newPassword ?? undefined,
    })
  })

  return {
    avatarUri,
    control,
    onSubmit,
    errors,
    isSubmitting,
  }
}
