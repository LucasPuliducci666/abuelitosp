import { View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Audio } from 'expo-av';
import BotonGeneral from '../componentes/BotonGeneral';
import TelefMayor from '../imagenes/telefono.png';
import MiBienestar from '../imagenes/abuelito.png';
import alarmImage from '../imagenes/alarma.png';
import Header from '../componentes/Header';
import ringtone from '../assets/ringtone.mp3';

export default function InicioMayor({ route }) {
  const { id_usuario } = route.params || {};
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(new Audio.Sound());
  const RESPONSABLE_ID = 1; // ID fijo del adulto responsable
  const API_URL = `http://192.168.0.162:3000/api/usuarios/${RESPONSABLE_ID}/sonar`;

  // 🔹 Configurar sonido y empezar a escuchar cambios
  useEffect(() => {
    let interval;

    const init = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
          shouldDuckAndroid: false,
        });

        await soundRef.current.loadAsync(ringtone, { isLooping: true });

        // Inicia la verificación periódica
        interval = setInterval(checkSonido, 3000);
      } catch (error) {
        console.log('Error iniciando sonido:', error);
      }
    };

    init();

    return () => {
      clearInterval(interval);
      soundRef.current.unloadAsync();
    };
  }, []);

  // 🔹 Consultar el estado del responsable
  const checkSonido = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();

      if (data.isSonando && !isPlaying) {
        await soundRef.current.playFromPositionAsync(0);
        setIsPlaying(true);
      } else if (!data.isSonando && isPlaying) {
        await soundRef.current.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log('Error verificando sonido:', error);
    }
  };

  // 🔹 Botón para detener manualmente el sonido
  const stopSound = async () => {
    try {
      await soundRef.current.pauseAsync();
      setIsPlaying(false);
    } catch (error) {
      console.log('Error deteniendo sonido:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <BotonGeneral
        titulo="Mi Bienestar"
        imageSource={MiBienestar}
        to="MiBienestar"
        params={{ id_usuario }}
      />
      <BotonGeneral
        titulo="Teléfono"
        imageSource={TelefMayor}
        to="TelefMayor"
      />
      {isPlaying && (
        <BotonGeneral
          titulo="Detener Alarma"
          imageSource={alarmImage}
          onPress={stopSound}
        />
      )}
    </View>
  );
}
