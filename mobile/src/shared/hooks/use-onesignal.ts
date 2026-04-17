import { useEffect, useState } from "react"
import { OneSignal } from "react-native-onesignal"

const ONESIGNAL_APP_ID = process.env.EXPO_PUBLIC_ONESIGNAL_APP_ID

export const useOneSignal = () => {
  const [playerId, setPlayerId] = useState<string | undefined>(undefined)

  useEffect(() => {
    if (!ONESIGNAL_APP_ID) {
      return
    }

    OneSignal.initialize(ONESIGNAL_APP_ID)

    // Handle notification taps (app was in background or closed)
    // OneSignal.Notifications.addEventListener(
    //   "click",
    //   (event: NotificationClickEvent) => {
    //     console.log("OneSignal: notification clicked:", event)
    //   }
    // )

    // Test if onesignal connection is working, and get the player id
    ;(async () => {
      const responsePlayerId =
        await OneSignal.User.pushSubscription.getIdAsync()

      if (!responsePlayerId) {
        return
      }

      setPlayerId(responsePlayerId)
    })()
  }, [])

  return { playerId }
}
