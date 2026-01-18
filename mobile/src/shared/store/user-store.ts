import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import AsyncStorage from "@react-native-async-storage/async-storage"

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
  updateUser: (updatedUser: Partial<User>) => void
}

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
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

      updateUser: (updatedUser) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...updatedUser } : null,
        }))
      },
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
)
