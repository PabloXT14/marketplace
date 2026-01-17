/** biome-ignore-all lint/style/useReadonlyClassProperties: disabled */
/** biome-ignore-all lint/correctness/noUnusedPrivateClassMembers: disabled */
import { Platform } from "react-native"
import axios, { type AxiosInstance } from "axios"

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
  }
}

export const marketplaceApiClient = new MarketplaceApiClient().getInstance()
