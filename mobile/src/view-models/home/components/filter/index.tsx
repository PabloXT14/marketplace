import { FilterView } from "./filter-view"
import { useFilterViewModel } from "./use-filter-view-model"

export const Filter = () => {
  const props = useFilterViewModel()

  return <FilterView {...props} />
}
