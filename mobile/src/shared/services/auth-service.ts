import type {
  RegisterHttpRequest,
  RegisterHttpResponse,
} from "../interfaces/http/register"
import type {
  LoginHttpRequest,
  LoginHttpResponse,
} from "../interfaces/http/login"
import type { UploadAvatarHttpResponse } from "../interfaces/http/upload-avatar"

import { BASE_URL, marketplaceApiClient } from "../api/marketplace"

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

export const uploadAvatarService = async (avatarUri: string) => {
  const formData = new FormData()

  formData.append("avatar", {
    uri: avatarUri,
    type: "image/jpeg",
    name: "avatar.jpg",
  } as unknown as Blob)

  const response = await marketplaceApiClient.post<UploadAvatarHttpResponse>(
    "/user/avatar",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  )

  const { data } = response

  data.url = `${BASE_URL}/${data.url}`

  return data
}
