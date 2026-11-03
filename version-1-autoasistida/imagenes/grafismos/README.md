# Grafismos de las cuatro etapas

Imágenes de montaje elaboradas a partir de los cuatro grafismos de tinta compartidos por el equipo en el chat: Larva, Crisálida, Eclosión y Mariposa. El fondo de papel se retiró con la herramienta de edición de imágenes. Se conservaron versiones PNG en `/workspace/generated_images` y se incorporaron WebP de alta calidad para la web. Estas son versiones de montaje; los archivos originales compartidos en el chat siguen siendo la referencia artística.

Los hilos coloreados son SVG independientes de las imágenes. Las etiquetas y definiciones son HTML en Roboto; no dependen de la legibilidad de la caligrafía del grafismo. En Mariposa la tinta se presenta clara mediante CSS para contrastar con el lienzo oscuro. La interacción resalta los hilos y las etiquetas correspondientes, sin alterar la imagen.

La animación de los hilos acompaña el scroll, sin reproducción automática de audio ni ocultación de textos. Con movimiento reducido, se muestran las conexiones completas. El mapa final recupera las cuatro imágenes. Las rutas, descripciones y pies se editan en `inkArt` del JSON del HTML.

Se redujo el peso conjunto de los WebP de aproximadamente 3,6 MB a 1,9 MB. Los nombres incluyen una huella de contenido para distinguir las versiones y evitar reutilizar archivos antiguos. Larva se precarga; Larva y Crisálida se solicitan desde el inicio.

La versión activa utiliza ahora los PNG originales de montaje, conservando los WebP anteriores. El manifiesto describe los PNG activos.

## Reemplazo del 3 de noviembre de 2026

Se utilizan ahora las cuatro versiones de montaje preparadas a partir de las nuevas láminas compartidas: larva sobre una rama, crisálida cerrada, crisálida que deja ver las alas y mariposa de alas abiertas. La separación se realizó con la herramienta de edición de imágenes; no se afirma identidad píxel a píxel con los originales. Los PNG separados se conservan con su huella de contenido en este directorio y el HTML los incorpora para evitar fallos de carga. El manifiesto describe estos archivos activos.

Se conservan los blancos interiores y los trazos negros, también en Mariposa y el cierre. La coloración de las alas en Eclosión se adapta a la zona inferior del dibujo, preservando el trazo mediante mezcla de color. Se mantienen los hilos y las etiquetas interactivas como elementos independientes.

## Grafismos suaves seleccionados

La autora seleccionó la lámina de cuatro figuras con escritura interior suave y superpuesta (`lamina-grafismos-suaves.png`). Cada figura se presenta mediante un SVG que recorta una región de esa misma lámina y separa la tinta del fondo en el renderizado. Se conserva el PNG íntegro; no se generan nuevos dibujos ni se agregan palabras interiores. La franja de palabras de la muestra queda fuera de los recortes. Las palabras y etiquetas exteriores del módulo conservan su contenido y disposición.

La tinta se presenta oscura en Larva, Crisálida y Eclosión y clara en Mariposa y el cierre. La tinta interior hace de sombra; se desactiva el relleno plano de alas que usaban las ilustraciones previas. Los hilos, botones y notas mantienen sus interacciones.
