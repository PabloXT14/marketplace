import { FlatList, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Header } from "./components/header"
import { CommentItem } from "./components/comment-item"
import { ListFooter } from "./components/list-footer"
import { EmptyList } from "./components/empty-list"
import { Loading } from "./components/loading"

import type { useProductViewModel } from "./use-product-view-model"

type ProductViewProps = ReturnType<typeof useProductViewModel>

export const ProductView = ({
  product,
  error,
  comments,
  isLoading,
  commentsLoading,
  isRefetching,
  isFetchingNextPage,
  handleEndReached,
  handleRefresh,
}: ProductViewProps) => {
  if (error) {
    return (
      <View className="flex-1 items-center justify-center bg-background px-10 py-9">
        <Text className="text-center font-lato-bold text-xl text-zinc-950">
          Houve um erro ao carregar os detalhes do produto
        </Text>
      </View>
    )
  }

  if (!product) {
    return null
  }

  if (isLoading) {
    return <Loading />
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <FlatList
        data={comments}
        keyExtractor={(comment) => `comment-${comment.id}`}
        renderItem={({ item }) => <CommentItem comment={item} />}
        className="px-6 pt-9"
        contentContainerStyle={{ paddingBottom: 120, gap: 8 }}
        ListHeaderComponent={<Header product={product} />}
        ListFooterComponent={<ListFooter isLoading={isFetchingNextPage} />}
        ListEmptyComponent={<EmptyList isLoadingComments={commentsLoading} />}
        showsVerticalScrollIndicator={false}
        onEndReached={handleEndReached}
        onRefresh={handleRefresh}
        refreshing={isRefetching}
      />
    </SafeAreaView>
  )
}
