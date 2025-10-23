import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity  } from 'react-native';
import InputField from '../componentes/InputField';

export default function RegistroUsuario({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  return (
   <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Ingresá sus datos</Text>

      <InputField
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <InputField
        placeholder="Apellido"
        value={apellido}
        onChangeText={setApellido}
      />
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

      <TouchableOpacity
      style={styles.button} onPress={() => {
        if (nombre && apellido && email && contrasena) {
          navigation.navigate('InicioSesion');
      } else {
          alert('Por favor completá todos los campos');
            }
  }}
>
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>

    </View>
  );
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
