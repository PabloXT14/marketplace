import { ActivityIndicator, TouchableOpacity } from "react-native"

import { colors } from "@/styles/colors"

import { AppIcon } from "@/shared/components/app-icon"

import type { useFavoriteButtonViewModel } from "./use-favorite-button-view-model"

type FavoriteButtonViewProps = ReturnType<typeof useFavoriteButtonViewModel>

export const FavoriteButtonView = ({
  isFavorite,
  isLoading,
  handleToggleFavorite,
}: FavoriteButtonViewProps) => {
  if (isLoading) {
    return <ActivityIndicator size="small" color={colors.purple.base} />
  }

  return (
    <TouchableOpacity onPress={handleToggleFavorite} activeOpacity={0.7}>
      <AppIcon
        name="Heart"
        type={isFavorite ? "bold" : "linear"}
        size={20}
        color={colors.purple.base}
      />
    </TouchableOpacity>
  )
}
