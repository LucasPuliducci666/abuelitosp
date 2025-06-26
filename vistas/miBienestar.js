import React from 'react';
import { View, Text } from 'react-native';
import BotonGeneral from '../componentes/BotonGeneral';
import backIcon from '../imagenes/telefono.png'; // o el que quieras

export default function miBienestar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Bienestar 🌿</Text>
      <BotonGeneral imageSource={backIcon} goBack />
    </View>
  );
}
    