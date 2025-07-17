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
    <TouchableOpacity onPress={handlePress} style={[styles.button, {}]}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '30%',
    height: '15%',
    backgroundColor: '#AD54E0',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
  },
  image: {
    margin: 15,
    width: '100%',
    height: '100%',
  },
});

export default BotonGeneral;
