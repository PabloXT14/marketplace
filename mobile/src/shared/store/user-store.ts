import { create } from "zustand"

import type { User } from "../interfaces/user"

type SetSessionParams = {
  user: User
  token: string
  refreshToken: string
}

type UpdateTokensParams = {
  token: string
  refreshToken: string
}

export type UserStore = {
  user: User | null
  token: string | null
  refreshToken: string | null

  setSession: (params: SetSessionParams) => void
  logout: () => void
  updateTokens: (params: UpdateTokensParams) => void
}

export const useUserStore = create<UserStore>((set) => ({
  user: null,
  token: null,
  refreshToken: null,

  setSession: ({ user, token, refreshToken }) => {
    set({ user, token, refreshToken })
  },

  logout: () => {
    set({ user: null, token: null, refreshToken: null })
  },

  updateTokens: ({ token, refreshToken }) => {
    set({ token, refreshToken })
  },
}))
