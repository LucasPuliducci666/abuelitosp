import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import InputField from '../componentes/InputField';


export default function inicioSesion({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleLogin = () => {
    if (nombre && apellido && telefono) {
      navigation.navigate('telefmayor');
    } else {
      alert('Por favor completá todos los campos');
    }
  };

}
