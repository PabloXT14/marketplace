import { useMutation } from "@tanstack/react-query"
// biome-ignore lint/performance/noNamespaceImport: needed for authService
import * as authService from "@/shared/services/auth-service"
import type { RegisterHttpRequest } from "@/shared/interfaces/http/register"

export const useRegisterMutation = () => {
  const mutation = useMutation({
    mutationFn: (userData: RegisterHttpRequest) =>
      authService.registerService(userData),
    onSuccess: (response) => {
      console.log("Registration successful:", response)
    },
    onError: (error) => {
      console.error("Registration failed:", error)
    },
  })

  return mutation
}
