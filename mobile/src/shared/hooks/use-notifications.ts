/** biome-ignore-all lint/performance/noNamespaceImport: needed */

import { useEffect } from "react"
import { Linking } from "react-native"
import * as Notifications from "expo-notifications"

import { localNotificationsService } from "@/shared/services/local-notifications-service"

export const useNotifications = () => {
  useEffect(() => {
    localNotificationsService.requestNotificationPermissions()
    localNotificationsService.setUpNotificationChannel()

    // Verificar se o aplicativo foi aberto a partir de uma notificação e lidar com o deep link correspondente
    const lastResponse = Notifications.getLastNotificationResponse()

    if (lastResponse) {
      const deepLink = lastResponse.notification.request.content.data?.deepLink

      if (deepLink && typeof deepLink === "string") {
        Linking.openURL(deepLink)
      }
    }

    // Listener para lidar com respostas quando o usuário clicar nas notificações
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const deepLink = response.notification.request.content.data?.deepLink

        if (deepLink && typeof deepLink === "string") {
          Linking.openURL(deepLink)
        }
      }
    )

    return () => {
      subscription.remove()
    }
  }, [])

  return {}
}
