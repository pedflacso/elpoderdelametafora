# Versión 1. Revisión para un curso autoasistido

Esta es una copia de trabajo de la versión 1. Conserva la entrada por las partes del OA y el marco conceptual. El caso aparece después. La carpeta `version-1` sigue intacta como referencia.

## Ver el boceto

Descargá `descargas/metafora-version-1-autoasistida.zip` desde GitHub, descomprimilo y abrí `index.html` en un navegador actual. No necesita instalación ni conexión para leer los textos. Alternativamente, descargá el repositorio completo y abrí `version-1-autoasistida/index.html`.

GitHub muestra el código HTML; guardar el proyecto en el repositorio no publica un sitio web. No se activó GitHub Pages.

## Qué cambió

- Bienvenida con mapa de los cuatro momentos y explicación de lo que se lleva a la Bitácora.
- Distinción entre preguntas para pensar, notas opcionales y producción final.
- Caso presentado después del marco conceptual, con una primera interpretación que se puede revisar al investigar.
- Pistas opcionales en dos niveles, antes de consultar la reconstrucción.
- Invitación a comparar las evidencias de la propia explicación con la lectura posible. No se simula una corrección automática.
- Notas intermedias en desplegables opcionales, sin bloquear el avance.
- Odetti en el reencuentro para reconocer las decisiones de selección, relación y disposición. Borges como profundización opcional en Crisálida. Se conservan etimología, Aristóteles y Lakoff y Johnson.
- Ayuda final para revisar si la decisión sobre el propio OA aporta a una relación o acción y cómo podría ponerse a prueba.

## Guardado de notas del estudiante

El navegador guarda automáticamente las notas, el camino elegido, las evidencias consultadas, las fichas seleccionadas, ambas opciones de transferencia y un punto de retorno. El estado se informa en la bienvenida. Hay controles para guardar en ese momento, retomar, descargar y borrar la copia local con confirmación.

Se usa exclusivamente la clave `metafora-v1-autoasistida-v1` de `localStorage`. No se borran otros datos del navegador. Las respuestas no se envían a GitHub ni a Moodle. Visitar una sección no cuenta como completar una actividad.

El guardado depende del navegador, perfil, dispositivo y dirección desde donde se abre. No sincroniza dispositivos. Mover el HTML, cambiar de dirección, borrar datos del navegador o usar una sesión privada puede impedir recuperar la copia. Conviene descargar las notas; evitá editar a la vez en varias pestañas. Si no se permite almacenamiento, el recorrido funciona y avisa que hay que descargar antes de salir.

Si aparece una copia incompatible o dañada, no se reemplaza automáticamente: se ofrece descargarla para recuperar o borrarla explícitamente. La función no es una copia de seguridad en la nube ni una entrega en Moodle.

## Moodle y audios

El ZIP puede subirse como recurso Archivo, descomprimirse y seleccionar `index.html` como principal. Hay que verificar la presentación en el campus real; no se realizó esa prueba. No es SCORM y no informa finalización ni calificación.

Los enlaces se editan en `transfer.urls` del bloque JSON. Se incorporaron siete grabaciones: bienvenida, Crisálida, autor-curador, caso y tres testimonios. Hay copias MP3 mono de 64 kb/s para la web y los M4A originales se conservan en `audio/originales/`. Los controles no inician audio automáticamente. El audio del caso se ofrece completo de forma opcional y el texto conserva la presentación por partes. Las locuciones de continuidad de la guía anterior no se incorporan porque no fueron recibidas.

Los textos actuales se identifican como guiones de referencia, no como transcripciones verificadas. Se intentó preparar un reconocimiento local, pero la descarga del modelo fue bloqueada por la red. No se cotejó palabra por palabra lo grabado y no se afirma que sean transcripciones literales. Es una revisión pendiente para completar la alternativa textual accesible.

## Validación realizada

Pruebas funcionales con Chromium por servidor local. Orden gradual, dos ramas, ayudas sin revelar la respuesta, recuperación tras recarga de textos y elecciones de ambas ramas, fichas, transferencia A/B, botón de retorno, exportación, cancelación y confirmación del borrado, almacenamiento denegado y copia incompatible, ancho de 360 px y movimiento reducido.

El navegador automatizado de este entorno no admite `file://`: la apertura por doble clic se prevé por la estructura autónoma, pero no está validada aquí. Pendientes: otros navegadores, lector de pantalla, campus real, duración y comprensión con estudiantes. No se presenta como producto final ni como accesibilidad auditada.

## Pruebas de audio

Los siete archivos se decodificaron con FFmpeg. En Chromium se cargaron las siete fuentes MP3 y se verificó reproducción real, exclusión entre reproductores, pausa al cambiar de rama, reutilización del testimonio en exploración, ausencia de autoplay, persistencia de notas y ancho móvil. La duración y el peso de cada pieza están en `audio/manifest.json`. No se evaluó editorialmente la locución mediante escucha humana.

## Revisión de desplegables

Los textos breves se muestran directamente: las seis definiciones de componentes, seleccionar/relacionar/disponer, las cuatro preguntas de la caja negra, la arquitectura del episodio, las funciones de la metáfora, las preguntas de consistencia, la primera interpretación y la ayuda para revisar la decisión. Las referencias conservan un acceso opcional común, con sus textos internos visibles al abrirlo.

Se conservan los desplegables de pistas, lecturas posibles, notas opcionales, guiones largos y administración de datos. La reconstrucción continúa requiriendo una decisión explícita. Los textos del bloque de contenido y los siete audios son los mismos. La clave de guardado local se conserva para recuperar las notas existentes.

Se verificaron visibilidad de textos breves, pistas sin revelar, ambas ramas, persistencia, audios y ancho móvil de 360 px. Antes de elegir camino, los desplegables del documento pasan de 34 a 8; con el podcast abierto, de 43 a 12. No se verificó desde este entorno la publicación web de GitHub Pages.

## Referencias APA

El contenido incorpora citas de autor y año junto a las paráfrasis, y el cierre incluye las cuatro referencias completas con títulos en cursiva, orden alfabético y sangría francesa. Los datos bibliográficos provienen de las ediciones indicadas por la autora del curso. La bibliografía también está en `REFERENCIAS.md`. La cita de Lakoff y Johnson utiliza 1980/2004 para distinguir obra original y traducción. Este cambio no modifica las grabaciones.

## Paleta visual

Fondo `#f4f4fb`, predominante `#7c74b5`, detalles `#dc5429` y texto `#132d48`. Los paneles y segmentos usan tonos suaves derivados del violeta. El naranja identifica detalles, marcas de foco y líneas de énfasis.

Para los botones con texto blanco se utiliza el violeta oscuro derivado `#5b538e`: el predominante exacto sobre blanco no alcanza 4,5:1 para texto pequeño. El texto principal presenta contraste aproximado 12,82:1 sobre el fondo; los controles seleccionados, 6,83:1. Esto no equivale a una auditoría completa de accesibilidad. Se comprobaron ambas ramas, conservación de los siete audios, ausencia de cambios en el contenido y ancho móvil de 360 px.

## Tipografía

Se aplica Roboto a títulos, textos, controles y rótulos SVG. Las fuentes normal y cursiva, con pesos variables, están incluidas en `fonts/` con su licencia SIL OFL. El ZIP contiene estas fuentes para que no dependa de Google Fonts ni de una instalación en el equipo. Se verificó su carga local en Chromium, sus estilos y el ancho móvil.

## Lienzo por etapa

El fondo general es `#f3f4fb` en Larva, `#b9b4da` en Crisálida, `#8a85bf` en Eclosión y `#7c74b5` en Mariposa. Se ve a todo el ancho y detrás de los textos. Se retiraron los paneles grandes claros; las tarjetas de contenido son transparentes y las superficies gráficas usan transparencia.

El texto conserva `#132d48` en Larva y Crisálida. En Eclosión y Mariposa usa una variante azul más profunda, `#04101c`, para alcanzar contraste de texto normal (aproximadamente 5,65:1 y 4,58:1). Roboto, los audios y la clave de guardado se mantienen.

## Mapa del recorrido

Se retiró el bloque «¿Qué pasa si la quitamos?», sus dos situaciones y «Una prueba de consistencia». El apartado «Apliquemos la prueba a este recorrido» se reemplazó por «Mapa del recorrido»: los cuatro estados visuales, una síntesis breve y enlaces para volver a cada momento. Una nota antigua guardada en `self-note` se conserva al descargar notas, aunque su campo ya no aparezca en pantalla.

## Acceso desde la raíz

El `index.html` de la raíz de `main` dirige al boceto actual en `version-1-autoasistida/index.html`. La rama `gh-pages` mantiene el boceto en su propia raíz. Esto permite acceder a la versión actual si Pages usa cualquiera de esas dos raíces. No se pudo consultar la configuración ni el sitio público desde el entorno por un bloqueo de red; no se afirma qué fuente está seleccionada actualmente. La versión 1 original permanece en su carpeta.

Se probaron el acceso raíz, los cuatro colores y el contraste directo de texto, la retirada de los bloques, los cuatro enlaces del mapa, las ramas, los siete audios presentes, recuperación y exportación de notas previas y ancho móvil.

## Revisión de lectura en fondos oscuros

Eclosión y Mariposa usan texto blanco sobre variantes más profundas del violeta base: `#70699e` y `#635b98`. Los contrastes aproximados son 5:1 y 6,03:1. Es un ajuste deliberado del color efectivo del lienzo: blanco sobre los colores anteriores no alcanzaba 4,5:1 para texto normal. Larva y Crisálida mantienen sus colores y texto azul.

Los recuadros que antes aclaraban el fondo usan ahora una transparencia oscura para mantener legible el texto blanco. Los campos de escritura y las etiquetas sobre fondos claros conservan texto `#132d48`. Se comprobaron muestras de títulos, párrafos, notas pequeñas, pies de gráficos, enlaces, botones y campos con al menos 4,5:1; esto no reemplaza una auditoría completa de accesibilidad. También se verificaron ambas ramas, recuperación de notas, ancho de 360 px y preferencia de movimiento reducido.
