import { marketplaceApiClient } from "../api/marketplace"

import type {
  CreateCommentHttpRequest,
  CreateCommentHttpResponse,
  ProductCommentsHttpRequest,
  ProductCommentsHttpResponse,
  ProductHttpRequest,
  ProductHttpResponse,
  UpdateUserCommentHttpRequest,
  UpdateUserCommentHttpResponse,
  UserCommentHttpRequest,
  UserCommentHttpResponse,
} from "../interfaces/http/product"
import type { Product, ProductCategory } from "../interfaces/product"

export const getProductsService = async (params: ProductHttpRequest) => {
  const response = await marketplaceApiClient.post<ProductHttpResponse>(
    "/products",
    params
  )

  const { data } = response

  return data
}

export const getProductsCategoriesService = async () => {
  const response = await marketplaceApiClient.get<ProductCategory[]>(
    "/products/categories"
  )

  const { data } = response

  return data
}

export const getProductDetailsService = async (id: number) => {
  const response = await marketplaceApiClient.get<Product>(`/products/${id}`)

  const { data } = response

  return data
}

export const getProductCommentsService = async (
  params: ProductCommentsHttpRequest
) => {
  const response = await marketplaceApiClient.post<ProductCommentsHttpResponse>(
    "/products/comments",
    params
  )

  const { data } = response

  return data
}

export const createCommentService = async (
  params: CreateCommentHttpRequest
) => {
  const response = await marketplaceApiClient.post<CreateCommentHttpResponse>(
    "/products/create/comments",
    params
  )

  const { data } = response

  return data
}

export const getUserCommentService = async ({
  productId,
}: UserCommentHttpRequest) => {
  const response = await marketplaceApiClient.get<UserCommentHttpResponse>(
    `/products/${productId}/user-comment`
  )

  const { data } = response

  return data
}

export const updateUserCommentService = async (
  params: UpdateUserCommentHttpRequest
) => {
  const { commentId, ...rest } = params

  const response =
    await marketplaceApiClient.put<UpdateUserCommentHttpResponse>(
      `/products/comments/${commentId}`,
      rest
    )

  const { data } = response

  return data
}
