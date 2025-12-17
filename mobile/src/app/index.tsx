import { Text, View } from "react-native"

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#121214",
      }}
    >
      <Text style={{ fontSize: 20, color: "#fff" }}>Home</Text>
    </View>
  )
}
