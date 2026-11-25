# Eclosión: investigación única desde el podcast

La versión vigente usa un solo entorno para investigar el caso de la Licenciada Martínez. La escucha organiza la secuencia, acompañada por versiones escritas de los testimonios. Se retiraron la elección entre Podcast y Artefacto, los enlaces para cambiar de camino, la bifurcación del mapa de orientación y la comparación entre ambos formatos. La síntesis posterior vuelve sobre las decisiones de diseño del podcast.

## Simulación por scroll

`version-1-autoasistida/caso-podcast.js` presenta un continuo con siete tramos:

1. El testimonio de María.
2. El trabajo práctico completo: fuente periodística, consigna, producción, criterios de evaluación y buzón de entrega.
3. La perspectiva de la Licenciada Martínez.
4. El aula Moodle y los materiales visibles, sin la guía requerida por la actividad.
5. La experiencia de Marcos.
6. El registro del caso.
7. La revisión de la hipótesis.

La barra horizontal se reemplazó por un índice vertical. Marca el tramo visible y ofrece enlaces opcionales para volver a un punto. No hay que pulsar controles para descubrir pantallas, testimonios o documentos. El contenido no se oculta por animación: permanece disponible para lectura, teclado y tecnologías de asistencia. Los audios no se reproducen automáticamente.

La simulación conserva la diferencia entre aula, objeto y documento. Las dos secuencias del registro describen experiencias de estudiantes dentro del caso: no son dos opciones de navegación para el cursante.

## Notas y compatibilidad

La investigación se abre automáticamente como Podcast, también al recuperar un punto de retorno antiguo. No se borraron las notas del antiguo camino Artefacto. Si la explicación o la relación del Podcast están vacías, se recupera allí el texto equivalente de ese camino. La copia histórica sigue disponible en la lectura conjunta y la descarga. El cuaderno no ofrece un segundo camino de escritura.

Se mantiene el guardado local y la descarga, sin acceso por correo ni conexión activa con Supabase.

## Prueba de navegador

La prueba `documentacion/pruebas/eclosion-podcast.cjs` requiere Playwright y Chromium. Con el sitio servido desde `version-1-autoasistida` en el puerto 3000:

```sh
CHROMIUM_PATH=/usr/bin/chromium node documentacion/pruebas/eclosion-podcast.cjs
```

Se puede cambiar la dirección con `TEST_BASE_URL` y usar el Chromium instalado por Playwright omitiendo `CHROMIUM_PATH`. La prueba cubre escritorio, tableta y móvil, movimiento reducido, todos los contenidos sin clics de navegación, ausencia de desbordamiento horizontal, reproducción manual, persistencia y recuperación de notas anteriores.

## Controles simulados y acciones reales

Los elementos representados dentro del aula y del OA son textos pequeños y atenuados, sin borde de botón ni marca «Simulado». No son enlaces ni paradas de teclado. El contenido correspondiente permanece disponible al seguir bajando. Los audios, el enlace a la fuente periodística, la salida y la revisión de la hipótesis son acciones reales. El índice vertical sigue funcionando como acceso opcional a los tramos.

## Trabajo práctico: Confiabilidad y validez de fuentes

La actividad aprobada para nivel superior pide seleccionar dos fuentes sobre IA y educación de la Guía de análisis, comparar su autoría, afirmaciones, evidencias, coincidencias, diferencias y límites, y fundamentar la confiabilidad de las fuentes y la validez de sus afirmaciones. La entrega solicitada es un texto de 800 a 1.000 palabras en PDF o DOCX, en el buzón del aula representada.

La guía contiene, según la consigna, tanto las fuentes como los criterios para contrastarlas. No se muestra la guía ni se ofrecen las fuentes por separado en el aula representada. Se retiraron el fragmento periodístico anterior, su enlace y el documento antes incorporado a Materiales. El buzón representa una actividad del caso y no recibe archivos reales de quien recorre el módulo.

Los audios y sus testimonios se conservan sin cambios. La reconstrucción distingue lo que dicen la docente y Marcos de los accesos que efectivamente muestra el escenario. La guía mencionada constituye un indicio del recurso necesario y de su ausencia, no un documento que se haya leído.
