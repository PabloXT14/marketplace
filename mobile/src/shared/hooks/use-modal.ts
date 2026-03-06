import { createElement } from "react"
import type { IconName } from "../components/app-icon"

import { useModalStore } from "../store/modal-store"

import {
  SelectionModal,
  type SelectionModalProps,
} from "../components/modals/selection-modal"
import {
  SuccessModal,
  type SuccessModalProps,
} from "../components/modals/success-modal"

export type SelectionVariant = "primary" | "secondary" | "tertiary" | "danger"

export type SelectionOption = {
  text: string
  onPress: () => void
  icon?: IconName
  variant?: SelectionVariant
}

export const useModal = () => {
  const { open, close } = useModalStore()

  const showSelection = (config: SelectionModalProps) => {
    open(createElement(SelectionModal, config))
  }

  const showSuccess = (config: SuccessModalProps) => {
    open(
      createElement(SuccessModal, {
        ...config,
        onButtonPress: () => {
          if (config.onButtonPress) {
            config.onButtonPress()
          }

          close()
        },
      })
    )
  }

  return {
    showSelection,
    showSuccess,
  }
}
