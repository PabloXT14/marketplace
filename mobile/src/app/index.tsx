import { Redirect } from "expo-router"

export default function Index() {
  // const userData = {
  //   token: "some-token",
  //   user: {
  //     name: "John Doe",
  //     email: "3yUfM@example.com",
  //   },
  // }
  const userData = null

  if (userData) {
    return <Redirect href="/(private)/home" />
  }

  return <Redirect href="/login" />
}
