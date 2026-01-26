import { FlatList, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

import { HomeHeader } from "./components/header"
import { SearchInput } from "./components/search-input"
import { ProductCard } from "./components/product-card"

import type { Product } from "@/shared/interfaces/product"

const NUMBER_OF_COLUMNS = 2

export const HomeView = () => {
  const products: Product[] = [
    {
      id: 1,
      value: "1200.00",
      name: "Sofá",
      description: "Um sofá confortável",
      photo:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      height: "80cm",
      width: "200cm",
      weight: "30kg",
      averageRating: 4.5,
      views: 150,
      ratingCount: 45,
      categoryId: 2,
      category: {
        id: 2,
        name: "Móveis",
      },
      createdAt: "2023-01-01T00:00:00Z",
      updatedAt: "2023-01-10T00:00:00Z",
      deletedAt: "",
    },
    {
      id: 2,
      value: "250.00",
      name: "Cadeira",
      description: "Uma cadeira confortável",
      photo:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      height: "80cm",
      width: "200cm",
      weight: "30kg",
      averageRating: 4.5,
      views: 150,
      ratingCount: 45,
      categoryId: 2,
      category: {
        id: 2,
        name: "Móveis",
      },
      createdAt: "2023-01-01T00:00:00Z",
      updatedAt: "2023-01-10T00:00:00Z",
      deletedAt: "",
    },
    {
      id: 3,
      value: "250.00",
      name: "Cadeira",
      description: "Uma cadeira confortável",
      photo:
        "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      height: "80cm",
      width: "200cm",
      weight: "30kg",
      averageRating: 4.5,
      views: 150,
      ratingCount: 45,
      categoryId: 2,
      category: {
        id: 2,
        name: "Móveis",
      },
      createdAt: "2023-01-01T00:00:00Z",
      updatedAt: "2023-01-10T00:00:00Z",
      deletedAt: "",
    },
  ]

  return (
    <SafeAreaView edges={["top"]} className="flex-1 bg-background px-4 py-9">
      <FlatList
        data={products}
        keyExtractor={(item) => `product-${item.id}`}
        renderItem={({ item }) => (
          <View className="max-w-[48%] flex-1">
            <ProductCard product={item} />
          </View>
        )}
        numColumns={NUMBER_OF_COLUMNS}
        columnWrapperStyle={{ gap: 8 }}
        contentContainerStyle={{ gap: 8 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <SearchInput />
          </>
        )}
      />
    </SafeAreaView>
  )
}
