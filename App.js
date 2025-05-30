import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import { saludar, todolist } from "./components/home.js";
import { verperfil, editarperfil } from "./components/settings.js";
import { rellenarform, invitaramigos } from "./components/signup.js";
import { iniciarsesion, recuperarcuenta } from "./components/login.js";

const homeStack = createNativeStackNavigator();
const settingsStack = createNativeStackNavigator();
const signupStack = createNativeStackNavigator();
const loginStack = createNativeStackNavigator();

function home() {
  return (
    <homeStack.Navigator>
      <homeStack.Screen name="Saludar" component={saludar} />
      <homeStack.Screen name="ToDo list" component={todolist} />
    </homeStack.Navigator>
  );
}

function settings() {
  return (
    <settingsStack.Navigator>
      <settingsStack.Screen name="Ver perfil" component={verperfil} />
      <settingsStack.Screen name="Editar perfil" component={editarperfil} />
    </settingsStack.Navigator>
  );
}

function signup() {
  return (
    <signupStack.Navigator>
      <signupStack.Screen name="Registrarse" component={rellenarform} />
      <signupStack.Screen name="Invitar Amigos" component={invitaramigos} />
    </signupStack.Navigator>
  );
}

function login() {
  return (
    <loginStack.Navigator>
      <loginStack.Screen name="Iniciar sesión" component={iniciarsesion} />
      <loginStack.Screen name="Recuperar cuenta" component={recuperarcuenta} />
    </loginStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function Tabs(){
  <Tab.Navigator>j
    <Tab.Screen name="Home" component="home" options={{tabBarIcon: ({color}) => <Ionicons name="home" size={24} color={color}/>}}/>
    <Tab.Screen name="Settings" component="settings" options={{tabBarIcon: ({color}) => <Ionicons name="settings" size={24} color={color}/>}}/>
    <Tab.Screen name="Signup" component="signup" options={{tabBarIcon: ({color}) => <Ionicons name="person" size={24} color={color}/>}}/>
    <Tab.Screen name="Login" component="login" options={{tabBarIcon: ({color}) => <Ionicons name="log-in" size={24} color={color}/>}}/>
  </Tab.Navigator>
}

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Hola</Text>
      <NavigationContainer>
        <Tabs/>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
