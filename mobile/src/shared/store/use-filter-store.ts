import { create } from "zustand"

export type FilterState = {
  valueMin: number | null
  valueMax: number | null
  selectedCategories: number[]
  searchText: string
}

type FilterStore = {
  appliedFilterState: FilterState
  filterState: FilterState

  updateFilter: (props: {
    key: keyof FilterState
    value: FilterState[keyof FilterState]
  }) => void
  resetFilter: () => void
  applyFilters: () => void
}

const DEFAULT_FILTER_STATE: FilterState = {
  valueMin: null,
  valueMax: null,
  selectedCategories: [],
  searchText: "",
}

export const useFilterStore = create<FilterStore>((set, get) => ({
  appliedFilterState: DEFAULT_FILTER_STATE,
  filterState: DEFAULT_FILTER_STATE,

  updateFilter: ({ key, value }) => {
    set({
      filterState: {
        ...get().filterState,
        [key]: value,
      },
    })
  },

  resetFilter: () => {
    set({
      appliedFilterState: DEFAULT_FILTER_STATE,
      filterState: DEFAULT_FILTER_STATE,
    })
  },

  applyFilters: () => {
    set({
      appliedFilterState: get().filterState,
    })
  },
}))
