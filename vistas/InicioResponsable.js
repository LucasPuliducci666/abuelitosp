import { View } from 'react-native';
import { Audio } from "expo-av";
import { useEffect, useRef, useState, useCallback } from 'react';
import BotonGeneral from '../componentes/BotonGeneral';
import telImage from '../imagenes/telefono.png'; 
import mapImage from '../imagenes/mapa.png'; 
import alarmImage from '../imagenes/alarma.png'; 
import ringtone from '../assets/ringtone.mp3';

export default function InicioResponsable() {
  const soundRef = useRef(new Audio.Sound());
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  // 🔹 Cargar el sonido una sola vez al montar el componente
  useEffect(() => {
    const loadSound = async () => {
      try {
        await soundRef.current.loadAsync(ringtone);
        setIsLoaded(true);
      } catch (error) {
        console.log('Error cargando sonido:', error);
      }
    };
    loadSound();

    return () => {
      soundRef.current.unloadAsync();
    };
  }, []);

  // 🔹 Función para reproducir o pausar el sonido
  const toggleSound = useCallback(async () => {
    if (!isLoaded) {
      console.log('El sonido aún no está cargado.');
      return;
    }

    try {
      const status = await soundRef.current.getStatusAsync();

      if (status.isPlaying) {
        // 🔸 Si está reproduciendo, pausamos
        await soundRef.current.pauseAsync();
        setIsPlaying(false);
      } else {
        // 🔸 Si está pausado o detenido, reproducimos
        await soundRef.current.replayAsync();
        setIsPlaying(true);
      }

    } catch (error) {
      console.log('Error controlando sonido:', error);
    }
  }, [isLoaded]);

  // 🔹 UI
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BotonGeneral titulo="Telefono" imageSource={telImage} to="TelefResp" />
      <BotonGeneral titulo="Mapa" imageSource={mapImage} to="Mapa" />
      <BotonGeneral 
        titulo={isPlaying ? "Detener Alarma" : "Alarma"} 
        imageSource={alarmImage} 
        onPress={toggleSound}
      />
    </View>
  );
}
