# Cuaderno de notas

## Funcionamiento vigente

Por decisión del equipo, el cuaderno funciona con **guardado en el navegador y descarga**, sin ingreso por correo, cuentas ni recuperación entre dispositivos. Se retiraron el bloque «Guardar y recuperar mi cuaderno», sus formularios y el acceso a la cuenta.

- El botón lateral abre un único cuaderno con las consignas vigentes del recorrido.
- Los recuadros de las actividades conservan la consigna y un enlace a la página correspondiente del cuaderno. Toda la escritura se hace allí.
- Las notas se guardan automáticamente en este navegador cuando permite almacenamiento local. El estado del guardado se muestra en el cuaderno.
- «Descargar mi cuaderno» reúne lo escrito, incluidas las notas de ambos caminos.
- El guardado usa el mismo identificador de la versión anterior. No se eliminaron notas existentes. Los textos de los antiguos campos `free-note` y `larva-note` se conservan para su descarga, sin volver a ofrecer esos campos.
- El sitio ya no carga la configuración ni el SDK de Supabase y no envía notas a servicios externos.

## Integración anterior conservada

La tabla `public.metafora_notes` y sus políticas privadas se crearon anteriormente en el proyecto `pedflacsometafora` (`wwmwmadbiaktsmctfjnk`). No se modificaron ni borraron la tabla, sus políticas, usuarios o datos al retirar el bloque de cuenta. `notas.sql`, `notas/config.js` y el SDK local se conservan como antecedentes; no están conectados al flujo vigente.

Embeber el sitio en Moodle mediante un iframe no comparte automáticamente la identidad ni el almacenamiento del usuario con una pestaña independiente del sitio.

## Verificación

Se comprobó en escritorio y móvil que no hay bloque de cuenta, formulario de correo ni solicitudes a Supabase; la escritura en el cuaderno, la persistencia después de recargar y la descarga siguen funcionando.

Las correcciones visuales del caso y del reencuentro permanecen en `version-1-autoasistida/ajustes-recorrido.css`.
