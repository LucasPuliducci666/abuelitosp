import { View } from 'react-native';
import BotonGeneral from '../componentes/BotonGeneral';
import telImage from '../imagenes/telefono.png'; 
import mapImage from '../imagenes/mapa.png'; 
import alarmImage from '../imagenes/alarma.png'; 

export default function InicioResponsable() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BotonGeneral titulo="Telefono" imageSource={telImage} to="MiBienestar" />
      <BotonGeneral titulo="Mapa" imageSource={mapImage} to="Mapa" />
      <BotonGeneral titulo="Alarma" imageSource={alarmImage} to="" />
    </View>
  );
}