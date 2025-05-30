import { useNavigation } from '@react-navigation/native';
import { View, Button, TextInput, Alert } from 'react-native';
import styles from './Estilos';


export function iniciarsesion(){
    const navigation = useNavigation();
    return (<View style={styles.container}>
        <TextInput placeholder="Email"/>
        <TextInput placeholder="Contraseña" secureTextEntry={true}/>
        <Button title="Recuperar cuenta" onPress={() => navigation.navigate("recuperarcuenta")}/>
    </View>);
}
  
export function recuperarcuenta(){
    return (<View style={styles.container}>
        <TextInput placeholder="Email"/>
        <Button title="Verificar" onPress={() => Alert.alert("Confío en que sos vos, la contraseña es info361")}/>
    </View>);
}