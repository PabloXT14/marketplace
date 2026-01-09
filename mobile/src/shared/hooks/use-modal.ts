import type { LinearIconName } from "react-native-solar-icons/dist/icons"

import { useModalStore } from "../store/modal-store"
import { SelectionModal } from "../components/modals/selection-modal"
import { createElement } from "react"

type SelectionOption = {
  text: string
  onPress: () => void
  icon?: LinearIconName
  variant?: "primary" | "secondary" | "danger"
}

export const useModal = () => {
  const { open, close } = useModalStore()

  const showSelection = (config: {
    title: string
    message?: string
    options: SelectionOption[]
  }) => {
    open(createElement(SelectionModal))
  }

  return {
    showSelection,
  }
}
