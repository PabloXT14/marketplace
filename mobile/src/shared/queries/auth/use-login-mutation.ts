import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner-native"

// biome-ignore lint/performance/noNamespaceImport: needed for authService
import * as authService from "@/shared/services/auth-service"

import type { LoginHttpRequest } from "@/shared/interfaces/http/login"

import { useUserStore } from "@/shared/store/user-store"
import { BASE_URL } from "@/shared/api/marketplace"

export const useLoginMutation = () => {
  const { setSession } = useUserStore()

  const mutation = useMutation({
    mutationFn: (userData: LoginHttpRequest) =>
      authService.loginService(userData),
    onSuccess: (response) => {
      setSession({
        user: {
          ...response.user,
          avatarUrl: `${BASE_URL}${response.user.avatarUrl}`,
        },
        token: response.token,
        refreshToken: response.refreshToken,
      })
    },
    onError: (error) => {
      console.log("Login failed:", error)
      toast.error("Falha ao fazer login.", {
        description: "Verifique seu email e senha.",
      })
    },
  })

  return mutation
}
