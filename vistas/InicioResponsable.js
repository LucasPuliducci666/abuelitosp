import { View } from 'react-native';
import { useState, useCallback } from 'react';
import BotonGeneral from '../componentes/BotonGeneral';
import telImage from '../imagenes/telefono.png';
import mapImage from '../imagenes/mapa.png';
import alarmImage from '../imagenes/alarma.png';
import { API_URL } from '../apiconfig.js';

export default function InicioResponsable() {
  const [isPlaying, setIsPlaying] = useState(false);
  const userId = 1;

  const toggleSound = useCallback(async () => {
    try {
      const nuevoEstado = !isPlaying;

      await fetch(`${API_URL}/api/usuarios/${userId}/sonar`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isSonando: nuevoEstado }),
      });

      setIsPlaying(nuevoEstado);
    } catch (error) {
      console.log('Error al alternar sonido:', error);
    }
  }, [isPlaying]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BotonGeneral titulo="Telefono" imageSource={telImage} to="TelefResp" />
      <BotonGeneral titulo="Mapa" imageSource={mapImage} to="Mapa" />
      <BotonGeneral
        titulo={isPlaying ? "Detener Alarma" : "Activar Alarma"}
        imageSource={alarmImage}
        onPress={toggleSound}
      />
    </View>
  );
}
