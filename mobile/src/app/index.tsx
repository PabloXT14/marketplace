import { Redirect } from "expo-router"

import { useUserStore } from "@/shared/store/user-store"

export default function Index() {
  const { user, token } = useUserStore()

  if (user && token) {
    return <Redirect href="/(private)/home" />
  }

  return <Redirect href="/(public)/login" />
}
