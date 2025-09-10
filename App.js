import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecuperarContrasena from './vistas/RecuperarContrasena';
import InicioSesion from './vistas/InicioSesion';
import RegistroUsuario from './vistas/RegistroUsuario';
import InicioMayor from './vistas/InicioMayor';
import InicioResponsable from './vistas/InicioResponsable';
import MiBienestar from './vistas/MiBienestar';
import Mapa from './vistas/Mapa';
import telefMayor from './vistas/telefmayor';
import contactoformu from './vistas/contactoformu';
import MiBienestar from './vistas/MiBienestar';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="inicioSesion">
        <Stack.Screen name="InicioSesion" component={InicioSesion} />
        <Stack.Screen name="RegistroUsuario" component={RegistroUsuario} />
        <Stack.Screen name="InicioMayor" component={InicioMayor} />
        <Stack.Screen name="InicioResponsable" component={InicioResponsable} />
        <Stack.Screen name="MiBienestar" component={MiBienestar} />
        <Stack.Screen name="RecuperarContrasena" component={RecuperarContrasena} />
        <Stack.Screen name="Mapa" component={Mapa} />
        <Stack.Screen name="contactoformu" component={contactoformu}/>
        <Stack.Screen name="telefmayor" component={telefMayor}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
