import { createElement } from "react"
import type { LinearIconName } from "react-native-solar-icons/dist/icons"

import { useModalStore } from "../store/modal-store"

import {
  SelectionModal,
  type SelectionModalProps,
} from "../components/modals/selection-modal"

export type SelectionOption = {
  text: string
  onPress: () => void
  icon?: LinearIconName
  variant?: "primary" | "secondary" | "danger"
}

export const useModal = () => {
  const { open } = useModalStore()

  const showSelection = (config: {
    title: string
    message?: string
    options: SelectionOption[]
  }) => {
    open(createElement(SelectionModal, config as SelectionModalProps))
  }

  return {
    showSelection,
  }
}
