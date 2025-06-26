
import React from 'react';
import { SafeAreaView, Alert } from 'react-native';
import BotonGeneral from './componentes/BotonGeneral';

export default function App() {
  const handlePress = () => {
    Alert.alert('¡Pulsaste el boton de llamada! :)');
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BotonGeneral
        imageSource={require('./imagenes/telefono.png')} 
        onPress={handlePress}
        size={80}
      />
    </SafeAreaView>
  );
}
