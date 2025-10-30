import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecuperarContrasena from './vistas/RecuperarContrasena';
import InicioSesion from './vistas/InicioSesion';
import RegistroUsuario from './vistas/RegistroUsuario';
import InicioMayor from './vistas/InicioMayor';
import InicioResponsable from './vistas/InicioResponsable';
import MiBienestar from './vistas/MiBienestar';
import Mapa from './vistas/Mapa';
import TelefMayor from './vistas/TelefMayor';
import TelefResp from './vistas/TelefResp';
import ContactoFormu from './vistas/ContactoFormu';
import Notificaciones from './vistas/Notificaciones';
import Header from './componentes/Header'; // Importa tu componente Header

const AuthStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();

function MainStackScreen() {
  return (
    <MainStack.Navigator
      initialRouteName="InicioMayor"
      screenOptions={{
        header: ({ route, options }) => {
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
              ? options.title
              : route.name;
          return <Header titulo={title} />;
        },
      }}
    >
      <MainStack.Screen name="InicioMayor" component={InicioMayor} options={{ title: 'Inicio' }} />
      <MainStack.Screen name="InicioResponsable" component={InicioResponsable} options={{ title: 'Inicio' }} />
      <MainStack.Screen name="MiBienestar" component={MiBienestar} options={{ title: 'Mi Bienestar' }} />
      <MainStack.Screen name="Mapa" component={Mapa} options={{ title: 'Mapa' }} />
      <MainStack.Screen name="ContactoFormu" component={ContactoFormu} options={{ title: 'Contacto' }} />
      <MainStack.Screen name="TelefMayor" component={TelefMayor} options={{ title: 'Teléfono' }} />
      <MainStack.Screen name="TelefResp" component={TelefResp} options={{ title: 'Teléfono' }} />
      <MainStack.Screen name="Notificaciones" component={Notificaciones} options={{ title: 'Notificaciones' }} />
    </MainStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator
        initialRouteName="InicioSesion"
        screenOptions={{ headerShown: false }}
      >
        <AuthStack.Screen name="InicioSesion" component={InicioSesion} />
        <AuthStack.Screen name="RegistroUsuario" component={RegistroUsuario} />
        <AuthStack.Screen name="RecuperarContrasena" component={RecuperarContrasena} />
        <AuthStack.Screen name="Main" component={MainStackScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}