import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => router.back()}
      >
        <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#121214",
  },
  text: {
    fontSize: 20,
    color: "#fff",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#8257E5",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
