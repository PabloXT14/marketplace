import { create } from "zustand"

export type FilterState = {
  valueMin: number | null
  valueMax: number | null
  selectedCategories: number[]
  searchText: string
}

type FilterStore = {
  appliedFilterState: FilterState

  updateFilterState: (props: {
    key: keyof FilterState
    value: FilterState[keyof FilterState]
  }) => void

  resetFilterState: () => void
}

const DEFAULT_FILTER_STATE: FilterState = {
  valueMin: null,
  valueMax: null,
  selectedCategories: [],
  searchText: "",
}

export const useFilterStore = create<FilterStore>((set, get) => ({
  appliedFilterState: DEFAULT_FILTER_STATE,
  updateFilterState: ({ key, value }) => {
    set({
      appliedFilterState: {
        ...get().appliedFilterState,
        [key]: value,
      },
    })
  },

  resetFilterState: () => {
    set({
      appliedFilterState: DEFAULT_FILTER_STATE,
    })
  },
}))
