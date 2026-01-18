import { useMutation } from "@tanstack/react-query"

// biome-ignore lint/performance/noNamespaceImport: needed for authService
import * as authService from "@/shared/services/auth-service"

import { useUserStore } from "@/shared/store/user-store"

import type {
  RegisterHttpRequest,
  RegisterHttpResponse,
} from "@/shared/interfaces/http/register"

type UseRegisterMutationProps = {
  onSuccess?: (response: RegisterHttpResponse) => void
}

export const useRegisterMutation = ({
  onSuccess,
}: UseRegisterMutationProps = {}) => {
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

      // Callback of uploaded avatar, to add the avatarUrl after registration
      onSuccess?.(response)
    },
    onError: (error) => {
      console.error("Registration failed:", error)
    },
  })

  return mutation
}
