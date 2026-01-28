import { FlatList, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { HomeHeader } from "./components/header"
import { SearchInput } from "./components/search-input"
import { ProductCard } from "./components/product-card"

import type { useHomeViewModel } from "./use-home-view-model"
import { Footer } from "./components/footer"

type HomeViewProps = ReturnType<typeof useHomeViewModel>

const NUMBER_OF_COLUMNS = 2

export const HomeView = ({
  products,
  isLoading,
  isFetchingNextPage,
  hasNextPage,
  handleEndReached,
}: HomeViewProps) => (
  <SafeAreaView edges={["top"]} className="flex-1 bg-background px-4 pt-9">
    <FlatList
      data={products}
      keyExtractor={(item) => `product-${item.id}`}
      renderItem={({ item }) => (
        <View className="max-w-[49%] flex-1">
          <ProductCard product={item} />
        </View>
      )}
      numColumns={NUMBER_OF_COLUMNS}
      columnWrapperStyle={{ gap: 8, justifyContent: "space-between" }}
      contentContainerStyle={{ gap: 8, paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <>
          <HomeHeader />
          <SearchInput />
        </>
      )}
      ListFooterComponent={
        <Footer
          isLoading={hasNextPage && Boolean(isLoading || isFetchingNextPage)}
        />
      }
      onEndReached={handleEndReached}
    />
  </SafeAreaView>
)
