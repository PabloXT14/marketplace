import { Image, Text, View } from "react-native"

import { AppIcon } from "@/shared/components/app-icon"

import { colors } from "@/styles/colors"
import { useUserStore } from "@/shared/store/user-store"

import type { ProductComment } from "@/shared/interfaces/product-comment"

type CommentItemProps = {
  comment: ProductComment
}

export const CommentItem = ({ comment }: CommentItemProps) => {
  const { user } = useUserStore()

  const isCurrentUser = user?.id === comment.user.id

  return (
    <View className="gap-2 rounded-lg bg-white p-4 shadow-sm">
      {/* TOP */}
      <View className="flex-row items-center justify-between">
        {/* PROFILE */}
        <View className="flex-row items-center gap-2">
          {comment.user.avatar.url ? (
            <Image
              source={{ uri: comment.user.avatar.url }}
              alt={comment.user.name}
              className="size-8 rounded-md"
              resizeMode="cover"
            />
          ) : (
            <View className="size-8 items-center justify-center rounded-md border border-shape bg-shape">
              <AppIcon name="User" size={20} color={colors.gray[300]} />
            </View>
          )}

          <Text className="font-lato-bold text-gray-500 text-sm leading-tight">
            {comment.user.name}
          </Text>

          {/* YOU FLAG */}
          {isCurrentUser && (
            <View className="rounded-full bg-blue-base px-2 py-1">
              <Text className="font-lato-bold text-[10px] text-white uppercase">
                Você
              </Text>
            </View>
          )}
        </View>

        {/* RATING */}
        <View className="flex-row items-center gap-1.5">
          <AppIcon name="Star" type="bold" size={14} color={colors.blue.base} />

          {/* VALUE */}
          <View className="flex-row items-baseline gap-1">
            <Text className="font-lato-bold text-gray-400 text-sm leading-tight">
              {comment.user.rating.value}
            </Text>

            <Text className="font-lato-bold text-[10px] text-gray-400">
              / 5
            </Text>
          </View>
        </View>
      </View>

      {/* CONTENT */}
      <Text className="font-lato text-gray-400 text-sm leading-snug">
        {comment.content}
      </Text>
    </View>
  )
}
