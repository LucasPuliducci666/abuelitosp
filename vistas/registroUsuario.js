import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import InputField from '../componentes/InputField';

export default function RegistroUsuario({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [isResp, setIsResp] = useState(false);

  const handleRegister = async () => {
    if (!nombre || !email || !contrasena) {
      alert('Por favor completá todos los campos');
      return;
    }

    try {
      const response = await fetch('http://192.168.0.162:3000/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          password: contrasena,
          email,
          isResp,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Error al registrar usuario');
        return;
      }

      alert('Usuario registrado con éxito');
      navigation.navigate('InicioSesion');
    } catch (error) {
      console.error(error);
      alert('No se pudo conectar con el servidor');
    }
  };

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

      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>¿Sos responsable?</Text>
        <Switch
          value={isResp}
          onValueChange={setIsResp}
          thumbColor={isResp ? '#fff' : '#fff'}
          trackColor={{ false: '#888', true: '#9c39b3' }}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
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
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#9c39b3',
    padding: 15,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
  },
  switchLabel: {
    color: '#fff',
    fontSize: 16,
  },
});
