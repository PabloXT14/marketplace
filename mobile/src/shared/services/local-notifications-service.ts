/** biome-ignore-all lint/performance/noNamespaceImport: needed */

import { Platform } from "react-native"
import * as Notifications from "expo-notifications"

import { colors } from "@/styles/colors"

const DEFAULT_CHANNEL = "default-channel"
const NOTIFICATION_IDS = {
  CART_REMINDER: "cart-reminder",
  PURCHASE_FEEDBACK: "purchase-feedback",
}

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
})

const setUpNotificationChannel = async () => {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync(DEFAULT_CHANNEL, {
      name: "Notificações do Marketplace",
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: colors.purple.base,
    })
  }
}

type ScheduleCartReminderNotificationParams = {
  productName: string
  productId: number
  delayInMinutes: number
}

const scheduleCartReminderNotification = async ({
  productName,
  productId,
  delayInMinutes,
}: ScheduleCartReminderNotificationParams) => {
  const hasPermission = await Notifications.requestPermissionsAsync()

  if (!hasPermission.granted) {
    return
  }

  await setUpNotificationChannel()

  const notification = await Notifications.scheduleNotificationAsync({
    identifier: NOTIFICATION_IDS.CART_REMINDER,
    content: {
      title: "Você esqueceu algo no carrinho!",
      body: `Você deixou ${productName} no carrinho. Volte para finalizar sua compra!`,
      data: {
        type: "cart-reminder",
        productId: String(productId),
        deepLink: "", // TODO: Aqui você pode adicionar um deep link para a página do produto, se desejar
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: delayInMinutes * 60,
    },
  })

  return notification
}

export const localNotificationsService = {
  scheduleCartReminderNotification,
}
