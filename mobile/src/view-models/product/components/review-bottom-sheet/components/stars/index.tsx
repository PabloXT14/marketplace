import { TouchableOpacity, View } from "react-native"

import { colors } from "@/styles/colors"

import { AppIcon } from "@/shared/components/app-icon"

type StarsProps = {
  rating: number
}

export const Stars = ({ rating }: StarsProps) => (
  <View className="flex-row gap-2">
    {Array.from({ length: 5 }).map((_, index) => {
      const starNumber = index + 1
      const isSelected = starNumber <= rating

      return (
        <TouchableOpacity key={`star-${starNumber}`}>
          <AppIcon
            name="Star"
            size={28}
            type={isSelected ? "bold" : "linear"}
            color={isSelected ? colors.purple.base : colors.gray[200]}
          />
        </TouchableOpacity>
      )
    })}
  </View>
)
