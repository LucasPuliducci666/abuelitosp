import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Notificaciones() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🔔 Notificaciones</Text>
      <Text>Aquí verás tus notificaciones más adelante...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
