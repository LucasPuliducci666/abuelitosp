import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputField from '../componentes/InputField';


export default function ContactoFormu({ navigation }) {
    const [email, setEmail] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [contrasenaNueva, setContrasenaNueva] = useState('');

  const handleLogin = () => {
    if (contrasena != contrasenaNueva) {
      navigation.navigate('InicioSesion');
    } else if (contrasena == contrasenaNueva) {
      alert('Las contraseñas no pueden ser iguales');
    }
    else {
      alert ('Ingrese ambas contraseñas')
    }
  };
 return (
    <View style={styles.container}>
      <Text style={styles.title}>Recupera tu contraseña facil</Text>
      <Text style={styles.subtitle}>Ingresá tus datos y tu nueva contraseña</Text>

      <InputField
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <InputField
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />
      <InputField
        placeholder="Contraseña nueva"
        value={contrasenaNueva}
        onChangeText={setContrasenaNueva}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Cambiar</Text>
            </TouchableOpacity>
  </View>
   
 )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b14de0',
    padding: 30,
  },
  title: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30
  },
  button: {
    backgroundColor: '#9c39b3',
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
