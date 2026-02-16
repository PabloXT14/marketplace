import { FlatList } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { Header } from "./components/header"
import { CommentItem } from "./components/comment-item"
import { ListFooter } from "./components/list-footer"
import { EmptyList } from "./components/empty-list"
import { Loading } from "./components/loading"
import { ProductError } from "./components/product-error"

import type { useProductViewModel } from "./use-product-view-model"
import { AddToCArtFooter } from "./components/add-to-cart-footer"

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
  handleAddToCart,
}: ProductViewProps) => {
  if (error) {
    return <ProductError />
  }

  if (isLoading || !product) {
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

      <AddToCArtFooter product={product} handleAddToCart={handleAddToCart} />
    </SafeAreaView>
  )
}
