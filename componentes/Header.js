// Header.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { API_URL } from '../apiconfig.js';

export default function Header({ titulo = '', isResp = false }) {
  const navigation = useNavigation();
  const [alertas, setAlertas] = useState([]);
  const [ultimaAlerta, setUltimaAlerta] = useState(null);

  const obtenerAlertas = async () => {
    try {
      const response = await fetch(`${API_URL}/api/alertas`);
      const data = await response.json();

      if (response.ok) {
        setAlertas(data);
        if (data.length > 0) setUltimaAlerta(data[0]);
        else setUltimaAlerta(null);
      }
    } catch (error) {
      console.log('Error obteniendo alertas:', error);
    }
  };

  const cerrarAlerta = async (id) => {
    try {
      await fetch(`${API_URL}/api/alertas/${id}`, { method: 'PUT' });
      setUltimaAlerta(null);
      setAlertas((prev) => prev.filter((a) => a.id !== id));
    } catch (error) {
      console.log('Error cerrando alerta:', error);
    }
  };

  useEffect(() => {
    if (isResp) {
      obtenerAlertas();
      const interval = setInterval(obtenerAlertas, 5000);
      return () => clearInterval(interval);
    }
  }, [isResp]);

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.titulo}>{titulo}</Text>

        {isResp && (
          <TouchableOpacity
            onPress={() => navigation.navigate('Notificaciones')}
            style={styles.icono}
          >
            <Ionicons name="notifications-outline" size={26} color="white" />
            {alertas.length > 0 && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{alertas.length}</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>

      {isResp && ultimaAlerta && (
        <View style={styles.alertaFlotante}>
          <Text style={styles.alertaTexto}>⚠️ {ultimaAlerta.mensaje}</Text>
          <TouchableOpacity onPress={() => cerrarAlerta(ultimaAlerta.id)}>
            <Ionicons name="close" size={20} color="black" />
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#B255F0',
    paddingHorizontal: 20,
    paddingVertical: 12,
    elevation: 4,
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icono: {
    padding: 5,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  alertaFlotante: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFD6D6',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#FFAAAA',
  },
  alertaTexto: {
    fontSize: 16,
    fontWeight: '500',
    color: '#A00000',
  },
});
