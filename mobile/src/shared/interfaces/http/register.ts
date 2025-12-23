import type { User } from "../user"

export type RegisterHttpRequest = {
  name: string
  email: string
  password: string
  avatarUrl?: string
  phone: string
}

export type RegisterHttpResponse = {
  token: string
  refreshToken: string
  user: User
}
