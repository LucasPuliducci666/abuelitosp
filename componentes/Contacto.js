import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Contacto = ({texto, imageSource}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.button, {}]}>
      <Text style={styles.text}> Numero de: {texto} </Text>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '80%',
    height: 60,
    backgroundColor: '#AD54E0',
    borderRadius: 10,
    padding: 5,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    elevation: 1,
  },
  image: {
    width: '20%',
    height: '100%',
    borderWidth: 1,
    borderColor: 'red',
    borderStyle: 'solid'
  },
  text: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Arial',
  }
});

export default Contacto;