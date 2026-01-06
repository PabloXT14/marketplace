import { useMutation } from "@tanstack/react-query"

// biome-ignore lint/performance/noNamespaceImport: needed for authService
import * as authService from "@/shared/services/auth-service"

import { useUserStore } from "@/shared/store/user-store"

import type { RegisterHttpRequest } from "@/shared/interfaces/http/register"

export const useRegisterMutation = () => {
  const { setSession } = useUserStore()

  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpRequest) =>
      authService.registerService(userData),
    onSuccess: (response) => {
      setSession({
        user: response.user,
        token: response.token,
        refreshToken: response.refreshToken,
      })
    },
    onError: (error) => {
      console.error("Registration failed:", error)
    },
  })

  return mutation
}
