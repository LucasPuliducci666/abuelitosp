import React from 'react';
import { View, Alert } from 'react-native';
import BotonGeneral from '../componentes/BotonGeneral';
import abuImage from '../imagenes/abuelito.png'; 

export default function MiBienestar({ route }) {
  const { id_usuario } = route.params || {}; // se espera recibir el id desde el login

  const enviarAlerta = async (mensaje) => {
    
    if (!id_usuario) {
      Alert.alert('Error', 'No se encontró el usuario');
      return;
    }

    try {
      const response = await fetch('http://192.168.0.162:3000/api/alertas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_usuario, mensaje })
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Enviado', 'Tu alerta fue enviada correctamente');
      } else {
        Alert.alert('Error', data.message || 'No se pudo enviar la alerta');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'No se pudo conectar con el servidor');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <BotonGeneral titulo="Necesito medicación" imageSource={abuImage} onPress={() => enviarAlerta('Necesito medicación')} />
        <BotonGeneral titulo="Necesito compañía" imageSource={abuImage} onPress={() => enviarAlerta('Necesito compañía')} />
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <BotonGeneral titulo="Me siento mal" imageSource={abuImage} onPress={() => enviarAlerta('Me siento mal')} />
        <BotonGeneral titulo="Tuve un accidente" imageSource={abuImage} onPress={() => enviarAlerta('Tuve un accidente')} />
      </View>
    </View>
  );
}
