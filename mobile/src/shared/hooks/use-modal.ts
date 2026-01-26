import { createElement } from "react"
import type { IconName } from "../components/app-icon"

import { useModalStore } from "../store/modal-store"

import {
  SelectionModal,
  type SelectionModalProps,
} from "../components/modals/selection-modal"

export type SelectionVariant = "primary" | "secondary" | "tertiary" | "danger"

export type SelectionOption = {
  text: string
  onPress: () => void
  icon?: IconName
  variant?: SelectionVariant
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
