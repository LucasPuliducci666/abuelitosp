import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function RecuperarContrasena() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla para recuperar contraseña 🔐</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b14de0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
});
