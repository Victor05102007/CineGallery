import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//IMPORT HOME e SOBRE
import Home from "./src/pages/Home.js"
import Login from "./src/pages/Login.js"

//FORNECE COMPONETE PARA EVOLVER NOSSA NAVEGAÇÃO
import { NavigationContainer } from '@react-navigation/native';

//IMPORTANDO AS FUNÇÕES DA ROTA STACK
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
