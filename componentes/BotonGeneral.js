import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BotonGeneral = ({ imageSource, size = 50, goBack = false, to = null }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    if (goBack) {
      navigation.goBack();
    } else if (to) {
      navigation.navigate(to);
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.button, { width: size, height: size }]}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#eee',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default BotonGeneral;
