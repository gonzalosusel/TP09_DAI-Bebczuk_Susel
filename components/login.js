import { useNavigation } from '@react-navigation/native';
import { View, Button, TextInput, Alert } from 'react-native';

export function iniciarsesion(){
    const navigation = useNavigation();
    return (<View>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Contraseña" secureTextEntry={true}/>
        <Button title="Recuperar cuenta" onPress={() => navigation.navigate("recuperarcuenta")}/>
    </View>);
}
  
export function recuperarcuenta(){
    return (<View>
        <TextInput placeholder="Email"/>
        <Button title="Verificar" onPress={() => Alert.alert("Confío en que sos vos, la contraseña es info361")}/>
    </View>);
}