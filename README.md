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

## Ajuste de Eclosión

Eclosión vuelve al fondo original `#8a85bf` y usa texto negro `#000000`, incluidos sus párrafos, títulos y notas. Mariposa conserva el texto blanco sobre `#635b98`. Las inversiones de color de botones seleccionados se mantienen para su legibilidad. Se verificaron los cuatro tramos de Eclosión, los tres de Mariposa, la rama podcast, los siete audios y ancho móvil.

## Colores de apoyo según la referencia

Los círculos se interpretan como colores de recuadros y gráficos, no como colores obligatorios de fuente. Apoyos: Larva `#7c74b5`, Crisálida `#8a85bf`, Eclosión `#b9b4da` y Mariposa `#f3f4fb`. Se aplican a tarjetas, gráficos, evidencias, notas y ayudas, manteniendo visible el lienzo de la etapa.

Cada superficie define su propio color de texto: negro en los apoyos violetas/lilas, azul `#132d48` en los casi blancos. Mariposa conserva blanco en el texto directo del lienzo y cambia a azul dentro de recuadros claros. Los botones seleccionados conservan su inversión legible. Se verificaron muestras con contraste de al menos 4,5:1, estados seleccionados y hover, las dos ramas, persistencia y ancho móvil.


### Guía para compartir en el foro

«Del caso a tu objeto» ofrece la plantilla en PDF rellenable y Word editable, incluida en `descargas/`. Reemplaza los campos de esa sección. Las respuestas guardadas en versiones anteriores siguen disponibles al descargar las notas desde el inicio. Los enlaces a Moodle se incorporarán más adelante.


### Pausas y descarga de notas

Larva invita a observar sin escritura. La asociación en Crisálida y las notas de relación son opcionales. El caso conserva la interpretación inicial y una explicación posterior que integra la revisión de esa primera idea, sin una segunda respuesta de metarreflexión. La bienvenida explica estas posibilidades. Al final se descargan solo respuestas no vacías y zonas con piezas seleccionadas, identificadas por consigna y camino. Se preservan también las respuestas antiguas, aunque sus campos ya no se muestren. La plantilla para el foro sigue siendo independiente.


### Consulta bibliográfica de Lakoff y Johnson

Las menciones a Lakoff y Johnson en Crisálida y en las referencias abren una ventana con la referencia APA y el enlace editorial a *Metáforas de la vida cotidiana*. El enlace abre Cátedra en otra pestaña. La ventana admite teclado, cierre con Escape y devolución del foco a la mención que la abrió. Los textos y el enlace se editan en `bibliographyPopup`, dentro del bloque JSON del HTML. Se comprobaron apertura, cierre y recuperación del foco en Chromium con ancho móvil.


### Odetti y entrega de la plantilla

La mención a Odetti en el reencuentro y su entrada en las referencias abren la referencia bibliográfica con enlace a PENT FLACSO, mediante la misma ventana accesible de Lakoff y Johnson. La actividad final consiste en descargar la plantilla, completarla y compartir el archivo en el foro; no requiere una respuesta adicional. Los enlaces a Moodle siguen pendientes.


### Separación entre entregable y foro

La plantilla completada se presenta como entregable en el espacio de entrega del aula. El foro tiene otra dinámica: intercambiar metáforas que les estudiantes están pensando para sus contenidos. El equipo prevé abrirlo con un audio sobre la metáfora de este módulo y otro ejemplo sobre IA y micelio. Esas piezas van directamente en el foro, no en el scrollytelling. No se incorporaron audios ni enlaces ficticios. Esta definición reemplaza las indicaciones anteriores de subir la plantilla al foro. Los PDF y Word también actualizan el título del último apartado a «Revisá tu decisión antes de entregar».


### Reemplazo de voces por grabaciones finales

Se incorporaron los MP3 finales recibidos de Estudiante 1, Docente y Estudiante 2 en las voces del caso. Se conservan los archivos originales recibidos sin recodificación, con nombres nuevos para evitar reutilizar versiones anteriores de la caché. El manifiesto incluye origen, duración y SHA-256. Se comprobaron carga, reproducción y pausa exclusiva en Chromium. Los textos siguen siendo guiones de referencia, sin cotejo de transcripción. Las cuatro cápsulas numeradas también se reemplazaron con la correspondencia confirmada por el equipo: Audio 1, bienvenida; Audio 2, Crisálida; Audio 3, autor-curador/Odetti; Audio 4, presentación del caso. Los siete audios activos corresponden a las versiones finales recibidas.


### Acompañamiento visual de los audios

Bienvenida y Crisálida incorporan preguntas de escucha; el espacio de autor-curador muestra tres relaciones con la investigación ya realizada. Son propuestas editoriales de acompañamiento, no citas ni preguntas adicionales para entregar. Las ideas escritas de bienvenida y autor-curador siguen en apartados de lectura opcional, sin presentarse como transcripciones cotejadas. Se conserva el desarrollo conceptual de Crisálida, las combinaciones del caso, sus voces y actividades. El caso mantiene el apartado «Leer el caso completo». No hay reproducción automática ni animación dependiente de la duración del audio.


### Jerarquía visual del primer concepto de Crisálida

La entrada distingue frase inicial, definición, dos ejemplos, posibilidades para el pensamiento y pregunta de diseño. La reflexión personal y su nota preceden a la lectura opcional sobre etimología. El gráfico reduce su altura y agrega conexiones entre las piezas; su epígrafe repetitivo queda disponible solo para lectores de pantalla. Los ejemplos no son botones y no se agregan actividades. Se mantiene la paleta violeta del módulo.


### Cajones del primer concepto

La sección comienza con «Una metáfora puede ser…» y tres recuadros desplegables: figura retórica, manera de mover el pensamiento y ayuda para diseñar una experiencia. Sustituyen las separaciones con rayas de la versión anterior. Los tres se pueden abrir de manera independiente con controles nativos de teclado; no se suman actividades ni se altera el guardado de la nota.


### Audio de Crisálida centrado

El recuadro de escucha de Crisálida centra pregunta, orientación y alternativa escrita. El reproductor muestra la onda de amplitud calculada desde el MP3 final, progreso, reproducción/pausa, tiempo y volumen. Usa rangos nativos de teclado; no reproduce automáticamente. El reproductor original queda como respaldo ante un error. Las otras cápsulas conservan sus controles. No se agregan dependencias ni animaciones.


### Reproductores visuales en todos los audios

Los siete MP3 finales comparten reproductor con onda calculada del archivo correspondiente, reproducción/pausa, búsqueda, tiempo y volumen. Las instancias dinámicas de las ramas se inicializan al mostrarse, con identificadores SVG únicos. Se mantiene reproducción exclusiva, respaldo nativo y ausencia de autoplay. Se centra el acompañamiento de las cápsulas y se conservan las combinaciones de voces, lectura del caso y actividades. Se quita la onda decorativa anterior de las voces.


### Esquema visual de autor-curador

El reencuentro incorpora «De los materiales a un recorrido», en lugar de las tres tarjetas de texto anteriores. Materiales del caso, selección, relaciones y disposición se sintetizan con SVG originales, preguntas breves y superficies claras en violetas complementarios. El propósito de aprendizaje orienta el conjunto. El esquema es estático y completamente legible sin animación, se apila en celular y no exige interacciones adicionales. Las figuras son decorativas: toda la información está en texto visible, con orden de lectura lógico. Mantiene el reproductor y la referencia de Odetti. Los textos se editan en `curationScheme` del JSON.


### Vínculos visuales por segmento

La selección de materiales se expresa como «Seleccionar materiales que contribuyan al propósito de enseñanza». Larva usa un mosaico con iconos de sus seis componentes; Crisálida conserva los cajones y añade puentes entre los términos de los ejemplos; el caso se presenta como expediente sin adelantar la explicación; autor-curador conserva sus tres decisiones; la comparación usa secuencia y red en paralelo; Mariposa mantiene la red de componentes interactiva; el objeto propio presenta una bifurcación de decisiones sin botones adicionales. Los SVG son originales y decorativos, con su significado expresado en texto visible. Los datos de apoyo están en `segmentVisuals`. Se conserva la paleta de cada etapa.


### Mapa de orientación y comparación educativa

«Cómo recorrer esta propuesta» presenta las cuatro etapas con iconos, acciones explícitas y una explicación breve. Eclosión anticipa las dos opciones de camino y el reencuentro. Los enlaces permiten ir a cada etapa. La comparación reemplaza las figuras abstractas por acciones con icono y explicación: escuchar/contrastar/relacionar/explicar y explorar/conectar/organizar/explicar. Se explicita que se puede volver sobre los materiales. Los esquemas permanecen legibles sin animación y se apilan en celular. Los textos son editables en `assistance.orientation` y `learningPaths`.


### Relaciones con función educativa

Larva presenta un esquema de propósito, actividad y retroalimentación con vínculos rotulados; contenidos, recursos y orientaciones se agrupan alrededor del trabajo de la actividad. En autor-curador el propósito de enseñanza reúne las tres decisiones. La orientación inicial explicita gráficamente la bifurcación y el reencuentro. Son representaciones de relaciones ya desarrolladas en el módulo, sin nuevas actividades ni dependencia de animación.


### Contraste en Ordená los indicios

Las tres zonas se distinguen con fondos claro, lila y durazno. Las fichas sin seleccionar tienen fondo blanco y texto azul; las seleccionadas usan violeta oscuro, texto blanco y una marca visible de selección, además de `aria-pressed`. Los cambios no alteran las selecciones ni su persistencia.


### Mayor diferenciación del organizador de indicios

El organizador usa base clara y zonas durazno, blanca y lila con mayor diferencia de luminosidad. Las selecciones son naranja oscuro, azul y violeta según la zona, conservando texto blanco y marca de selección.


### Caja negra del diseño

El apartado de preguntas del caso sale de la columna lateral y ocupa todo el ancho con una composición radial. Una caja abierta en el centro reúne cuatro miradas: recursos visibles, recorrido esperado, relaciones y orientaciones. Cada mirada tiene icono original, pregunta y explicación breve. Los desarrollos anteriores se conservan en lectura opcional. La presentación no revela la explicación del caso y no añade respuestas obligatorias. Se adapta a dos columnas o una en pantallas pequeñas, con orden de lectura lógico. Los textos breves se editan en `blackboxScheme`.


Las fichas seleccionadas de la zona durazno usan naranja `#c34c16`, con contraste de 4,81:1 sobre blanco.


### Elección de caminos como bifurcación visual

La elección parte de un mismo caso con voces y evidencias, abre dos entradas con iconografía de escucha y exploración y converge en construir una explicación. Los botones conservan sus atributos y el guardado de estado. Se distingue escucha secuenciada de exploración con conexiones revisables, sin cambiar las actividades. El reencuentro se anticipa en el pie del esquema. Los textos se editan en `choose.scheme`.


### Color en la elección de caminos

Escucha usa naranja `#c34c16` y exploración azul `#132d48`, ambos con texto e iconos blancos y botones claros. Las selecciones suman marca y contorno. El blanco sobre naranja alcanza 4,81:1. Se conservan las conexiones del esquema y la paleta violeta del lienzo.


### Mapa sonoro de testimonios

El camino podcast reúne las tres voces en un territorio de escucha compartido. Una pregunta común conecta los testimonios con iconos originales, fondos durazno, claro y lila, controles individuales y sus guiones de referencia. Se conservan las tres pausas de escucha. El mapa enfatiza la voz en reproducción, mantiene exclusividad y se apila en celular. Las conexiones no atribuyen causalidad ni anticipan la explicación del caso. No se reutiliza el diseño ni los iconos de la referencia aportada. Textos editables en `soundMap`.


### Transformación de materiales y puente final

Autor-curador muestra las mismas cuatro piezas en tres disposiciones, acompañadas por las decisiones de seleccionar, relacionar y disponer. El scroll puede destacar los momentos visibles sin ocultar información ni disparar audio. La preferencia de movimiento reducido conserva una representación estática. Antes de la plantilla se recuperan vínculos entre propósito, actividad, orientaciones y retroalimentación, con la pregunta sobre qué relación necesita construir el objeto propio. La plantilla sigue siendo entregable del aula y el foro mantiene su dinámica separada.


### Suavizado de los caminos y enlaces de revisión

Los fondos de escucha y exploración pasan a durazno `#e6b398` y azul suave `#a7bfd1`, con texto azul oscuro para conservar lectura y diferenciación. Se permiten enlaces con `?camino=podcast` o `?camino=artefacto` para revisar directamente los contenidos dinámicos de cada rama. Los enlaces con fragmento se posicionan después de restaurar y montar el contenido.


### Reordenamiento de la elección y la metáfora de investigación

Después de «Construir una explicación», una flecha conduce al recuadro del reencuentro. Luego se aclara que se elige un camino y se puede visitar el otro. El esquema sobre reunir piezas, compararlas y construir una explicación se presenta debajo, con la invitación a observar cómo la metáfora organiza el recorrido. Se conserva la funcionalidad de los botones y las notas.


### Legibilidad y tamaño de reproductores

Roboto se conserva con base de 18 px, texto principal de 19 px e interlineado 1,75. Los rótulos y textos secundarios suben a un mínimo de 0,95 rem (17,1 px con configuración predeterminada), y las explicaciones principales de esquemas usan al menos 1 rem. Los reproductores reducen altura de onda y márgenes, con botones de 44 px y controles de teclado intactos. Los testimonios y tarjetas de curaduría se reorganizan según el espacio y la escala del texto. La verificación simula anchos reducidos y texto ampliado; queda pendiente probar el iframe del Moodle real.


### Ciclo de investigación revisable

La explicación de la metáfora de investigación presenta cuatro momentos: pregunta e hipótesis inicial, fuentes e indicios, comparación y análisis, explicación y revisión. La hipótesis revisable ocupa el centro. La adaptación se basa en la correspondencia con INTEF compartida por el equipo; se documenta su alcance en `documentacion/Investigacion_ciclo.md`. No se atribuye a la fuente un esquema gráfico copiado.


### Aclaraciones de bienvenida

Los tres textos iniciales conservan su contenido y unifican tamaño (19 px de base), peso, interlineado y ancho de lectura. Cada uno comienza con un pequeño SVG original para distinguir propósito, orientaciones de participación y notas. Los iconos son decorativos; el texto conserva toda la información.


### Precisión de la entrada y las preguntas de Larva

La bienvenida introduce «un objeto de aprendizaje». Larva pregunta cómo conectar las partes para que funcionen juntas dentro de un objeto de aprendizaje y propone explícitamente una metáfora como modo de conectarlas.


### Orientación sin duplicar el entregable

La aclaración sobre avanzar a ritmo propio suma un icono de tiempo. Se elimina del mapa inicial el bloque repetido «Una plantilla como entregable»; la indicación de descarga y entrega y la invitación al foro siguen en «Del caso a tu objeto».


### Larva en dos momentos de scroll

Las partes se presentan primero en un mosaico amplio, con sus definiciones. Después de la pregunta sobre cómo conectarlas, aparece el esquema de relaciones en una segunda escena. Se elimina la presentación simultánea en dos columnas. El esquema se distribuye horizontalmente en pantallas amplias y verticalmente en las pequeñas. El avance depende solo del desplazamiento normal, sin esconder información ni exigir animaciones.


### Entrada iconográfica a Aristóteles

La lectura de etimología y semejanzas se abre desde un rótulo con icono original de pensador. Se conserva el desplegable nativo, el acceso por teclado y todo el texto de referencia. El icono es decorativo y la apertura se identifica por texto y signo más/menos.


### Ejemplo de Aristóteles

La lectura opcional incorpora la analogía día/atardecer y vida/vejez del capítulo 21 de la Poética. El texto se identifica como paráfrasis, sin cita literal ni número de página no cotejado de la edición de 1974. Dos relaciones visuales acompañan la explicación.


### Grafismos de tinta e hilo

Los cuatro grafismos enviados por el equipo sustituyen las formas genéricas de las etapas. Larva reúne las partes alrededor del entramado; Crisálida vincula los términos con hilos que salen de la envoltura; Eclosión conserva actividad, guía y pregunta en el dibujo que se abre; Mariposa permite destacar relaciones sobre el despliegue final. Las versiones de montaje tienen transparencia y los hilos y textos son capas independientes. Se conservan todos los esquemas educativos del caso, incluida la caja negra, y las actividades. El movimiento reducido muestra las conexiones completas.


### Acceso a Larva y carga de imágenes

La bienvenida termina con un acceso explícito a «01 · Larva — Antes de tomar forma», acompañado por una miniatura del grafismo. Larva conserva su lugar como primer momento del recorrido después de la orientación. Se optimizan los WebP y se precarga Larva; los archivos nuevos llevan nombres con huella de contenido.


### Nueva composición de Eclosión

La etapa se presenta como una envoltura que se abre hacia dos piezas del caso. El grafismo conserva su transparencia; dos contornos y dos hilos independientes salen hacia actividad y guía, con iconos y explicaciones. Las piezas convergen en una pregunta por su relación, sin anticipar la explicación. Se mantienen la lectura del caso, audios, notas y caja negra. La apertura es sutil con scroll y estática con movimiento reducido. Textos editables en `eclosionReveal`.


### Aparición temprana de los hilos de Larva

El trazado empieza antes de que el grafismo entre en pantalla y se completa cuando su borde superior alcanza el 90 % del alto visible. Las conexiones están disponibles mientras se leen las partes. Se conserva la versión estática de movimiento reducido.


### Transformación entre etapas

Desde Crisálida, cada composición retoma el grafismo anterior y pasa al actual mediante escala y fundido ligados al scroll. Crisálida concentra el entramado; Eclosión abre la envoltura; Mariposa completa el despliegue. Se reutilizan los cuatro archivos existentes, sin generar nuevas imágenes ni modificar sus trazos. Las imágenes decorativas anteriores se excluyen de la lectura accesible. Las etiquetas permanecen visibles. Con movimiento reducido se presenta directamente la forma final de cada etapa.


### Mesa de conexiones en el camino podcast

La tabla de voces y evidencias se reemplaza por una mesa de selección. Cada persona elige una voz y una evidencia; sus textos se muestran próximos y un hilo señala la relación a explorar, sin corrección automática ni explicaciones prefijadas. La nota opcional se conserva al cambiar las piezas. Las elecciones se guardan junto con las notas y se incluyen en la descarga. Se puede volver al testimonio sonoro desde la tarjeta. Los controles son botones nativos con `aria-pressed`, con foco conservado al actualizar las tarjetas. La rama artefacto mantiene sus actividades.


### Eclosión después del caso y alas en color

La presentación del caso, su audio, la lectura completa y la primera interpretación aparecen primero. A continuación Eclosión ocupa un momento propio a todo el ancho, antes de abrir la caja negra. Dos capas CSS, basadas en la transparencia del grafismo, colorean los trazos laterales de las alas en durazno y azul claro, dejando el núcleo de tinta visible. El color emerge con la transición de Crisálida a Eclosión y permanece completo en movimiento reducido. No se modifican los archivos de las imágenes.


### Cierre con infografía de mariposa

«La forma que construimos» reúne los textos existentes en cuatro recuadros conectados a la mariposa: recorrido realizado, aporte de la metáfora, opción con metáfora y otra organización. Se conservan todas las ideas del cierre, la pregunta final, descarga de notas y referencias. Los fondos durazno, claro, azul suave y lila distinguen los bloques sin depender de su color para comprenderlos. El dibujo central reutiliza el archivo transparente y se presenta en tinta clara sobre el lienzo violeta. En pantallas pequeñas los bloques se reorganizan sin ocultar texto.


### Comparación sin botones de dimensión

La comparación del reencuentro muestra ahora dos infografías completas: un centro sonoro para podcast y una pantalla de piezas conectadas para el artefacto. Alrededor aparecen las cuatro dimensiones de organización; debajo, las acciones de quien aprende. Se retiran las pestañas, que cambiaban textos pero repetían casi toda la representación. Todos los contenidos comparativos quedan disponibles simultáneamente. No se alteran los botones de elección de camino ni las actividades.

Comparación visual refinada: podcast con nodos circulares y explicaciones abiertas; artefacto con tarjetas rectangulares. Se reducen las superficies de color y se amplía el espacio entre elementos, conservando los textos y la comparación simultánea.

Comparación con organización espacial: Podcast ocupa el centro de cuatro círculos conectados. Artefacto interactivo se representa como una red de recuadros desplazados, con conectores ortogonales, puntos de origen y flechas. En pantallas pequeñas los elementos se apilan para conservar la lectura.

Relaciones de la mariposa: el botón seleccionado se marca en lila; los dos componentes y sus hilos se iluminan en naranja. Al cambiar de relación se actualizan ambos estados.

Se amplían los centros de la comparación: podcast como círculo principal y artefacto como ícono de pantalla de gran tamaño, sin tarjeta envolvente. Ambos diagramas se muestran uno debajo del otro.

Se refuerzan los rellenos de selección de la mariposa: naranja #ff9b55 en los componentes y lila #c7bce6 en el botón activo.

Autores con popup destacados en naranja. Aristóteles cuenta con popup bibliográfico de Poética (1974), traducción de V. García Yebra, Gredos. El enlace al texto completo queda pendiente de verificar: el entorno bloquea la búsqueda web. El popup no muestra un enlace sin verificar.

Popup de Aristóteles actualizado con el enlace al PDF trilingüe proporcionado por la usuaria, alojado en Desarmando la cultura (WordPress). La descarga desde el entorno sigue bloqueada; se incorpora el enlace provisto sin afirmar cotejo del PDF.

Recuperación de grafismos ante errores de carga: si una imagen WebP falla desde Pages, se solicita la copia del mismo archivo en el commit cd1f9cb de GitHub. Se probaron la carga normal y la recuperación de las 13 instancias, simulando fallos de la ruta local y sirviendo la copia alternativa. El servidor público de Pages no es accesible desde el entorno de revisión.

Ante el reporte persistente de imágenes ausentes, se utilizan los PNG originales transparentes en lugar de WebP para descartar compatibilidad de formato. Se verificaron las 13 imágenes cargadas y Larva/Crisálida con dimensiones y opacidad visibles en Chromium. La causa en la página pública aún no se pudo reproducir por el bloqueo de acceso del entorno.

Los cuatro grafismos se incorporan como PNG embebidos en el contenido HTML para eliminar descargas independientes de imágenes de etapa. Se verificaron 13 instancias completas en escritorio y celular con todas las rutas externas de grafismos bloqueadas. El HTML aumenta de tamaño; los archivos PNG se conservan como fuentes editables.

Síntesis del Reencuentro: se retira la frase «Se mantiene la lógica de investigación…» y se destaca en el recuadro el párrafo sobre traducir una metáfora a otro lenguaje. La pregunta recupera cómo la lógica de investigación ayudó a conectar materiales y construir una explicación del caso.

Jerarquía y retroalimentación: la orientación diferencia el núcleo del recorrido y las ampliaciones opcionales. La arquitectura del episodio y el organizador de indicios se conservan en desplegables. Ambos caminos incorporan tres preguntas de autorrevisión de la explicación (indicios, relaciones y límites) antes de consultar la reconstrucción posible, sin nuevos campos ni respuestas predeterminadas. Se verificaron ambos caminos, el organizador, la revelación, el guardado de la explicación y la lectura móvil. El entregable no se modifica en este ajuste.

Actualización de participación y transferencia: el foro es la única producción compartida. La plantilla se conserva como recurso personal opcional y se actualizan sus PDF/Word. Se incorpora una guía comentada de un material hipotético sobre argumentación con fuentes, con una decisión fundamentada y provisional. Los títulos invitan a explorar ideas; los autores permanecen citados en párrafos y popups. Se verificaron la guía de cuatro pasos, las descargas, el popup de Aristóteles, la lectura en 320–1440 px y las tres páginas con doce campos vacíos de la plantilla.

La guía comentada se muestra completa en el tramo final, fuera de un desplegable, y dispone de una página independiente ligera (`guia-de-diseno.html`) con el mismo ejemplo y enlaces a la plantilla actualizada. Se conserva una copia en la raíz del repositorio para la configuración de Pages desde main. Se verificaron las dos rutas locales, cuatro pasos del ejemplo, descargas y lectura móvil.

Corrección editorial: se utiliza «qué esperamos que la persona aprenda» en la guía comentada, y formulaciones equivalentes en la curaduría y la plantilla. La guía se conserva visible dentro del sitio completo, con ancla #guia-comentada; se retira su invitación a salir a la página independiente. Se actualizan también los PDF y Word para mantener coherencia.

El ejemplo hipotético se reemplaza por el análisis documentado de Falconer y Aburrow (2004), a partir de las once diapositivas aportadas. Por indicación de la usuaria se ofrece como lectura opcional en un PDF mediante «Podés leer otro caso», en lugar de desplegar el análisis completo en el módulo. El PDF reproduce la diapositiva 8, identifica las diapositivas consultadas y distingue las afirmaciones de la fuente del análisis didáctico; no atribuye interacciones ni resultados que no aparecen en el documento. Se verificaron el enlace al PDF, sus páginas, la figura y las distinciones de fuente. Eclosión permanece sin modificaciones en este ajuste.

Se retira el enlace visible a INTEF del esquema de investigación por indicación de la usuaria. Se conserva el ciclo y su contenido.

Ajuste de Eclosión conservando el diseño de la caja negra: las cuatro tarjetas y su lectura ampliada proponen observaciones abiertas. La interpretación más específica queda después de investigar, al abrir la reconstrucción posible. Se formula como hipótesis compatible con los indicios y se añade qué permite explicar, qué falta conocer y qué observar en una próxima prueba. Se conserva la interacción sin nuevos campos de respuesta.

El análisis opcional del observatorio incorpora un esquema explicativo con rótulos en español, identificado como elaboración de la guía a partir de la diapositiva 8. La fuente original en inglés conserva sus enlaces. El cierre retoma primero el módulo, ofrece la plantilla y, debajo de sus descargas, muestra un recuadro de lectura opcional «Podés leer otro caso». Se revisa la paginación del PDF para evitar una última página con un único enlace.

Por indicación de la usuaria se retira el caso adicional del observatorio y sus documentos, enlaces y referencias específicos. El cierre vuelve al recorrido propio, la plantilla opcional y el foro. Se conservan la plantilla PDF/Word mejorada, con el enunciado centrado en lo que se espera que la persona aprenda, las preguntas más abiertas de la caja negra y la explicación posterior.

Edición fina del 2 de noviembre de 2026:
- Orientación: «Lo que podés elegir», sin prefijo «Para ampliar», con lecturas opcionales y versiones escritas de los audios. La autora confirmó que no son transcripciones literales; se conserva esa distinción y se retiran comillas de los testimonios adaptados.
- Larva: «Las partes con las que diseñamos», introducción sin «acercar lo distante», preguntas con el mismo destaque, «Un vínculo posible» e icono en la reflexión sobre decisiones de diseño.
- Crisálida: «Construir relaciones posibles», pregunta e indicación revisadas con icono, sin la repetición sobre figura retórica. Lectura de Aristóteles antes de los otros desplegables, iconos consistentes e invitación a pensar/escribir al cierre del bloque. Borges dispone de popup y enlace a El hacedor provisto por la autora.
- Caso: párrafo de apertura en recuadro. Voces identificadas como Laura (estudiante), Lic. Martínez (docente) y Marcos (estudiante), con retratos ilustrativos generados y embebidos, actualizados en la mesa de relaciones y en la exploración. Los IDs de respuestas se conservan.
- Episodio: síntesis visual de pistas, perspectivas, evidencias y reconstrucción, con conectores; título sin «Para ampliar».
Se verificaron nombres y roles en ambas rutas, las nueve combinaciones de la mesa, popups de los cuatro autores, guardado de la explicación, imágenes, lectura entre 320 y 1440 px y ampliación de texto al 200 %. Se conservan el foro como única producción compartida y la plantilla opcional ya corregida.

A pedido de la autora, se aplican al sitio principal las cuatro ilustraciones preparadas en la prueba local del 3 de noviembre de 2026. Se actualizan todas las apariciones mediante inkArt: entrada a Larva, etapas, imágenes de transición, mapa del recorrido y cierre. Se conserva el blanco interior de las figuras y se adapta la coloración de las alas de Eclosión. Los textos, notas, controles y clave de guardado del módulo no se sustituyen por los de la copia de prueba.
