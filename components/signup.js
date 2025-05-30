import { useNavigation } from '@react-navigation/native';
import { View, Button, Text, TextInput } from 'react-native';

export function rellenarform(){
  const navigation = useNavigation();
  return (<View>
    <TextInput placeholder="Nombre"/>
    <TextInput placeholder="Apellido"/>
    <TextInput placeholder="Email"/>
    <TextInput placeholder="Contraseña" secureTextEntry={true}/>
    <TextInput placeholder="Repetir contraseña" secureTextEntry={true}/>
    <Button title="Registrarse" onPress={() => navigation.navigate("invitaramigos")}/>
  </View>);
}
  
export function invitaramigos(){
  const navigation = useNavigation();
  return (<View>
    <Text>Opcional: Ingresá el email de 3 amigos para participar en el sorteo de una play</Text>
    <TextInput placeholder="Amigo 1"/>
    <TextInput placeholder="Amigo 2"/>
    <TextInput placeholder="Amigo 3"/>
    <Button title="Saltear" onPress={() => navigation.navigate("saludar")}/>
  </View>);
}