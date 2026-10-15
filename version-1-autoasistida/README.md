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

Los enlaces se editan en `transfer.urls` del bloque JSON. Los audios siguen pendientes. Los guiones anteriores, especialmente la presentación del caso, deben revisarse antes de grabar: corresponden a versiones previas. Los controles nunca inician audio automáticamente.

## Validación realizada

Pruebas funcionales con Chromium por servidor local. Orden gradual, dos ramas, ayudas sin revelar la respuesta, recuperación tras recarga de textos y elecciones de ambas ramas, fichas, transferencia A/B, botón de retorno, exportación, cancelación y confirmación del borrado, almacenamiento denegado y copia incompatible, ancho de 360 px y movimiento reducido.

El navegador automatizado de este entorno no admite `file://`: la apertura por doble clic se prevé por la estructura autónoma, pero no está validada aquí. Pendientes: otros navegadores, lector de pantalla, campus real, duración y comprensión con estudiantes. No se presenta como producto final ni como accesibilidad auditada.
