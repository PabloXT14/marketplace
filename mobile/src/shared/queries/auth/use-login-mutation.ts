import { useMutation } from "@tanstack/react-query"

// biome-ignore lint/performance/noNamespaceImport: needed for authService
import * as authService from "@/shared/services/auth-service"

import type { LoginHttpRequest } from "@/shared/interfaces/http/login"

import { useUserStore } from "@/shared/store/user-store"

export const useLoginMutation = () => {
  const { setSession } = useUserStore()

  const mutation = useMutation({
    mutationFn: (userData: LoginHttpRequest) =>
      authService.loginService(userData),
    onSuccess: (response) => {
      setSession({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
      })
    },
    onError: (error) => {
      console.error("Login failed:", error)
    },
  })

  return mutation
}
