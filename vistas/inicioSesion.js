import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputField from '../componentes/InputField';
import { API_URL } from '../apiconfig.js'

export default function InicioSesion({ navigation }) {
  const [email, setEmail] = useState('');
  const [contrasena, setContrasena] = useState('');


  
  const handleLogin = async () => {
    if (!email || !contrasena) {
      alert('Por favor completá todos los campos');
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password: contrasena
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || 'Error al iniciar sesión');
        return;
      }

      const tokenData = JSON.parse(atob(data.token.split('.')[1]));

      const params = { 
        id_usuario: tokenData.id, 
        email: tokenData.email, 
        isResp: tokenData.isResp 
      };

      if (tokenData.isResp) {
        navigation.navigate('Main', { screen: 'InicioResponsable', params });
      } else {
        navigation.navigate('Main', { screen: 'InicioMayor', params });
      }

    } catch (error) {
      console.error(error);
      alert('No se pudo conectar con el servidor');
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Ingresá tu cuenta</Text>

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

        <TouchableOpacity onPress={() => navigation.navigate('RecuperarContrasena')}>
  <Text style={styles.forgot}>
    ¿Olvidaste tu contraseña? Hace <Text style={{ fontStyle: 'italic' ,}}>click</Text> aquí.
  </Text>
</TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RegistroUsuario')}>
  <Text style={styles.register}>
    ¿No tenés cuenta? <Text style={{ textDecorationLine: 'underline' }}>Registrate</Text>
  </Text>
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
