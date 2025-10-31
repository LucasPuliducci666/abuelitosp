import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import { API_URL } from '../apiconfig.js';

export default function Notificaciones() {
  const [alertas, setAlertas] = useState([]);

  const obtenerAlertas = async () => {
    try {
      const response = await fetch(`${API_URL}/api/alertas`);
      const data = await response.json();

      if (response.ok) {
        setAlertas(data);
      } else {
        Alert.alert('Error', data.message || 'No se pudieron obtener las alertas');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo conectar con el servidor');
    }
  };

  const marcarLeida = async (id) => {
    try {
      const response = await fetch(`${API_URL}/api/alertas/${id}`, {
        method: 'PUT',
      });

      if (response.ok) {
        setAlertas((prevAlertas) => prevAlertas.filter((a) => a.id !== id));
      } else {
        Alert.alert('Error', 'No se pudo marcar como leída');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo conectar con el servidor');
    }
  };

  useEffect(() => {
    obtenerAlertas();
    const interval = setInterval(obtenerAlertas, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🔔 Notificaciones</Text>

      {alertas.length === 0 ? (
        <Text style={{ color: '#555' }}>No hay alertas nuevas</Text>
      ) : (
        <FlatList
          data={alertas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.alerta}>
              <Text style={styles.texto}>{item.mensaje}</Text>
              <TouchableOpacity onPress={() => marcarLeida(item.id)}>
                <Text style={styles.boton}>Marcar como leída</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  alerta: {
    backgroundColor: '#E9D8FD',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  texto: {
    fontSize: 16,
    marginBottom: 8,
  },
  boton: {
    color: '#6B21A8',
    fontWeight: 'bold',
  },
});