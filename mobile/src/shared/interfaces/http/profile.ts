import type { User } from "../user"

export type UpdateProfileHttpRequest = {
  name: string
  email: string
  phone: string
  password: string
  newPassword: string
}

export type UpdateProfileHttpResponse = {
  user: User
}
