/** biome-ignore-all lint/style/useReadonlyClassProperties: disabled */
/** biome-ignore-all lint/correctness/noUnusedPrivateClassMembers: disabled */
import { Platform } from "react-native"
import axios, { type AxiosError, type AxiosInstance } from "axios"

import { useUserStore } from "../store/user-store"

const getBaseURL = () =>
  Platform.select({
    ios: "http://localhost:3001",
    android: "http://192.168.2.123:3001",
  })

export const BASE_URL = getBaseURL()

export class MarketplaceApiClient {
  private instance: AxiosInstance
  private isRefreshing = false

  constructor() {
    this.instance = axios.create({
      baseURL: BASE_URL,
    })

    this.setUpInterceptors()
  }

  getInstance() {
    return this.instance
  }

  private setUpInterceptors() {
    this.instance.interceptors.request.use(
      async (config) => {
        // Add any request interceptors here (e.g., adding auth tokens)

        const token = await useUserStore.getState().token

        if (token) {
          config.headers.Authorization = `Bearer ${token}`
        }

        return config
      },
      (error) => Promise.reject(error)
    )

    this.instance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        // Handle refresh token logic
        const originalRequest = error.config

        if (!originalRequest) {
          return Promise.reject(error)
        }

        // Verifica se o erro é de token expirado
        if (
          error.response?.status === 401 &&
          error.response?.data?.message === "Token expirado" &&
          !this.isRefreshing
        ) {
          this.isRefreshing = true

          try {
            const refreshToken = await useUserStore.getState().refreshToken

            if (!refreshToken) {
              throw new Error("Refresh token não encontrado")
            }

            const { data } = await this.instance.post("/auth/refresh", {
              refreshToken,
            })

            const { token: newToken, refreshToken: newRefreshToken } = data

            await useUserStore.getState().updateTokens({
              token: newToken,
              refreshToken: newRefreshToken,
            })

            originalRequest.headers.Authorization = `Bearer ${newToken}`

            return this.instance(originalRequest)
          } catch (_error) {
            await this.handleUnauthorized()

            return Promise.reject(
              new Error("Sessão expirada. Por favor, faça login novamente.")
            )
          } finally {
            this.isRefreshing = false
          }
        }

        if (error.response?.data) {
          return Promise.reject(error.response.data.message)
        }

        return Promise.reject(new Error("Falha na requisição"))
      }
    )
  }

  private async handleUnauthorized() {
    // Implementar lógica para lidar com 401 Unauthorized, se necessário

    // biome-ignore lint/performance/noDelete: disabled
    delete this.instance.defaults.headers.common.Authorization

    await useUserStore.getState().logout()
  }
}

export const marketplaceApiClient = new MarketplaceApiClient().getInstance()
