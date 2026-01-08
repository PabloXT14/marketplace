import type { ReactNode } from "react"
import { create } from "zustand"

type ModalConfig = {
  animationType?: "none" | "slide" | "fade"
  transparent?: boolean
  statusBarTranslucent?: boolean
}

type ModalStore = {
  isOpen: boolean
  content: ReactNode
  config: ModalConfig
  open: (content: ReactNode, config: ModalConfig) => void
  close: () => void
}

export const useModalStore = create<ModalStore>((set, get) => ({
  isOpen: false,
  content: null,
  config: {
    animationType: "fade",
    transparent: true,
    statusBarTranslucent: false,
  },
  open: (content, config) => {
    set({
      isOpen: true,
      content,
      config: {
        ...get().config,
        ...config,
      },
    })
  },
  close: () => {
    set({ isOpen: false, content: null })
  },
}))
