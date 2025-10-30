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
  const userId = 1;

  const API_URL = `http://192.168.0.162:3000/api/usuarios/${userId}/sonar`;

  // 🔹 Cargar sonido y sincronizar estado con backend
  useEffect(() => {
    const init = async () => {
      try {
        // Configurar audio
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
          shouldDuckAndroid: false,
        });

        await soundRef.current.loadAsync(ringtone, { isLooping: true });
        setIsLoaded(true);

        // Obtener estado actual desde el backend
        const res = await fetch(API_URL);
        const data = await res.json();

        if (data.isSonando) {
          await soundRef.current.playFromPositionAsync(0);
          setIsPlaying(true);
        }
      } catch (error) {
        console.log('Error inicializando sonido:', error);
      }
    };

    init();

    return () => {
      soundRef.current.unloadAsync();
    };
  }, []);

  // 🔹 Cambiar estado en backend y reproducir/detener
  const toggleSound = useCallback(async () => {
    if (!isLoaded) return;

    try {
      const nuevoEstado = !isPlaying;

      // Actualizar en backend
      await fetch(API_URL, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isSonando: nuevoEstado }),
      });

      // Reproducir o detener localmente
      if (nuevoEstado) {
        await soundRef.current.playFromPositionAsync(0);
      } else {
        await soundRef.current.pauseAsync();
      }

      setIsPlaying(nuevoEstado);
    } catch (error) {
      console.log('Error al alternar sonido:', error);
    }
  }, [isPlaying, isLoaded]);

  // 🔹 Interfaz
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
