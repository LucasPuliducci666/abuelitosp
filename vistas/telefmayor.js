import { View } from 'react-native';
import Contacto from '../componentes/Contacto';
import BotonGeneral from '../componentes/BotonGeneral';
import arrowImage from '../imagenes/telefono.png';

export default function TelefMayor() {
  return (
    <View >
        <Contacto texto="gordo"> </Contacto>
        <BotonGeneral titulo="Agregar contacto" imageSource={arrowImage} to="contactoformu" />
    </View>
  );
}
