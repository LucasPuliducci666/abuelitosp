import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

const BotonGeneral = ({ imageSource, onPress, size = 50 }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { width: size, height: size }]}>
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
