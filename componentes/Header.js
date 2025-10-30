import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function Header({ titulo = '' }) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text style={styles.titulo}>{titulo}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Notificaciones')}
        style={styles.icono}
      >
        <Ionicons name="notifications-outline" size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#B255F0',
    paddingHorizontal: 20,
    paddingVertical: 12,
    elevation: 4,
  },
  titulo: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icono: {
    padding: 5,
  },
});
