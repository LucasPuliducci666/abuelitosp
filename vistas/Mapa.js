import { useRef } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { WebView } from 'react-native-webview';

export default function Mapa() {
  const webviewRef = useRef(null);

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
      <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
      <style>
        body, html { margin: 0; padding: 0; height: 100%; }
        #map { width: 100%; height: 100%; }
      </style>
    </head>
    <body>
      <div id="map"></div>
      <script>
        // Inicializar mapa centrado en Buenos Aires
        var map = L.map('map').setView([-34.61, -58.38], 13);

        // Cargar tiles desde OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '© OpenStreetMap'
        }).addTo(map);

        // Agregar marcador inicial
        var marker = L.marker([-34.61, -58.38]).addTo(map)
          .bindPopup('¡Hola! Soy un marcador en Buenos Aires.')
          .openPopup();

        // Evento para agregar marcadores dinámicamente
        map.on('click', function(e) {
          var lat = e.latlng.lat;
          var lng = e.latlng.lng;

          // Crear un nuevo marcador
          L.marker([lat, lng]).addTo(map)
            .bindPopup("Nuevo marcador en:<br>Lat: " + lat.toFixed(5) + "<br>Lng: " + lng.toFixed(5))
            .openPopup();
        });
      </script>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
        <Text style={styles.text}>hola, bienvenido a la seccion de mapa</Text>
        <View style={styles.mapaStyle}>
            <WebView
                ref={webviewRef}
                originWhitelist={['*']}
                source={{ html: htmlContent }}
                style={{ flex: 1 }}
            />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1 ,
        height: 500,
        padding:15
    },
    mapaStyle:{
        width: '100%',
        height: 300,
        borderRadius: 12
    },
    text:{
        fontSize: 20,
        fontFamily: 'Times New Roma',
        marginBottom: 14
    }
});
