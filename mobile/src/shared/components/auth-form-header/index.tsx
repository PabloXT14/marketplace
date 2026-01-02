import { View, Text, Image } from "react-native"

type AuthFormHeaderProps = {
  title: string
  subtitle: string
}

export const AuthFormHeader = ({ title, subtitle }: AuthFormHeaderProps) => (
  <View className="mb-14 items-center gap-8">
    <Image
      resizeMode="contain"
      className="h-[60px] w-[80px]"
      source={require("@/shared/assets/images/logo.png")}
    />

    <View className="items-center gap-2">
      <Text className="font-lato-bold text-2xl text-gray-500 leading-tight">
        {title}
      </Text>

      <Text className="font-lato text-gray-300 text-sm leading-snug">
        {subtitle}
      </Text>
    </View>
  </View>
)
