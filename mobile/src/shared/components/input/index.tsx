import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { SolarIcon } from "react-native-solar-icons"

export const Input = () => (
  <View>
    <Text>LABEL</Text>
    <View>
      <SolarIcon name="Letter" size={24} color="black" type="linear" />

      <TextInput />

      <TouchableOpacity>
        <SolarIcon name="Eye" size={24} color="black" type="linear" />
      </TouchableOpacity>
    </View>
  </View>
)
