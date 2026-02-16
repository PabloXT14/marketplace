import { createElement } from "react"
import { router } from "expo-router"

import { useGetCommentsInfiniteQuery } from "@/shared/queries/product/use-get-comments-infinite-query"
import { useGetProductDetailsQuery } from "@/shared/queries/product/use-get-product-details-query"
import { useCartStore } from "@/shared/store/cart-store"
import { useModalStore } from "@/shared/store/modal-store"

import { AddToCartSuccessModal } from "./components/add-to-cart-success-modal"

type UseProductViewModelProps = {
  id: number
}

export const useProductViewModel = ({ id }: UseProductViewModelProps) => {
  const { data: product, isLoading, error } = useGetProductDetailsQuery({ id })
  const { addProduct, products } = useCartStore()
  const { open, close } = useModalStore()

  const {
    data: comments,
    isLoading: commentsLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    refetch,
    isRefetching,
    error: commentsError,
  } = useGetCommentsInfiniteQuery({ productId: id })

  const handleLoadMore = () => {
    if (
      hasNextPage &&
      !commentsLoading &&
      !isRefetching &&
      !isFetchingNextPage
    ) {
      fetchNextPage()
    }
  }

  const handleRefresh = async () => {
    if (!isRefetching) {
      await refetch()
    }
  }

  const handleEndReached = () => {
    handleLoadMore()
  }

  const handleAddToCart = () => {
    if (!product) {
      return
    }

    addProduct({
      id: product.id,
      name: product.name,
      price: product.value,
      image: product.photo,
    })

    console.log("PRODUCTS IN CART:", products)

    open(
      createElement(AddToCartSuccessModal, {
        productName: product.name,
        onGoToCart: () => {
          router.push("/(private)/(tabs)/cart")
        },
        onContinueShopping: () => {
          router.back()
        },
        onClose: () => {
          close()
        },
      }),
      {}
    )
  }

  return {
    product,
    isLoading,
    isRefetching,
    isFetchingNextPage,
    error,
    comments,
    commentsLoading,
    commentsError,
    handleLoadMore,
    handleRefresh,
    handleEndReached,
    handleAddToCart,
  }
}
