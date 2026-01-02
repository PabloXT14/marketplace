import type {
  RegisterHttpRequest,
  RegisterHttpResponse,
} from "../interfaces/http/register"
import { marketplaceApiClient } from "../api/marketplace"

export const registerService = async (userData: RegisterHttpRequest) => {
  const response = await marketplaceApiClient.post<RegisterHttpResponse>(
    "/auth/register",
    userData
  )

  const { data } = response

  return data
}
