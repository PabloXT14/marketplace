import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export const Input = () => (
  <View>
    <Text>LABEL</Text>
    <View>
      <Ionicons name="mail" />

      <TextInput />

      <TouchableOpacity>
        <Ionicons name="eye" />
      </TouchableOpacity>
    </View>
  </View>
)
