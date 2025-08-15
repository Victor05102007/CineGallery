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

import { useNavigation } from '@react-navigation/native';

import Feather from "@expo/vector-icons/Feather";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useState } from "react";

export default function App() {
  const [Email, setEmail] = useState("")
  const [Senha, setSenha] = useState("")
  const navigation = useNavigation();

  function validaLogin() {
    console.log(Email),
      console.log(Senha)

    if (Email === "victor@gmail.com" && Senha === "12345") {
      navigation.navigate('Home'); // redireciona para a tela Home
    } else {
      alert("Email ou senha incorretos");
    }
  }



  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/images/4015b2b49e2cd45f3322534ba89a7779.jpg")}
      resizeMode="cover"
    >

      <Text style={styles.astromembers}>CineGallery</Text>

      <View style={styles.visao}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Email"
          placeholderTextColor="white"
          onChangeText={(value) => setEmail(value)}
          value={Email}
        />

        <Feather name="user" size={24} color="white" />
      </View>

      <View style={styles.visao}>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={Senha}
          onChangeText={(value) => setSenha(value)}
          secureTextEntry={true}
          placeholderTextColor="white"
        />
        <MaterialIcons name="password" size={24} color="white" />
      </View>

      {/*<Button
        title="Enviar"
        color="#ff0000"
        onPress={() => alert("você apertou o botão")}
      />
      */}

      <TouchableOpacity
        style={styles.botao}
        onPress={validaLogin}
      >
        <Text style={styles.texto}>Login</Text>
      </TouchableOpacity>
    </ImageBackground >
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  texto: {
    fontSize: 10,
    color: "bisque",
    fontWeight: "bold",
  },
  input: {
    width: 300,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "bisque",
    color: "bisque",
    marginTop: 20,
  },
  image: {
    width: 100,
    height: 100,
  },
  botao: {
    width: 100,
    padding: 10,
    backgroundColor: "transparent",
    color: "bisque",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "bisque",
    color: "bisque",
    marginTop: 25,
  },
  visao: {
    flexDirection: "row-reverse",
    width: 300,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
  },
  astromembers: {
    color: "white",
    fontSize: 20,
    fontStyle: "Italic",
    fontWeight: "bold",
  },
});
