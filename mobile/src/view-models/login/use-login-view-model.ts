import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { type LoginFormData, loginSchema } from "./login-schema"

import { useLoginMutation } from "@/shared/queries/auth/use-login-mutation"
import { useOneSignal } from "@/shared/hooks/use-onesignal"

export const useLoginViewModel = () => {
  const loginMutation = useLoginMutation()
  const { playerId } = useOneSignal()

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
    await loginMutation.mutateAsync({ ...data, notificationToken: playerId })
  })

  return {
    control,
    onSubmit,
    errors,
    isPending: loginMutation.isPending,
  }
}
