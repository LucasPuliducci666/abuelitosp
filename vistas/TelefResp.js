import { View } from 'react-native';
import Contacto from '../componentes/Contacto';
import BotonGeneral from '../componentes/BotonGeneral';
import arrowImage from '../imagenes/telefono.png';

export default function TelefMayor() {
  return (
<View>
  <Contacto texto="gordo" />
  <View style={{ height: 100 }} />

  <View style={{ alignItems: "center" }}>
    <BotonGeneral 
      titulo="Agregar contacto" 
      imageSource={arrowImage} 
      to="ContactoFormu" 
    />
  </View>
</View>


  );
}
