# El poder de la metáfora

Proyecto de scrollytelling educativo para un módulo sobre objetos de aprendizaje.

## Revisión autoasistida para ver y probar

La nueva revisión mantiene la entrada gradual de la versión 1 y añade orientación, ayudas opcionales, devolución y guardado local de notas. Ya incorpora los siete audios recibidos; los guiones de referencia necesitan cotejo con las grabaciones.

- [Boceto autoasistido](version-1-autoasistida/index.html).
- [Instrucciones y alcance del guardado](version-1-autoasistida/README.md).
- [Descargar ZIP de esta revisión](descargas/metafora-version-1-autoasistida.zip).

Para verlo, descargá el ZIP desde GitHub, descomprimilo y abrí `index.html`. La rama `gh-pages` se prepara para publicación web. Su existencia no confirma que GitHub Pages esté activado: ver las instrucciones de publicación.

## Base elegida para continuar

La **versión 1** comienza por las partes del OA y el marco conceptual. El caso aparece después. Esta es la base elegida para los próximos ajustes; se conserva sin modificaciones en su propia carpeta.

- [Versión 1 conservada](version-1/index.html).
- [Instrucciones de la versión 1](version-1/README.md).
- [Descargar la versión 1 en ZIP](descargas/metafora-version-1-conservada.zip).

La revisión autoasistida disponible arriba trabaja la orientación, la presentación del caso y la integración del marco conceptual, manteniendo esa ubicación del caso. Esta carpeta conserva el punto de partida sin cambios.

## Alternativa conservada

La **versión 2** comienza por el caso. Sigue guardada para comparar, pero no es la base elegida.

- [Versión 2 en un HTML autónomo](version-2/index.html).
- [Versión 2 con HTML, CSS y JavaScript separados](version-2-copiable/).
- [Guía de audios de la versión 2](documentacion/Guiones_audio_metafora_version_2.md).
- [Guía de audios de la versión 2 en Word](documentacion/Guiones_audio_metafora_version_2.docx).
- [ZIP de la versión 2 y su guía](descargas/metafora-version-2-para-compartir.zip).

Para guardar una copia en tu computadora, usá **Code → Download ZIP**, descomprimí el archivo y abrí `version-1/index.html`. GitHub muestra el código de los HTML; todavía no hay un sitio publicado con GitHub Pages.

Los audios y los enlaces del aula siguen pendientes. La guía de audios de la versión 2 deberá revisarse para la narración de la versión 1 antes de grabar. Ninguna versión tiene seguimiento SCORM. Las notas del estudiante solo duran durante la sesión y pueden descargarse.

## Documentación de la primera versión

El prototipo original se conserva en `version-1/index.html`. El `index.html` de la raíz dirige al boceto autoasistido actual. La documentación siguiente corresponde a esa primera versión del recorrido completo.

---

# El poder de la metáfora — recorrido completo para revisar

Prototipo de las nueve escenas: entrada y Larva, marco conceptual en Crisálida, caso y bifurcación en Eclosión, dos ramas de investigación, reencuentro, Mariposa, prueba de consistencia y transferencia al propio OA. HTML/CSS/JavaScript sin dependencias externas; visuales SVG originales.

## Abrir y editar

Abrí `index.html` en un navegador actual. No requiere instalación ni compilación. Alternativa: desde esta carpeta, ejecutá `python3 -m http.server 8000` y usá el servidor local.

Los textos principales y las rutas de audio están en el bloque JSON `script` con `id="contenido"`. Conservá las comillas, las comas y los identificadores. Los rótulos estructurales breves y las etiquetas de algunos SVG están en las plantillas de JavaScript. No hay módulos ni peticiones a servicios remotos.

Para incorporar audios, creá `audio/`, copiá los archivos y completá las rutas relativas, por ejemplo `audio/caso.mp3`. Hay campos para bienvenida, momentos conceptuales, caso y testimonios. Los campos están vacíos: las grabaciones reales no fueron recibidas ni verificadas. Si cambia el audio, actualizá el texto que funciona como transcripción. No hay reproducción automática.

El mapa editorial está en `MAPA_CONTENIDOS.md`: muestra correspondencia con la certificación y el guion de 29 filminas, referencias recuperadas, decisiones y límites.

## Actividades y respuestas

- Podcast: secuencia de voces con pausas, evidencias consultables, anotación de relaciones, arquitectura del episodio y explicación.
- Artefacto: consulta libre, nota de relación antes de abrir lecturas posibles, fichas seleccionables en tres zonas y explicación.
- Las notas, selecciones y explicaciones se conservan al cambiar de camino mientras la página esté abierta. Se pierde todo al recargar: no se envía nada a Moodle ni a un servidor.
- Las fichas admiten varias zonas. No hay puntuación ni corrección automática.
- La reconstrucción se revela solo por un botón, nunca por scroll.
- Comparación de los dos caminos, conexiones del propio módulo, dos situaciones al retirar la metáfora y reflexión crítica sobre la metamorfosis.
- Transferencia: necesidad inicial y elección de hipótesis o alternativa sin metáfora. Las dos opciones tienen igual peso. Se conservan sus textos al alternar.
- Copia de la decisión y descarga de notas en un archivo de texto. El botón de copia ofrece selección manual cuando el navegador impide usar el portapapeles.
- Respeto de movimiento reducido y control manual adicional. SVG con descripciones, formularios etiquetados, orden de lectura y controles nativos accesibles por teclado.

## Moodle

1. Agregá un recurso **Archivo**.
2. Subí `metafora-recorrido-completo-moodle.zip` y descomprimilo dentro del recurso.
3. Elegí `index.html` como archivo principal.
4. Una ventana nueva evita doble scroll. Si preferís incrustación, probala con el tema y dispositivos del campus.
5. Revisá con rol de estudiante. Para usar los enlaces reales, completá `transfer.urls.bitacora` y `transfer.urls.aula` en el JSON antes de subir el ZIP. Si están vacíos no se muestran enlaces ficticios.

Incluí los audios en el ZIP conservando las carpetas. No pegues todo el HTML en el editor de Moodle: puede filtrar scripts.

Este es un paquete **HTML, no SCORM**. No comunica finalización, calificaciones ni respuestas al campus. El montaje real y los enlaces requieren prueba en la versión/configuración de Moodle usada por el curso. El seguimiento se definirá aparte si se necesita.

## Verificación y límites

Pruebas funcionales en Chromium por servidor local para ambos caminos y el recorrido completo, ancho móvil, movimiento reducido, comparación, conexiones, selección de fichas, transferencia y exportación de notas. No equivale a una auditoría completa de accesibilidad.

El navegador automatizado del entorno bloquea `file://`; la apertura por doble clic está prevista por la estructura autónoma, pero no fue validada aquí. Pendientes: audios reales, otros navegadores, lector de pantalla, montaje Moodle, datos bibliográficos completos y prueba de duración/comprensión con estudiantes.

Este prototipo permite revisar todo el recorrido; no se considera producto final.

## Ver el boceto con un enlace web

La rama `gh-pages` contiene la revisión autoasistida en su raíz, con los audios. Para activar GitHub Pages, una persona con permisos de configuración debe entrar en **Settings → Pages**, elegir **Deploy from a branch**, seleccionar **gh-pages**, carpeta **/ (root)** y guardar.

Cuando GitHub termine de publicar, el sitio corresponde a `https://pedflacso.github.io/elpoderdelametafora/`. No se debe confundir preparar esta rama con verificar una publicación exitosa.

Los cambios futuros en la carpeta de trabajo deberán volver a actualizar la rama de publicación. Las versiones anteriores se conservan en `main`. El ZIP incluye MP3 para distribuir; los originales M4A también se conservan en el repositorio.

## Kit de herramientas para llevar al foro

Propuesta de guía en tres páginas, con la paleta violeta y dos alternativas de diseño al mismo nivel.

- [PDF rellenable para completar y guardar](descargas/Kit_del_caso_a_tu_objeto_rellenable.pdf).
- [PDF para imprimir](descargas/Kit_del_caso_a_tu_objeto.pdf).
- [Word editable](descargas/Kit_del_caso_a_tu_objeto.docx).
- [Contenido e indicaciones](documentacion/kit-metafora/).


## Dos trayectorias de cursada

Propuesta con inicio el 14/04/2026: certificación completa de 20 semanas y recorrido por módulos con base común de 6 semanas y elección entre Podcast, Streaming y Simulaciones.

- [Árbol y cronogramas](version-1-autoasistida/trayectorias/index.html).
- [Cronograma editable en Excel](version-1-autoasistida/trayectorias/Cronograma_trayectorias_OA.xlsx).
- [Fundamentos y criterios de planificación](documentacion/trayectorias/PROPUESTA.md).
