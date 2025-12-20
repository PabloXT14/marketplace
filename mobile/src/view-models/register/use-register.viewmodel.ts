import { useState } from "react"

export const useRegisterViewModel = () => {
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "3yUfM@example.com",
    password: "password123",
  })

  return {
    userData,
    setUserData,
  }
}
