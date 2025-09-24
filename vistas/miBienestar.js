import { View, Text } from 'react-native';
import BotonGeneral from '../componentes/BotonGeneral';
import abuImage from '../imagenes/abuelito.png'; 

export default function MiBienestar() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <BotonGeneral style={{}} titulo="Necesito medicación" imageSource={abuImage} to="" />
        <BotonGeneral style={{}} titulo="Necesito compañia" imageSource={abuImage} to="" />
      </View>
      <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
        <BotonGeneral titulo="Me siento mal" imageSource={abuImage} to="" />
        <BotonGeneral titulo="Tuve un accidente" imageSource={abuImage} to="" />
      </View>
    </View>
  );
}
    