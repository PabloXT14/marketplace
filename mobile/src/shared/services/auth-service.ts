import type {
  RegisterHttpRequest,
  RegisterHttpResponse,
} from "../interfaces/http/register"
import type {
  LoginHttpRequest,
  LoginHttpResponse,
} from "../interfaces/http/login"

import { marketplaceApiClient } from "../api/marketplace"

export const registerService = async (userData: RegisterHttpRequest) => {
  const response = await marketplaceApiClient.post<RegisterHttpResponse>(
    "/auth/register",
    userData
  )

  const { data } = response

  return data
}

export const loginService = async (userData: LoginHttpRequest) => {
  const response = await marketplaceApiClient.post<LoginHttpResponse>(
    "/auth/login",
    userData
  )

  const { data } = response

  return data
}
