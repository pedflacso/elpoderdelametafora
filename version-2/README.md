# El poder de la metáfora. Segunda versión para revisar

Esta versión rediseña la experiencia completa. La primera versión queda intacta en la carpeta superior.

El recorrido empieza por el caso y una primera interpretación. El marco conceptual acompaña la búsqueda. Luego se elige entre una secuencia de voces y evidencias o una mesa para explorar y comparar piezas. Al volver, la persona recupera su primera interpretación, ensaya una explicación y puede compararla con una lectura posible. Odetti permite reconocer el diseño de las dos experiencias. Finalmente se revisa el trabajo de la metáfora y se ensaya una decisión para el propio OA.

Se concentran las producciones en tres momentos conectados. Las preguntas intermedias no exigen escribir. La exploración no anticipa una relación preparada entre cada par de evidencias. La retroalimentación ayuda a revisar, sin calificar.

## Abrir y editar

Abrí `index.html` en un navegador actual. No hay dependencias externas ni compilación. Alternativa desde esta carpeta: `python3 -m http.server 8000`.

Los textos principales están en el bloque JSON con `id="contenido"`. Conservá los identificadores y la sintaxis. Algunos rótulos cortos de interfaz y SVG se encuentran en las plantillas de JavaScript. Hay comentarios en español en la lógica.

Para agregar grabaciones, creá `audio/` y completá las rutas relativas en `case.audio` y `voices[].audio`. Actualizá también las transcripciones si cambia el audio. La voz de escucha se representa por pasos navegables; no se incorpora una narración sonora nueva ni voces sintéticas. Los archivos reales están pendientes.

## Moodle

Subí el ZIP como recurso Archivo, descomprimilo y elegí `index.html` como archivo principal. Incluí los audios y conservá sus rutas al crear nuevos ZIP. Una ventana nueva evita doble scroll. Probá la incrustación con el tema real del campus si la necesitás.

Los enlaces de Bitácora y aula se configuran en `transfer.urls.bitacora` y `transfer.urls.aula`. Mientras estén vacíos no aparecen destinos ficticios. No pegues el HTML completo en el editor de Moodle, que puede filtrar scripts.

No es SCORM. No comunica finalización ni respuestas a Moodle. Las notas solo duran mientras la página está abierta. Copia y descarga permiten llevar la decisión a la actividad del aula.

## Referencias y decisiones editoriales

Aristóteles y la etimología acompañan la relación entre dos ámbitos. Lakoff y Johnson ayudan a pensar la investigación como organización de la experiencia. Odetti aparece después de experimentar los caminos, con la redacción aprobada sobre autor-curador. Borges queda como profundización opcional. No se inventan citas ni fichas bibliográficas. Las síntesis provienen de los guiones compartidos.

La etimología «traslado» no se presenta como una traducción literal del caso a una investigación académica. La mesa reúne evidencias del mismo caso. No se inventan cantidades, criterios de la guía ni capturas reales.

La metamorfosis conserva las mismas seis formas en los estados. Las conexiones se iluminan con explicaciones de lo que representan; el usuario puede juzgar si esa imagen le resultó útil. Las dos situaciones de quitar la metáfora son modelos hipotéticos, no una retirada funcional de todo el módulo.

## Validación y pendientes

Pruebas funcionales en Chromium mediante servidor local. Se verifican ambos caminos, pasos del podcast, consulta de piezas, mesa de dos piezas con reemplazo, recuperación de la primera interpretación, selección de apoyos, revelado manual, conservación de notas, transferencia A/B, descarga, alternativa de copia manual, ancho móvil y movimiento reducido.

Pendientes: grabaciones reales, fichas bibliográficas, prueba en Moodle, otros navegadores, lector de pantalla y prueba con estudiantes. No se afirma una duración de 5–10 minutos sin medirla. El entorno automatizado bloquea la apertura `file://`; la estructura autónoma está preparada para doble clic, pero esa modalidad no se valida aquí.
