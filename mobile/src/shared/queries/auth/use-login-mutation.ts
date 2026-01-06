import { useMutation } from "@tanstack/react-query"

// biome-ignore lint/performance/noNamespaceImport: needed for authService
import * as authService from "@/shared/services/auth-service"

import type { LoginHttpRequest } from "@/shared/interfaces/http/login"

export const useLoginMutation = () => {
  const mutation = useMutation({
    mutationFn: (userData: LoginHttpRequest) =>
      authService.loginService(userData),
    onSuccess: (response) => {
      console.log("Login successful:", response)
    },
    onError: (error) => {
      console.error("Login failed:", error)
    },
  })

  return mutation
}
