import { View } from 'react-native';
import BotonGeneral from '../componentes/BotonGeneral';
import TelefMayor from '../imagenes/telefono.png';
import MiBienestar from '../imagenes/abuelito.png';
import Header from '../componentes/Header' 

export default function InicioMayor() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BotonGeneral titulo="Mi Bienestar" imageSource={MiBienestar} to="MiBienestar" />
      <BotonGeneral titulo="Telefono" imageSource={TelefMayor} to="TelefMayor" />
    </View>
    
  );
}
