import { View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Audio } from 'expo-av';
import BotonGeneral from '../componentes/BotonGeneral';
import TelefMayor from '../imagenes/telefono.png';
import MiBienestar from '../imagenes/abuelito.png';
import alarmImage from '../imagenes/alarma.png';
import ringtone from '../assets/ringtone.mp3';
import { API_URL } from '../apiconfig.js';

export default function InicioMayor({ route }) {
  const { id_usuario } = route.params || {};
  const [isPlaying, setIsPlaying] = useState(false);
  const soundRef = useRef(null);
  const RESPONSABLE_ID = 1;

  useEffect(() => {
    let interval;
    let isMounted = true;

    const init = async () => {
      try {
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
          playsInSilentModeIOS: true,
          staysActiveInBackground: true,
          shouldDuckAndroid: false,
        });

        const sound = new Audio.Sound();
        await sound.loadAsync(ringtone, { isLooping: true });
        soundRef.current = sound;

        interval = setInterval(() => {
          if (isMounted) checkSonido();
        }, 5000);

        checkSonido();
      } catch (error) {
        console.log('Error iniciando sonido:', error);
      }
    };

    init();

    return () => {
      isMounted = false;
      clearInterval(interval);
      if (soundRef.current) soundRef.current.unloadAsync();
    };
  }, []);

  const checkSonido = async () => {
    try {
      const res = await fetch(`${API_URL}/api/usuarios/${RESPONSABLE_ID}/sonar`);
      const data = await res.json();

      if (data.isSonando && !isPlaying) {
        await soundRef.current.playFromPositionAsync(0);
        setIsPlaying(true);
      }
      else if (!data.isSonando && isPlaying) {
        await soundRef.current.pauseAsync();
        setIsPlaying(false);
      }
    } catch (error) {
      console.log('Error verificando sonido:', error);
    }
  };

  const stopSound = async () => {
    try {
      await soundRef.current.pauseAsync();
      setIsPlaying(false);

      await fetch(`${API_URL}/api/usuarios/${RESPONSABLE_ID}/sonar`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isSonando: false }),
      });

      console.log('Alarma detenida manualmente y campo actualizado');
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