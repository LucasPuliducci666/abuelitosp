import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecuperarContrasena from './vistas/RecuperarContrasena';
import inicioSesion from './vistas/inicioSesion';
import registroUsuario from './vistas/registroUsuario';
import InicioMayor from './vistas/InicioMayor';
import miBienestar from './vistas/miBienestar'; // ¡ojo! respetá mayúsculas/minúsculas según lo escribiste

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicioSesion">
        <Stack.Screen name="inicioSesion" component={inicioSesion} />
        <Stack.Screen name="registroUsuario" component={registroUsuario} />
        <Stack.Screen name="InicioMayor" component={InicioMayor} />
        <Stack.Screen name="miBienestar" component={miBienestar} />
        <Stack.Screen name="RecuperarContrasena" component={RecuperarContrasena} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
