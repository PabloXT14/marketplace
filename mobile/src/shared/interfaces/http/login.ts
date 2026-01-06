import type { User } from "../user"

export type LoginHttpRequest = {
  email: string
  password: string
}

export type LoginHttpResponse = {
  token: string
  refreshToken: string
  user: User
}
