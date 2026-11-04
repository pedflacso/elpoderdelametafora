# Prueba integral de narración visual por capas

Archivo de revisión: `version-1-autoasistida/propuesta-capas.html`. Deriva de la prueba de metamorfosis; la versión principal y la prueba anterior permanecen intactas.

El contenido JSON, los audios, las notas personales y las decisiones de navegación se conservan. Se reutilizan los dibujos originales. Las ilustraciones nuevas en segundo plano son repeticiones decorativas, excluidas del árbol de accesibilidad.

## Escenas para revisar con el equipo

- Entrada: hilos negros que entran desde los bordes y las esquinas de la pantalla hasta formar la primera larva.
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

## Ajuste: pantallas opacas y lente de investigación

El vínculo posible se presenta en tres pantallas opacas superpuestas: Propósito, Actividad con sus apoyos y Retroalimentación. Al final se revela el esquema completo original y cierra la pregunta «¿Y si una metáfora nos ayudara a encontrar un modo de conectarlas?». Las copias de las pantallas son decorativas para evitar repetir la lectura en lectores de pantalla; el esquema original conserva el contenido accesible.

La investigación incorpora una lente con un esquema de documentos e hilos que cambia de foco al avanzar por las fases. Se conserva el contenido de cada fase; la lente es una representación visual, sin agregar datos al caso. Ambos caminos mantienen el fondo de investigación y superficies de color para los materiales.

Validación adicional: las tres pantallas no desbordan en escritorio; el esquema final y la pregunta se conservan; los hilos son negros; cambia el foco de la lente; no hay ciclos continuos de mutaciones; sin errores de JavaScript ni infracciones automáticas de contraste en el estado revisado. El diseño estático conserva el esquema completo en móvil y con movimiento reducido.

## Bocetos presentes durante cada etapa

Cada sección conserva tres apariciones decorativas del boceto original de su etapa, distribuidas a los costados y en un plano inferior, con distinta escala, inclinación y transparencia. El scroll desplaza y gira suavemente esas capas en direcciones diferentes; no sustituye ni altera las ilustraciones principales. Los bocetos también permanecen en móvil con menor intensidad. El movimiento reducido conserva los fondos estáticos. Se verificaron las fuentes por etapa, el desplazamiento al hacer scroll, los controles de movimiento, el contraste y la ausencia de desbordes y errores de JavaScript.

## Mini escenas de la conexión didáctica

Las tres pantallas conservan sus colores y textos. En lugar del montaje rojo, pequeñas escenas gráficas en verde y petróleo muestran Propósito → Actividad, los tres apoyos conectados con la actividad y el retorno desde Retroalimentación. El boceto permanece tenue detrás. Las líneas completas quedan visibles en un plano suave mientras el trazo de énfasis avanza con el scroll. Son escenas decorativas: no agregan contenido ni duplican la lectura accesible del esquema original.

## Caja del diseño con una acción visible

La caja aumenta de tamaño. Al abrirse, la tapa se levanta y seis componentes salen hacia los lados, conectados con el interior. Puede abrirse y cerrarse mediante el botón de texto o tocando la ilustración, que también funciona como botón accesible con teclado. Ambos controles sincronizan `aria-expanded`. La animación respeta el movimiento reducido y la decisión de volver a cerrar la caja. El contenido de las cuatro miradas se conserva.
