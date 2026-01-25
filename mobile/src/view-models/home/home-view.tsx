import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { HomeHeader } from "./components/header"
import { SearchInput } from "./components/search-input"

export const HomeView = () => (
  <SafeAreaView edges={["top"]} className="flex-1 bg-background px-4 py-9">
    <FlatList
      data={[]}
      keyExtractor={(_, index) => index.toString()}
      renderItem={() => null}
      ListHeaderComponent={() => (
        <>
          <HomeHeader />
          <SearchInput />
        </>
      )}
    />
  </SafeAreaView>
)
