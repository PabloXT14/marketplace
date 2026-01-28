import { Platform } from "react-native"
import Constants from "expo-constants"

import { BASE_URL } from "../api/marketplace"

export const buildImageUrl = (originalUrl: string) => {
  if (Constants.expoConfig?.extra?.isProduction) {
    return originalUrl
  }

  return Platform.select({
    android: originalUrl.replace(
      "http://localhost:3001",
      BASE_URL || "http://localhost:3001"
    ),
    ios: originalUrl,
    default: originalUrl,
  })
}
