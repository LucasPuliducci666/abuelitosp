import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InicioMayor from './vistas/InicioMayor';
import MiBienestar from './vistas/miBienestar'; // ¡ojo! respetá mayúsculas/minúsculas según lo escribiste

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="InicioMayor">
        <Stack.Screen name="InicioMayor" component={InicioMayor} />
        <Stack.Screen name="MiBienestar" component={MiBienestar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
