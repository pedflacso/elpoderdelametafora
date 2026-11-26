# Ajustes del río y de las relaciones entre componentes

## Colores de los vínculos

Cada uno de los cuatro vínculos de Mariposa tiene una paleta: ocre, azul, verde y rosa. Al seleccionar uno, su color se aplica a las etiquetas de los dos componentes conectados, sus líneas y el borde/título de la explicación. La selección mantiene además subrayado, borde y `aria-pressed`; el color no es el único indicador. La activación por teclado conserva el mismo comportamiento.

Se retiró el círculo central de la ilustración de Larva. Permanecen los extremos de los vínculos y las líneas parten de distintos puntos del cuerpo.

## Carrusel de los componentes de la metáfora del río

El bloque de seis componentes se presenta como un carrusel con una tarjeta visible por vez. Conserva los textos de Propósito, Contenidos, Actividades, Recursos, Orientaciones y Retroalimentación. El scroll vertical normal avanza y retrocede entre las tarjetas mientras la escena permanece a la vista; no se captura la rueda ni se exige pulsar botones.

También ofrece anterior/siguiente, flechas del teclado, Inicio/Fin y gesto horizontal sobre la tarjeta. No tiene reproducción automática. El indicador anuncia la posición y la barra muestra el avance. El recorrido narrativo del río, con sus cuatro paradas, sigue desplegándose por scroll y conserva su contenido.

## Continuidad del fondo

La franja clara antes de «El caso» provenía de un margen inferior de 16 píxeles en la invitación a investigar. Se eliminó ese margen para que los dos fondos de Eclosión se encuentren sin una separación involuntaria.

## Verificación

- `documentacion/pruebas/colores-vinculos.cjs`: cuatro paletas sincronizadas entre botones, componentes, líneas y explicación; teclado; ausencia del punto central.
- `documentacion/pruebas/carrusel-componentes-rio.cjs`: seis componentes, avance por scroll y rueda, botones y teclado; continuidad del fondo; escritorio y móvil.
- Pruebas existentes del caso y del cuaderno para comprobar continuidad del recorrido y persistencia de notas.
