# Revisión responsiva y alternativa de caja

Se revisó en Chromium con emulación táctil, además de escritorio con mouse. No sustituye una prueba en un teléfono físico o Safari.

Tamaños: 320×740, 360×800, 390×844, 430×932, 768×1024, 844×390, 1024×768 y 1440×900.

## Ajustes

- El mapa táctil se integra en la cabecera y no cubre el borde inferior de las tarjetas. Se oculta al enfocar un campo de notas.
- Las seis etiquetas de la caja pasan a una grilla bajo la imagen, con texto de aproximadamente 15px y ajuste del nombre largo en pantallas pequeñas.
- La navegación de Crisálida distribuye sus tres controles en columnas iguales; cada botón tiene al menos 48px de alto.
- Se ajustan proporciones del gráfico de Larva, márgenes del cierre, espacios de los reproductores y la disposición de retratos y notas.
- Se mantienen texto completo, ramas, audios, bocetos y la preferencia de movimiento reducido.

## Validación

Sin desbordamiento horizontal en los tamaños indicados. Contraste automático sin incidencias. Sin errores JavaScript. Se comprobó la apertura de las seis etiquetas, notas retenidas al cerrar y reabrir, primera interpretación, escritura de explicación, selección de voz/evidencia y consulta de Consigna en artefacto. El contenido JSON es idéntico al anterior.

## Caja alternativa

Añadir `?caja=archivo#blackbox-title` para ver la caja de archivo abierta, con tapa y acabado de grafito y papel. Es una comparación; la caja habitual permanece como opción predeterminada. Los mismos controles despliegan y reúnen las piezas en las dos vistas.
