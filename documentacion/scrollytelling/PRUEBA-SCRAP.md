# Montaje de piezas scrap para revisión

El montaje revisado de `version-1-autoasistida/propuesta-scrap.html` se incorpora al índice principal por solicitud del equipo. La copia de prueba se conserva para comparación.

- Carpeta: fondo y solapa estables; hoja que cambia de posición al avanzar por las fases. La etiqueta recupera el título de la fase actual.
- Observación: discos de papel detrás de los materiales y lente independiente que se desplaza con el scroll y al elegir otra evidencia. Es una representación visual de mirar en detalle; no amplía ópticamente el texto del caso.
- Caja: cuerpo y tapa de papel separados; la tapa se levanta y las piezas mantienen sus controles de apertura y cierre.
- Crisálida: tiras de papel detrás del dibujo original, con otro recorrido de movimiento.
- Seleccionar, relacionar y disponer: cuatro recortes que se reordenan y conectan, conservando los textos.
- Mariposa: manchas de papel detrás del dibujo original que se desplazan suavemente y cambian de énfasis con las relaciones.

Se reutilizan los audios, contenidos, notas y navegación del módulo. Las imágenes nuevas son decorativas. Las interacciones siguen disponibles con movimiento reducido; en móvil se simplifican las escenas.

Validación en Chromium: ambas rutas, controles de caja, cambios de foco de la lente, disposición de recortes, contraste automático en el estado revisado, anchos 320–1440 px, movimiento reducido y ausencia de errores JavaScript. Se verificó que el índice principal no cambia.

## Ajuste de la prueba: papeles dentro de las escenas

- La mesa y la lupa pasan del fondo general al recuadro de materiales de investigación. La lente sigue moviéndose al hacer scroll y cambiar de evidencia.
- Se retira la tapa de papel que no coincidía con la caja. La acción pasa a desplegar los papelitos desde su interior y reunirlos; ambos controles siguen disponibles con teclado y movimiento reducido.
- Las tres pantallas de Propósito, Actividad y Retroalimentación incorporan títulos sobre papel y recortes tenues, conservando sus textos y colores de fondo.
- Se retiran las tiras gruesas de Crisálida; permanece el boceto original y las conexiones entre sus componentes.
- Los nombres de componentes y piezas adoptan el soporte de papel. Las selecciones se indican con énfasis y trazo, manteniendo sus colores de base.
- Los recortes detrás de la mariposa mantienen la paleta y opacidad al seleccionar relaciones.

Esta revisión también se publica en el índice principal y se incorpora a su ZIP. El índice anterior queda guardado en `version-previa-scrap.html`.

## Lupa persistente y fondo de gran escala

Por aclaración del equipo, el bloque de fases deja de mostrar la carpeta: la lupa ya está presente desde la pregunta inicial y se desplaza sobre rostro u hojas al avanzar. En los materiales se vuelve a colocar la escena de observación en el plano de fondo, a gran escala y detrás de los recuadros. La lente sigue respondiendo al scroll y al cambio de evidencia; las hojas de lectura recuperan su ancho. El resto del montaje no cambia.

Comprobación: lente visible en las cuatro fases, cambios de posición y de papel observado, escena de fondo de más de 1000 px en escritorio, movimiento al cambiar de evidencia, ambas rutas, anchos 320–1440 px, movimiento reducido y ausencia de errores de JavaScript.


Síntesis de caminos: escena sticky con cuatro SVG por camino, cambios de composición al avanzar sobre los textos existentes. En móvil se muestran las cuatro escenas junto al texto; modo reducido sin transiciones. Escenas educativas incorporadas a las tres pantallas del vínculo. Validación: ocho SVG cargados, activación de los cuatro estados de cada camino, sin errores JavaScript ni desbordes a 320–1440px, contraste sin incidencias.


Filminas y profundidad: la síntesis alterna podcast a izquierda y artefacto a derecha, con escenas sticky grandes, acercamientos y apertura de plano vinculados al scroll. Los detalles pasan en tarjetas translúcidas sobre la ilustración. Las tres escenas educativas utilizan el mismo tratamiento con fondos ampliados y texto sobre filmina oscura. Móvil y movimiento reducido muestran una lectura estática, con cada ilustración junto a su contenido. Verificado: cuatro estados de cada camino, escalas variables entre 1.02 y 1.24, movimiento lateral opuesto, sin errores JavaScript ni desbordes, contraste sin incidencias.


Las pantallas educativas se escalonan izquierda / derecha / izquierda y se superponen dejando asomar el recuadro previo. Las escenas desbordan los marcos de forma controlada y aumentan su desplazamiento ligado al scroll. Se conserva la lectura estática móvil y con movimiento reducido. Verificación: sin desbordes a 1440, 1000, 390 y 320px, sin errores JavaScript.


Cierre de la secuencia educativa: las tarjetas sticky terminan antes de la pregunta puente. La pregunta aparece en un panel claro sobre las tres escenas difuminadas; el esquema completo y el resto del contenido continúan después. Verificado orden DOM, texto exacto, ausencia de errores JavaScript y de desbordes a 320–1440px.


Cierre «La forma que construimos»: mariposa original ampliada como escena sticky, papeles de color que aparecen y cuatro conexiones bordó dibujadas con el scroll; los textos conservados pasan en capas alternadas. Móvil y movimiento reducido mantienen lectura estática. Las tarjetas educativas utilizan rosados suaves; las etiquetas de Larva/Crisálida se imprimen sobre papeles claros de colores sin oscurecer los otros componentes. «Un vínculo posible» recibe bocetos de la estudiante desde la capa exterior y matices leves en las tarjetas próximas. Verificado: cuatro conexiones, contraste sin incidencias, ambos caminos funcionales, sin errores JavaScript; desborde de 6px a 1000px corregido y vuelto a verificar.


Los ocho dibujos de síntesis de podcast y artefacto adoptan la estética sketchbook de las escenas educativas: lápiz, retratos y recortes de papel texturados. Se conservan los SVG originales como referencia; la nueva hoja de escenas se monta mediante CSS con dos columnas y cuatro filas. Mantiene las cuatro composiciones y todos los textos y movimientos existentes. «Tus notas del recorrido» tiene fondo rosado opaco, borde y botón ciruela. Validación: 16 representaciones (escritorio/móvil), contraste sin incidencias, sin desbordes a 320,390,768,1000,1440px, lectura estática en movimiento reducido y sin errores JavaScript.


Entrada directa: se retiran del recorrido la portada y todas las pantallas introductorias previas. El primer bloque es ahora la animación de hilos con «Bienvenidos/as a “El poder de la metáfora”». Conserva la tarjeta de audio y lectura que aparece tras formarse la larva. Los controles de guardar/retomar se trasladan a un desplegable en Tus notas. Las notas opcionales se condensan a la derecha en desplegables accesibles, sin duplicar campos ni perder texto al cerrar; el rótulo «Con texto» indica contenido escrito. Los tres personajes se montan detrás de «Un caso, tres voces». Las seis piezas de Larva tienen nombre y explicación sobre una sola superficie de papel de color, sin caja blanca; el diseño intermedio de 800px se ajusta a una cuadrícula estática. Validación: entrada primera en DOM, una bienvenida h1, un audio de entrada, guardado local operativo, cierre y reapertura de notas sin pérdida, ambas ramas, contraste sin incidencias, sin errores JS ni desbordes a 320–1440px.


La entrada abre solo con los hilos en movimiento: se retiran la bienvenida y los rótulos visuales del inicio. Conserva descripción accesible de la escena y la tarjeta de escucha/lectura posterior. Verificado: sin bienvenida visible, 17 trazos y un audio de entrada, sin errores JavaScript.
