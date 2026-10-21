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
