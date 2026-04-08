import { useEffect } from "react"

import { localNotificationsService } from "@/shared/services/local-notifications-service"

export const useNotifications = () => {
  useEffect(() => {
    localNotificationsService.requestNotificationPermissions()
    localNotificationsService.setUpNotificationChannel()
  }, [])

  return {}
}
