/** biome-ignore-all lint/performance/noNamespaceImport: needed */

import { Platform } from "react-native"
import * as Notifications from "expo-notifications"

import { colors } from "@/styles/colors"

const DEFAULT_CHANNEL = "default-channel"

const NOTIFICATION_IDS = {
  CART_REMINDER: "cart-reminder",
  PURCHASE_FEEDBACK: "purchase-feedback",
}

const BASE_DEEP_LINK = "marketplace:/"

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
})

const requestNotificationPermissions = async () => {
  const { status: existingStatus } = await Notifications.getPermissionsAsync()

  let finalStatus = existingStatus

  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync()
    finalStatus = status
  }

  return finalStatus === "granted"
}

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
  const hasPermission = await requestNotificationPermissions()

  if (!hasPermission) {
    console.log("Notifications permission not granted.")
    return
  }

  const notification = await Notifications.scheduleNotificationAsync({
    identifier: `${NOTIFICATION_IDS.CART_REMINDER}-${productId}`,
    content: {
      title: "Você esqueceu algo no carrinho!",
      body: `Você deixou ${productName} no carrinho. Volte para finalizar sua compra!`,
      data: {
        type: "cart-reminder",
        productId: String(productId),
        deepLink: `${BASE_DEEP_LINK}/cart`, // Aqui você pode adicionar um deep link para a página do produto, se desejar
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: delayInMinutes * 60,
    },
  })

  return notification
}

type SchedulePurchaseFeedbackNotificationParams = {
  productName: string
  productId: number
  delayInMinutes: number
}

const schedulePurchaseFeedbackNotification = async ({
  productName,
  productId,
  delayInMinutes,
}: SchedulePurchaseFeedbackNotificationParams) => {
  const hasPermission = await requestNotificationPermissions()

  if (!hasPermission) {
    console.log("Notifications permission not granted.")
    return
  }

  const notification = await Notifications.scheduleNotificationAsync({
    identifier: `${NOTIFICATION_IDS.PURCHASE_FEEDBACK}-${productId}`,
    content: {
      title: "🌟 Como foi sua compra?",
      body: `Você realizou o pedido do produto ${productName}. Envie um feedback do que acho do produto!`,
      data: {
        type: "purchase-feedback",
        productId: String(productId),
        deepLink: `${BASE_DEEP_LINK}/product/${productId}?openFeedbackBottomSheet=true`, // Aqui você pode adicionar um deep link para a página de avaliação do produto, se desejar
      },
    },
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
      seconds: delayInMinutes * 60,
    },
  })

  return notification
}

const cancelNotification = async (identifier: string) => {
  try {
    await Notifications.cancelScheduledNotificationAsync(identifier)
  } catch (error) {
    console.log(
      `Failed to cancel notification with identifier ${identifier}:`,
      error
    )
  }
}

export const localNotificationsService = {
  NOTIFICATION_IDS,
  setUpNotificationChannel,
  requestNotificationPermissions,
  scheduleCartReminderNotification,
  schedulePurchaseFeedbackNotification,
  cancelNotification,
}
