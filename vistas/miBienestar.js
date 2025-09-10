import React from 'react';
import { View, Text } from 'react-native';
import BotonGeneral from '../componentes/BotonGeneral';
import arrowImage from '../imagenes/telefono.png';

export default function MiBienestar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Bienestar 🌿</Text>
      <BotonGeneral imageSource={arrowImage} to="" />
    </View>
  );
}
    