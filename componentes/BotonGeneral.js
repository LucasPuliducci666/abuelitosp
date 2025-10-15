import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BotonGeneral = ({ titulo, imageSource, goBack = false, to = null, onPress }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (onPress) {
      onPress(); // ejecuta la acción personalizada (ej. reproducir sonido)
    }
    if (goBack) {
      navigation.goBack();
    } else if (to) {
      navigation.navigate(to);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
      <Text style={styles.texto}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '40%',
    height: 140,
    backgroundColor: '#AD54E0',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
    marginHorizontal: 15,
  },
  image: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
});

export default BotonGeneral;
