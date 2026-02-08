import { FlatList, View, RefreshControl } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { ProductCard } from "./components/product-card"
import { Footer } from "./components/footer"

import type { useHomeViewModel } from "./use-home-view-model"

import { colors } from "@/styles/colors"
import { RenderHeader } from "./components/render-header"

type HomeViewProps = ReturnType<typeof useHomeViewModel>

const NUMBER_OF_COLUMNS = 2

export const HomeView = ({
  products,
  hasNextPage,
  isLoading,
  isFetchingNextPage,
  isRefetching,
  handleEndReached,
  handleRefresh,
  setSearchText,
  searchText,
}: HomeViewProps) => (
  <SafeAreaView edges={["top"]} className="flex-1 bg-background">
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
      className="px-4 pt-9"
      contentContainerStyle={{ gap: 8, paddingBottom: 120 }}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <RenderHeader searchText={searchText} setSearchText={setSearchText} />
      }
      ListFooterComponent={
        <Footer
          isLoading={hasNextPage && Boolean(isLoading || isFetchingNextPage)}
        />
      }
      onEndReached={handleEndReached}
      refreshControl={
        <RefreshControl
          refreshing={isRefetching}
          colors={[colors.purple.base]}
          tintColor={colors.purple.base}
          onRefresh={handleRefresh}
        />
      }
    />
  </SafeAreaView>
)
