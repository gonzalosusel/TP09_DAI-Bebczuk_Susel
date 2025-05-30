import { useNavigation } from '@react-navigation/native';
import { View, Button, Text, Alert } from 'react-native';
import styles from './Estilos';

export function saludar(){
    const navigation = useNavigation();
    return (<View style={styles.container}>
        <Button title="Saludar" onPress={() => Alert.alert("Bienvenido a nuestra appini")}/>
        <Button title="Ir a ToDo list" onPress={() => navigation.navigate("todolist")}/>
    </View>);
}

export function todolist(){
    return (<View style={styles.container}> 
        <Text>Regar plantas</Text><input type="checkbox"/>
        <Text>Cocinar</Text><input type="checkbox"/>
        <Text>Pasear a pichichus (Stanca)</Text><input type="checkbox"/>
    </View>);
}