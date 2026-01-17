/** biome-ignore-all lint/style/useReadonlyClassProperties: disabled */
import { Platform } from "react-native"
import axios, { type AxiosInstance } from "axios"

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
  }

  getInstance() {
    return this.instance
  }
}

export const marketplaceApiClient = new MarketplaceApiClient().getInstance()
