import type { ReactNode } from "react"
import { create } from "zustand"

type BottomSheetConfig = {
  snapPoints?: string[]
  enablePanDownToClose?: boolean
}

type BottomSheetStore = {
  isOpen: boolean
  content: ReactNode | null
  config: BottomSheetConfig

  open: (params: { content: ReactNode; config?: BottomSheetConfig }) => void
  close: () => void
}

const DEFAULT_CONFIG: BottomSheetConfig = {
  snapPoints: ["80%", "90%"],
  enablePanDownToClose: true,
}

export const useBottomSheetStore = create<BottomSheetStore>((set, get) => ({
  isOpen: false,
  content: null,
  config: DEFAULT_CONFIG,

  open: ({ content, config }) => {
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
    set({ isOpen: false, content: null, config: DEFAULT_CONFIG })
  },
}))
