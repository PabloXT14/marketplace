import { Text, View } from "react-native"

import type { useFilterViewModel } from "./use-filter-view-model"

type FilterViewProps = ReturnType<typeof useFilterViewModel>

export const FilterView = (_props: FilterViewProps) => (
  <View>
    <Text>Filtro</Text>
  </View>
)
