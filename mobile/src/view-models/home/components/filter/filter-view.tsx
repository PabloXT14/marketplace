import { Text, TouchableOpacity, View } from "react-native"
import { Checkbox } from "expo-checkbox"

import { AppIcon } from "@/shared/components/app-icon"
import { Input } from "@/shared/components/input"
import { Button } from "@/shared/components/button"
import { DismissKeyboardView } from "@/shared/components/dismiss-keyboard-view"

import { colors } from "@/styles/colors"

import type { useFilterViewModel } from "./use-filter-view-model"

type FilterViewProps = ReturnType<typeof useFilterViewModel>

export const FilterView = ({
  categories,
  isLoading,
  selectedCategories,
  handleCategoryToggle,
  handleValueMaxChange,
  handleValueMinChange,
}: FilterViewProps) => {
  return (
    <DismissKeyboardView>
      <View className="gap-10 px-6 py-8">
        {/* ITEMS */}
        <View className="gap-6">
          {/* HEADER */}
          <View className="item-center flex-row justify-between">
            <Text className="font-lato-bold text-base text-gray-500 leading-tight">
              Filtrar anúncios
            </Text>

            <TouchableOpacity>
              <AppIcon name="CloseSquare" size={24} color={colors.gray[300]} />
            </TouchableOpacity>
          </View>

          {/* VALUE */}
          <View>
            <Text className="font-lato-bold text-gray-300 text-xs uppercase leading-tight">
              Valor
            </Text>

            {/* OPTIONS */}
            <View className="flex-row gap-5">
              <Input
                placeholder="De"
                keyboardType="numeric"
                containerClassName="flex-1"
                onChangeText={(value) => handleValueMinChange(Number(value))}
              />
              <Input
                placeholder="Até"
                keyboardType="numeric"
                containerClassName="flex-1"
                onChangeText={(value) => handleValueMaxChange(Number(value))}
              />
            </View>
          </View>

          {/* CATEGORY */}
          <View className="gap-5">
            <Text className="font-lato-bold text-gray-300 text-xs uppercase leading-tight">
              Categoria
            </Text>

            {/* OPTIONS */}
            <View className="gap-3">
              {isLoading && (
                <Text className="font-lato text-base text-gray-400 leading-snug">
                  Carregando categorias...
                </Text>
              )}
              {categories?.map((category) => (
                <TouchableOpacity
                  key={`product-category-${category.id}`}
                  className="flex-row items-center gap-2"
                  onPress={() => handleCategoryToggle(category.id)}
                >
                  <Checkbox
                    value={selectedCategories.includes(category.id)}
                    onValueChange={() => handleCategoryToggle(category.id)}
                    color={
                      selectedCategories.includes(category.id)
                        ? colors.purple.base
                        : colors.gray[100]
                    }
                    style={{ borderRadius: 4, borderWidth: 1 }}
                  />

                  <Text className="font-lato text-base text-gray-400 leading-snug">
                    {category.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* ACTIONS */}
        <View className="flex-row items-center gap-3">
          <Button text="Limpar filtro" variant="outline" className="flex-1" />

          <Button text="Filtrar" className="flex-1" />
        </View>
      </View>
    </DismissKeyboardView>
  )
}
