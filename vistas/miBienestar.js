import React from 'react';
import { View, Text } from 'react-native';
import BotonGeneral from '../componentes/BotonGeneral';
import backIcon from '../imagenes/mapa.png';
import Contacto from '../componentes/Contacto';

export default function MiBienestar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Pantalla de Bienestar 🌿</Text>
      <BotonGeneral imageSource={backIcon} goBack />
      <Contacto texto='licha' imageSource={backIcon} />
    </View>
  );
}
    