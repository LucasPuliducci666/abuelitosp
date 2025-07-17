import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';

const Contacto = ({ texto, imageSource }) => {
  const [mostrarCaja, setMostrarCaja] = useState(false);

  const handlePress = () => {
    setMostrarCaja(!mostrarCaja);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.text}>Numero de: {texto}</Text>
        <Image source={imageSource} style={styles.image} resizeMode="contain" />
      </TouchableOpacity>

      {mostrarCaja && (
        <View style={styles.caja}>
          <Text style={styles.cajaTexto}>Llamar📞 </Text>
          <Text style={styles.cajaTexto}>Mensaje📞 </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 60,
    backgroundColor: '#AD54E0',
    borderRadius: 10,
    padding: 7,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 1,
  },
  image: {
    width: '20%',
    height: '100%',
  },
  text: {
    fontSize: 23,
    color: 'white',
    fontFamily: 'Arial',
  },
  caja: {
    width: '80%',
    backgroundColor: '#E6D3F8',
    padding: 7,
    borderRadius: 10,
    elevation: 2,
  },
  cajaTexto: {
    fontSize: 23,
    color: '#333',
    marginBottom: 5,
    marginTop: 5
  },
});

export default Contacto;