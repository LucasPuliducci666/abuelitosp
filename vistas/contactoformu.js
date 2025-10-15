import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputField from '../componentes/InputField';


export default function ContactoFormu({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleLogin = () => {
   navigation.navigate('TelefResp');
  };


return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar contacto</Text>
      <Text style={styles.subtitle}>Ingrese los datos de la persona</Text>

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
        placeholder="Telefono"
        value={telefono}
        onChangeText={setTelefono}
      />


      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Agregar</Text>
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