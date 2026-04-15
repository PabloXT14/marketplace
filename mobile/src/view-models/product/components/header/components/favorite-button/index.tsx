import { FavoriteButtonView } from "./favorite-button-view"
import {
  useFavoriteButtonViewModel,
  type UseFavoriteButtonViewModelProps,
} from "./use-favorite-button-view-model"

type FavoriteButtonProps = UseFavoriteButtonViewModelProps

export const FavoriteButton = ({ productId }: FavoriteButtonProps) => {
  const props = useFavoriteButtonViewModel({ productId })

  return <FavoriteButtonView {...props} />
}
