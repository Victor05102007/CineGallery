import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/75ea438a7d51d67131f6b2672accdedc.jpg")}
      resizeMode="cover"
    >
      <View>
        <Text style={styles.texto}>TELA HOME FINALMENTE</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontSize: 10,
    color: "bisque",
    fontWeight: "bold",
  },
});
