import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BotonGeneral = ({ titulo, imageSource, goBack = false, to = null }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (goBack) {
      navigation.goBack();
    } else if (to) {
      navigation.navigate(to);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.button, {}]}>
      <Text style={styles.texto}>{titulo}</Text>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '38%',
    height: '20%',
    backgroundColor: '#AD54E0',
    borderRadius: 10,
    paddingVertical: 30,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  image: {
    margin: 5,
    width: '100%',
    height: '100%',
  },
  texto: {
    fontSize: 18,
  }
});

export default BotonGeneral;
