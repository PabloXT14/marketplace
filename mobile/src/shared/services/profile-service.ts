import { marketplaceApiClient } from "../api/marketplace"

import type {
  UpdateProfileHttpRequest,
  UpdateProfileHttpResponse,
} from "../interfaces/http/profile"

export const updateProfileService = async (
  params: UpdateProfileHttpRequest
) => {
  const response = await marketplaceApiClient.put<UpdateProfileHttpResponse>(
    "/user",
    params
  )

  const { data } = response

  return data
}
