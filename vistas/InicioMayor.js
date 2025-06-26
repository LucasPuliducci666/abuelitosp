import React from 'react';
import { View, Text } from 'react-native';
import BotonGeneral from '../componentes/BotonGeneral';
import arrowImage from '../imagenes/telefono.png'; // usa cualquier ícono tuyo

export default function InicioMayor() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla Principal</Text>
      <BotonGeneral imageSource={arrowImage} to="miBienestar" />
    </View>
  );
}
