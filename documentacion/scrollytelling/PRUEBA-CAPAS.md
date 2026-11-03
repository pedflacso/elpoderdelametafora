# Prueba integral de narración visual por capas

Archivo de revisión: `version-1-autoasistida/propuesta-capas.html`. Deriva de la prueba de metamorfosis; la versión principal y la prueba anterior permanecen intactas.

El contenido JSON, los audios, las notas personales y las decisiones de navegación se conservan. Se reutilizan los dibujos originales. Las ilustraciones nuevas en segundo plano son repeticiones decorativas, excluidas del árbol de accesibilidad.

## Escenas para revisar con el equipo

- Entrada: hilos que construyen una crisálida a pantalla completa.
- Larva: seis conexiones que se despliegan y composición completa al final.
- Crisálida: ilustración persistente con desplazamientos, conexiones y recuadros de diseño; ejemplos de lenguaje opcionales.
- Lectura conceptual: los dibujos permanecen detrás de recuadros casi opacos.
- Caso: Actividad y Guía acompañan la presentación y la primera interpretación. La escena queda limitada a ese tramo para evitar superposiciones con la caja.
- Caja negra: caja persistente, apertura al entrar en la escena, componentes y cuatro miradas sucesivas. El botón permite volver a cerrarla; no se reabre contra esa decisión.
- Investigación: la pregunta de revisión permanece mientras pasan las cuatro fases.
- Podcast: pregunta persistente y voces en primer plano. La reproducción sigue siendo voluntaria.
- Comparación de voz y evidencia: dos superficies con desplazamientos y profundidad; los controles conservan su funcionamiento.
- Seleccionar, relacionar y disponer: las mismas cuatro piezas cambian de disposición mientras los recuadros se apilan. No se altera el orden editorial del módulo.
- Mariposa: conserva su composición e interacciones aprobadas. El cierre añade un desplazamiento leve de la ilustración.

## Adaptación

Por debajo de 1000 px las escenas nuevas recuperan la lectura normal y las composiciones estáticas. El inicio y las seis relaciones conservan el comportamiento adaptativo de la prueba anterior. El control de movimiento y la preferencia del sistema desactivan los desplazamientos.

## Validación

Playwright/Chromium: ambas rutas, voz/evidencia, apertura de caja, tres disposiciones de materiales, movimiento reducido, sin errores de JavaScript, sin desbordes de 320 a 1440 px. Auditoría automática de contraste sin infracciones en el estado revisado. Comparación del JSON editorial: idéntico a la prueba anterior.

Para la revisión: observar ritmo, duración de cada escena, cantidad de capas simultáneas y si los movimientos ayudan a comprender las relaciones.
