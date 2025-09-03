import { View } from 'react-native';
import BotonGeneral from '../componentes/BotonGeneral';
import arrowImage from '../imagenes/telefono.png';

export default function InicioMayor() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BotonGeneral titulo="Mi Bienestar" imageSource={arrowImage} to="miBienestar" />
      <BotonGeneral titulo="Telefono" imageSource={arrowImage} to="" />
      <BotonGeneral titulo="Inicio Resp" imageSource={arrowImage} to="InicioResponsable" />
    </View>
    
  );
}
