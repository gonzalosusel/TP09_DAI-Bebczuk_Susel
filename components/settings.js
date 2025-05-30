import { useNavigation } from '@react-navigation/native';
import { View, Button, Text, TextInput } from 'react-native';

export function editarperfil(){
    return (<View>
        <Button title="Cargar foto de perfil" onPress={() => Alert.alert("Nos vemos en el TP 10!!!")}/>
        <TextInput placeholder="Nombre" defaultValue="Gabriel"/>
        <TextInput placeholder="Apellido" defaultValue="Stancanelli"/>
        <TextInput placeholder="Apodo" defaultValue="Stanca"/>
    </View>)
}
  
export function verperfil(){
    const navigation = useNavigation();
    return (<View>
        <Image source={{uri: "https://recursos.ort.edu.ar/static/archivos/usuarioperfil/22609"}}/>
        <Text>Gabriel Stancanelli</Text>
        <Text>Stanca</Text>
        <Button title="Editar perfil" onPress={() => navigation.navigate("editarperfil")}/>
    </View>)
}