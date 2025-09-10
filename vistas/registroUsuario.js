import { View, Text, StyleSheet } from 'react-native';

export default function RegistroUsuario() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pantalla de registro ✍️</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b14de0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
});
