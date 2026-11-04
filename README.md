# Versión 1. Revisión para un curso autoasistido

Esta es una copia de trabajo de la versión 1. Conserva la entrada por las partes del OA y el marco conceptual. El caso aparece después. La carpeta `version-1` sigue intacta como referencia.

## Ver el boceto

Descargá `descargas/metafora-version-1-autoasistida.zip` desde GitHub, descomprimilo y abrí `index.html` en un navegador actual. No necesita instalación ni conexión para leer los textos. Alternativamente, descargá el repositorio completo y abrí `version-1-autoasistida/index.html`.

Sitio principal: https://pedflacso.github.io/elpoderdelametafora/. La versión de narración por capas se publica como índice principal por autorización del equipo.

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

Se edita la figura de Larva para retirar las prolongaciones de la cabeza y el ojo, simplificando su aspecto como larva. El cambio se aplica a las apariciones que dependen de inkArt: entrada, escena de Larva, transición hacia Crisálida y mapa del recorrido. Se mantienen las otras ilustraciones y las interacciones.

A pedido de la autora se reemplazan las cuatro ilustraciones por la variante suave de escritura y grafismos superpuestos de la lámina seleccionada. Se conservan los textos, las palabras exteriores, sus posiciones y las interacciones. Se usan recortes visuales no destructivos de la misma lámina, sin su franja demostrativa de palabras.

Se añade a Eclosión un pequeño fragmento de ala asomando por el lateral superior, como capa independiente de trazo suave. Se conserva intacto el dibujo base seleccionado y se actualizan sus apariciones, incluida la transición hacia Mariposa y el mapa del recorrido. Las otras tres figuras, las palabras exteriores y las interacciones mantienen su contenido.

Ajuste final: larva menos erguida; Eclosión conserva la apertura inferior y suma el alita cruzada en el costado opuesto; se retiran los aros exteriores.

Se añade a Eclosión un pequeño fragmento de ala asomando por el lateral superior, como capa independiente de trazo suave. Se conserva intacto el dibujo base seleccionado y se actualizan sus apariciones, incluida la transición hacia Mariposa y el mapa del recorrido. Las otras tres figuras, las palabras exteriores y las interacciones mantienen su contenido.

Revisión de proporciones: se retira el fragmento lateral añadido a Eclosión. Se conserva el dibujo seleccionado con la apertura inferior, sin aros exteriores; la larva aprobada permanece.

### Sistema visual editorial: cuatro atmósferas

Se conserva el contenido JSON completo, incluidos todos los originales de las ilustraciones. La versión inmediatamente anterior a esta revisión está en `version-anterior.html`, con los mismos recursos relativos; ambas versiones incluyen un enlace para alternar. El enlace de revisión no es una instantánea: el archivo anterior sí conserva el diseño previo.

| Etapa | Fondo | Intención y trama |
| --- | --- | --- |
| Larva | `#f3efe6` | Papel cálido: partes disponibles, hilo suelto y bucles aislados. |
| Crisálida | `#e2e8dd` | Salvia: recogimiento, hebras que se entrelazan. |
| Eclosión | `#f5e0d3` | Durazno: apertura, trazos que se separan y ramifican. |
| Mariposa | `#dfeaf0` | Azul aireado: despliegue, nervaduras y curvas abiertas. |

La tinta oscura y las superficies casi blancas unifican el recorrido. Los controles adoptan verde, verde profundo, terracota y azul petróleo por etapa; selección con doble borde interior y negrita, foco con contorno oscuro y separación clara. Se mantiene la forma, posición y fuente de cada ilustración.

Cuatro SVG decorativos inline, sin nuevas imágenes raster, forman tramas de margen que se desvanecen hacia la lectura. Desplazamiento vertical de hasta 20 px en una sola actualización `requestAnimationFrame`, reutilizando el controlador de scroll existente. Solo se actualizan bandas visibles. Sin temporizadores de animación. `prefers-reduced-motion` y el botón existente restablecen y mantienen la trama estática. Las transiciones suaves de color marcan únicamente el inicio de cada etapa.

Contraste calculado con la trama a su opacidad máxima del 14%: texto principal >= 7,95:1, enlaces >= 4,72:1, texto de botones >= 7,27:1. El desvanecido central reduce aún más la interferencia. La revisión automática de contraste se realiza con axe-core en Chromium, en ambos caminos, desplegables y estados hover. La versión anterior conserva su comportamiento original.

### Prueba de papel y colores análogos

`propuesta-papel.html` es una alternativa completa para revisar, sin reemplazar `index.html`. Mantiene idénticos el JSON editorial y todas las ilustraciones. Usa una secuencia cálida continua: crema `#f3eddb`, arena `#eee1cc`, durazno `#efd6c5`, rosa arcilla `#e8c9c3`. Los controles progresan entre ocre oscuro `#5c4726`, marrón cálido `#694429`, terracota `#743b2a` y borgoña `#6e3438`.

Una única tesela SVG de puntos irregulares y fibras finas produce el papel sin filtros de ruido ni nuevas imágenes raster. Conserva el desplazamiento de hasta 20 px y ambas opciones de reducción de movimiento. Auditoría de contraste con axe-core: sin fallas detectadas en las cuatro etapas, ambos caminos, desplegables abiertos y hover; foco visible de 3 px y sin desbordamiento móvil. Enlaces de comparación al sitio actual y al diseño original al comienzo de la prueba.

### Prueba botánica de verdes continuos

`propuesta-verdes.html` conserva el recorrido completo como alternativa independiente. Fondos: crema verdoso `#eef0d9`, brote `#dfe8c4`, salvia `#cbdcbe`, eucalipto `#b8d0bd`. Controles: oliva `#4e542a`, musgo `#3d5231`, bosque `#2c503b`, petróleo `#1c4541`. El borgoña `#731f40` destaca la relación seleccionada en Mariposa junto con el borde, el peso de letra y los hilos resaltados.

SVG ligeros de nervaduras y grano irregular, con mayor ramificación por etapa. Capas curvas de los dos verdes contiguos suavizan los límites. Sin fotografías nuevas ni cambios a los dibujos. Solo las nervaduras se desplazan suavemente; las capas de transición permanecen fijas. Se conserva la preferencia de movimiento del sistema y el botón del módulo. Los enlaces superiores permiten comparar con el sitio actual, la prueba de papeles cálidos y el diseño original.

Ajuste de integración botánica: tarjetas de elección en crema verdoso y salvia, con botón claro de texto verde cuando no está elegido y botón verde con marca cuando está seleccionado. Se elimina el contraste salmón/azul heredado de las tarjetas de voz y evidencia; conectores, fondos de íconos y los cuatro materiales de los diagramas usan verdes y crema. Cambios limitados a la presentación en `propuesta-verdes.html`; sin cambios editoriales ni a las ilustraciones. Contraste comprobado en elección inicial, ambos estados seleccionados, hover, pareja voz/evidencia y diagramas, además de las cuatro etapas y ambos caminos.

Revisión de acentos por fondo: terracota `#8b422e` en Larva, ciruela `#62415d` en Crisálida, frambuesa `#86364f` en Eclosión y borgoña `#731f40` en Mariposa. Los acentos aparecen en acciones, marcas, íconos y relaciones seleccionadas; las tarjetas grandes conservan crema y salvia. En la elección de caminos, borde y título seleccionados, botón activo e íconos adoptan frambuesa.

Las tres relaciones para pensar una propuesta propia progresan desde lima suave `#e8edc7` a oliva claro `#d7dfb3` y salvia `#c5d7bd`, inspiradas en las referencias aportadas. La bifurcación combina rosa apagado `#ead7d4` y verde azulado `#cee2dc`, con marcas pequeñas de color. La revisión de contraste incluye el bloque completo, ambas selecciones de camino, hover y todos los estados ya comprobados; no cambia el contenido ni las imágenes.

Armonización posterior: hilos y bordes de Larva en terracota `#8b422e` y arcilla `#a15740`. En Eclosión se sustituye frambuesa/ciruela por petróleo cálido `#315b4f`, con tinte claro `#d5e3db`; se mantiene ciruela en Crisálida y borgoña en Mariposa. Las cuatro tarjetas de caja negra y las cuatro del ciclo de investigación comparten una progresión crema `#f0eed7`, lima `#e2e8cb`, oliva `#d1ddc0`, salvia azulada `#cbdcd3`. Conectores e íconos quedan integrados al petróleo, y la superficie de propósito de enseñanza adopta ese mismo acento. Contraste revisado en los cuatro bloques, ambos caminos, estados de selección y hover; comportamiento de movimiento y anchos hasta 320 px comprobados.

Exploración comparativa posterior: Larva adopta el verde oscuro `#315b4f` en hilos, bordes y acentos. La alternativa `propuesta-verdes.html` propone una gradación continua en las cuatro tarjetas, desde gris-verde `#e1e6d2` hasta verde azulado `#a8c8ca`, en sentido horario. Incluye transiciones suaves dentro de cada tarjeta y elimina diferencias aisladas de paleta.

La nueva `propuesta-contrastes.html` usa los pares de fondo/texto inspirados en la última referencia: lavanda `#cbbfd3` / ciruela oscuro `#592741`, oliva `#68660f` / marfil `#fff8e7`, ciruela `#683651` / marfil, verde pino `#273222` / verde claro `#e0eacb`. Contrastes calculados: 6,66:1, 5,67:1, 8,87:1 y 10,73:1. Ambas versiones se enlazan para comparación y mantienen todo el contenido y las ilustraciones. Revisión automática de contraste, selecciones, hover, foco, anchos de 320 a 1440 px y ambas opciones de reducción de movimiento sin fallas detectadas en los casos comprobados.

### Exploración de tramas dibujadas y progresión del episodio

`propuesta-tramas.html` conserva el módulo como prueba independiente, con enlaces a las tramas anteriores y a los bloques de color. Se estudió la grabación aportada como referencia de expansión y variación de densidad, sin incrustar el video. Las tramas originales de esta prueba usan SVG de líneas irregulares, bucles y grafismos: sueltos en Larva, entrelazados en Crisálida, abiertos en Eclosión y con ramificaciones en Mariposa. Mantienen una misma familia de trazo; no se modifican las ilustraciones del módulo.

Movimiento autónomo lento de escala, rotación y desplazamiento mediante `transform`, más deriva por scroll. Cada banda contiene una ventana SVG limitada al alto de pantalla, sin filtros de ruido ni animación de geometría. `IntersectionObserver` pausa bandas fuera de pantalla; la visibilidad de pestaña también pausa. Ambas preferencias de reducción de movimiento eliminan la animación y el desplazamiento. Opacidad y máscara central protegen la lectura; Eclosión usa opacidad menor por el contraste de su acento. Fuente de los cuatro SVG: aproximadamente 85 kB en conjunto.

Los pasos del episodio progresan con verdes de la referencia: `#c5d9b0`, `#95b27f`, `#70905e`, `#28481c`. Tres pasos con texto oscuro; el último con texto claro. Se eliminan bordes lilas del esquema. Comprobaciones: contraste automático en todos los bloques, ambas selecciones de camino y hover; movimiento real entre capturas de estilos calculados; detención con el control manual y con `prefers-reduced-motion`; sin desbordamiento de 320 a 1440 px. JSON editorial y fuentes de imágenes idénticos a la versión actual.

Por indicación posterior se conserva Mariposa como en la propuesta verde aprobada: queda excluida de las nuevas tramas y mantiene su fondo, trazo decorativo previo, ilustración, colores e interacciones. La nueva exploración se aplica a las tres etapas anteriores.

Ajuste de alcance tras la aclaración: la exploración conserva las tramas anteriores a baja intensidad y suma los grafismos móviles como una capa suave en las tres primeras etapas. No se sustituye el diseño completo. Mariposa permanece sin capas nuevas. La verificación final confirma animación real en Crisálida, ausencia de capas nuevas en Mariposa, detención con ambos controles de movimiento y sin desbordamiento hasta 320 px.

Larva: se refuerzan exclusivamente los hilos de conexión con verde oscuro `#214936`, grosor de 3 px y opacidad completa. Revisión visual en navegador; se conserva el trazado y su comportamiento con el control de movimiento.

### Variante con la paleta detallada del equipo

`propuesta-paleta.html` permite comparar la propuesta anterior con la especificación aportada: hilos cobre `#B87333`, bordes bronce `#8A6A3A` y nudos oro viejo `#C1A04A` con contorno de bronce; tres niveles claros de lila en Crisálida; Actividad ciruela, Guía petróleo y llave con degradado entre ambas; pregunta verde pino; cuatro miradas lila, rosa empolvado, marino y bosque; caminos con botón ciruela/petróleo lleno y tilde, sin contorno grueso en la tarjeta seleccionada; columnas claro-a-hondo y fases ámbar, oliva, verde y celeste; círculos del podcast rosa empolvado con hilos e íconos rojo apagado.

Se mantiene el diseño de Mariposa, las ilustraciones originales, el JSON editorial y los controles de movimiento. Nudos nuevos y gradiente son SVG decorativos; sin archivos raster adicionales. Contrastes calculados: hilo cobre/fondo 3,27:1 (gráfico), bronce/superficie 4,79:1, ciruela/superficie 7,56:1, petróleo/botón claro 5,47:1, rojo apagado/rosa 5,26:1. Axe-core no detectó fallas de contraste en los bloques y estados comprobados; pruebas de foco, ambas preferencias de movimiento y anchos de 320 a 1440 px completadas.

Revisión combinada solicitada: en `propuesta-paleta.html` Crisálida y la caja negra recuperan el aspecto previo a la paleta detallada. Larva usa hilo monarca/ámbar quemado `#D9722B` de 2 px; Actividad y Guía quedan blancas; los dos caminos mantienen su diseño. En Investigación, la primera tarjeta usa celeste muy claro `#EDF3F3` para progresar con la tarjeta celeste de revisión, mientras la otra pareja conserva oliva y verde. El episodio vuelve a la progresión de verdes. Se retiran exclusivamente las tres preguntas interiores de `curationScheme.steps` y su párrafo de presentación en las tarjetas; los títulos, gráficos y afirmaciones permanecen. Se verificó por comparación de JSON que no cambia otro contenido ni las fuentes de las imágenes.

`propuesta-matices.html` conserva esos mismos ajustes como alternativa visual: Actividad oliva `#E9ECCB`, borde `#8A9250`, ícono `#6F7740`; Guía celeste y llave oliva/petróleo. Los ejemplos internos de Crisálida tienen escalones lila `#F3ECF1`/`#E6D9E4` y pastillas claras con borde `#8A6A8F`; el resto de Crisálida mantiene la versión recuperada. Enlaces recíprocos permiten comparar con las tarjetas blancas. Ambas pruebas pasan las comprobaciones de contraste textual, selección, hover, foco, anchos 320–1440 y reducción de movimiento; Mariposa permanece sin nuevas capas ni cambios de paleta.

### Prueba de Larva en verde hoja tierna

`propuesta-larva.html` conserva el contenido y las ilustraciones de la revisión combinada. Solo explora Larva: fondo `#D9E2C8`, bloque del diagrama y bloque de relaciones `#CAD6B6`, hilo rosa pálido `#E4BDCA` de 1,6 px con contorno rosa oscuro `#8D5268` de 2,4 px para conservar la visibilidad; bordes y nudos armonizados con el rosa. Se retira la franja amarillenta del inicio de esta etapa. La versión anterior queda disponible mediante el enlace de comparación. Revisión visual y sin desbordamiento a 1440, 390 y 320 px; todas las otras etapas mantienen sus estilos.

La misma prueba `propuesta-larva.html` incorpora los pedidos siguientes: ambas tarjetas de caminos con fondo blanco, textos ciruela/petróleo y botones de sus respectivos colores; conserva tilde y botón lleno para la selección. El desplegable «Cómo se organizó este episodio» tiene encabezado verde oscuro `#315B4F` con texto claro y mantiene la progresión verde en los cuatro pasos interiores. Se comprobaron contraste de encabezado abierto/cerrado, colores de tarjetas, selección, hover, foco, anchos de 320 a 1440 px y ambas preferencias de reducción de movimiento.

### Publicación de la versión aprobada

El recorrido aprobado de `propuesta-larva.html` pasa a `index.html` por autorización del equipo. Último ajuste: hilos de Larva en bordó `#731F40`, con los mismos grosores finos. Se conserva el resto de la prueba aprobada, incluidas las tarjetas de caminos blancas con texto de color, el encabezado del episodio invertido, las progresiones y Mariposa. El índice principal ofrece el enlace a `version-anterior.html`; el índice inmediatamente previo a esta publicación queda también guardado en `version-previa-publicacion.html`.

La descarga ZIP se actualiza como módulo de producción, excluyendo páginas de exploración. Revisión del índice principal: ambos caminos, contraste textual en los casos comprobados, selección, hover, foco, anchos 320–1440 px y ambos controles de reducción de movimiento. El único cambio editorial respecto de la versión principal anterior son las tres preguntas interiores retiradas previamente por indicación del equipo; todo el contenido restante y las ilustraciones coinciden.

Último ajuste del cierre: los hilos de «La forma que construimos» también usan bordó `#731F40`, conservando grosor y composición. Revisión visual del cierre y del color calculado en navegador; descarga de producción actualizada.

### Prueba de narración visual dentro de Crisálida

`propuesta-metamorfosis.html` es una prueba independiente, sin modificaciones al índice publicado. Tras revisar la grabación, el ensayo se centra en sostener la imagen durante el contenido largo, en vez de agregar otra sección entre etapas. El JSON editorial y las ilustraciones originales permanecen idénticos.

Una entrada breve presenta la larva recogiéndose entre hilos mediante transformaciones de presentación, sin deformar ni editar su dibujo original. En Crisálida se abren inicialmente los tres desplegables principales (siguen siendo plegables) y se acompaña la lectura de trece fragmentos existentes: el dibujo pasa de Larva a Crisálida, las asociaciones «Ojos/Luceros» y «Tiempo/Oro» aparecen en la escena al leerlas, y los hilos y componentes cambian de foco según el texto. Tres botones permiten ir a los temas explícitamente. Las lecturas complementarias, notas y decisiones del caso conservan sus controles.

La caja negra incorpora un botón para levantar la tapa y mostrar los seis componentes y la pregunta inicial del módulo; las cuatro miradas continúan visibles y no se oculta el contenido existente. El movimiento respeta ambos controles de reducción, y en pantallas menores de 900 px la secuencia es estática y completa. Comprobaciones: progreso de la escena, navegación, apertura/cierre de caja, contraste textual, ausencia de errores JS, anchos 320–1440 px y modo estático manual/del sistema. Los dos nuevos sitios de referencia no pudieron abrirse por bloqueo del entorno; no se atribuyen características no verificadas a esos ejemplos.

### Narración por capas como versión principal

Por solicitud del equipo, el contenido de `propuesta-capas.html` pasa a `index.html`. Se retira únicamente la barra de navegación de pruebas. Incluye la entrada de hilos negros que forma la larva, las seis relaciones, las pantallas opacas y sus mini escenas didácticas, la lente de investigación, la caja grande que se abre y los bocetos persistentes. Se conservan los contenidos, audios, notas, ambas rutas e interacciones.

La versión inmediatamente anterior queda en `version-previa-scrollytelling.html`. La prueba sigue disponible por separado. La descarga ZIP se actualiza con el mismo índice y conserva sus recursos locales.

Último ajuste del recorrido publicado: hilos iniciales con distintos grises y grosores, fondo móvil de exploración detrás de la caja, y sustitución de las mini escenas por fondos libres en las tres pantallas de relación. Se conservan los bocetos transparentes, el contenido y los controles.

Dos ritmos de scroll: las columnas visuales incorporan desplazamientos con pausas mientras la lectura sigue otra curva de movimiento. Se aplica a Crisálida, caso, caja, investigación, curaduría y Mariposa. Se conserva la composición y los matices de color. Los íconos comunes pasan a trazos más finos e irregulares, con símbolos y etiquetas sin cambios. La dirección scrapbook se mantiene como una idea por discutir, sin transformar todo el diseño.
