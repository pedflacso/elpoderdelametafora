# Notas personales del recorrido

El botón lateral «Abrir mis notas» reúne las notas que tienen una consigna vigente en el recorrido. Funciona localmente sin configurar una base de datos. La copia local y la descarga siguen disponibles si Supabase falla.

## Activar la conexión

1. Usar un proyecto de Supabase del equipo. Ejecutar `notas.sql` en su editor SQL: crea `metafora_notes` con RLS y políticas por `auth.uid()`. No desactivar RLS.
2. Habilitar Email en Authentication > Providers. Configurar el correo de salida del proyecto para producción.
3. En Authentication > URL Configuration, autorizar `https://pedflacso.github.io/elpoderdelametafora/` y `https://pedflacso.github.io/elpoderdelametafora/version-1-autoasistida/` como destinos de redirección según las rutas publicadas. El ingreso por enlace usa PKCE y debe abrirse en el mismo navegador que lo solicitó.
4. Completar `version-1-autoasistida/notas/config.js` con la URL y la clave pública publishable (o anon) del proyecto. Nunca incluir `service_role`, contraseña de base de datos ni credenciales de administración. Para GitHub Pages, publicar también los archivos de `notas/` en la raíz que sirve `gh-pages`.
5. Verificar con dos cuentas reales: una debe poder guardar y recuperar sus notas y no acceder a las de la otra. Probar también sin sesión, cierre de sesión y desconexión. Esta comprobación necesita el proyecto real; las pruebas locales simuladas no la reemplazan.

Proyecto configurado: `pedflacsometafora` (`wwmwmadbiaktsmctfjnk`). La migración `create_private_metafora_notes` ya está aplicada y el sitio usa la clave pública publishable. La clave secreta no se incorporó al código. La persona responsable confirmó la configuración de Site URL y Redirect URLs para el sitio publicado.

## Comportamiento

- El guardado local existente se conserva. Abrir el panel no cambia de camino ni borra lo escrito en el otro.
- Las copias en la cuenta son explícitas: «Guardar copia en mi cuenta» y «Recuperar copia de mi cuenta». No hay sincronización automática ni combinación de cambios entre dispositivos.
- Recuperar requiere confirmación para evitar perder notas locales; además se conserva una copia local previa con el sufijo `-before-cloud-restore`.
- Cerrar sesión no borra las notas locales. El panel lo informa; se pueden borrar desde el control del inicio. La descarga incluye la nota libre.
- La base contiene una fila por usuario, con sus notas y el estado necesario para retomar el recorrido. No está conectada a Moodle ni publica notas a otros participantes.

SDK local: `@supabase/supabase-js` 2.90.1, empaquetado con esbuild 0.25.12, IIFE `MetaforaSupabase`. Se carga solo cuando se configura el proyecto. Las licencias del SDK y sus dependencias se incluyen en `notas/LICENCIAS.txt`.


## Cuaderno y acceso de cursantes

«Abrir mis notas» abre un cuaderno con páginas para ideas iniciales, el caso, Podcast, Artefacto y el objeto propio. Cada recuadro conserva la consigna concreta y un único enlace a la página correspondiente del cuaderno. La escritura se realiza solo en el cuaderno; no hay otros campos visibles ni vistas previas repetidas en las actividades. El botón cambia de «Escribir» a «Revisar» cuando ya hay una nota. El cuaderno no requiere iniciar sesión para escribir y descargar.

Para guardar en Supabase: abrir el cuaderno, ingresar el correo, recibir el enlace, abrirlo en el mismo navegador y pulsar «Guardar todas mis notas en mi cuenta». La acción guarda el snapshot completo, incluidas las notas de ambos caminos, las de transferencia y los textos conservados de versiones anteriores. Si se sigue editando, hay que pulsar nuevamente para actualizar la copia en la cuenta. El estado lo indica.

Para recuperar en otro dispositivo: abrir el sitio, abrir el cuaderno, ingresar con el mismo correo y pulsar «Recuperar mis notas». La recuperación pide confirmar antes de reemplazar la copia local y conserva una copia de respaldo previa.

Verificación de base de datos: políticas RLS probadas con dos identidades autenticadas y rol anónimo, dentro de una transacción revertida. Se comprobó lectura y escritura propias y denegación de lectura/escritura/borrado cruzados y acceso anónimo. No quedaron datos de prueba. La revisión de seguridad de Supabase no reportó incidencias. El envío y la apertura de un correo real requieren completar el ingreso de una persona; no se enviaron correos de prueba a cursantes.

## Correo institucional y Moodle

Remitente propuesto por el equipo: `ped@flacso.org.ar`. La dirección remitente no reemplaza la configuración del servicio SMTP. Para admitir correos de todos los cursantes, configurar un proveedor SMTP en Authentication > Email > SMTP Settings. Supabase limita su servicio de correo predeterminado a las direcciones del equipo del proyecto. No se verificó el servicio SMTP institucional ni la entrega de un correo real a cursantes.

Si el sitio se embebe en Moodle, el iframe no identifica al cursante. Para usar la sesión de Moodle sin otro ingreso se necesita un complemento o lanzamiento LTI validado por un servidor. Esa integración no está implementada y no debe simularse con un ID recibido por query string. La tabla actual se protege con Supabase Auth; no se publican tokens de administración.

## Ajustes de lectura

`version-1-autoasistida/ajustes-recorrido.css` contiene los cambios acotados de transiciones: escenas sucesivas en el caso; preguntas de la caja como tarjetas desplegables que abren el cuaderno; recorte del óvalo dentro de su figura antes del audio; ilustraciones de Podcast y Artefacto debajo de tarjetas opacas. Se verificaron con movimiento normal a 1260 px y 390 px de ancho, además del cuaderno en escritorio y móvil, con persistencia y exportación completas. El flujo PKCE, guardado, recuperación, cancelación y errores de conexión se probaron con respuestas simuladas de la API; las políticas de la base se probaron contra el proyecto real en una transacción revertida.

La actualización mantiene el mismo identificador de guardado local de la versión anterior. Se probó la recuperación de notas del caso, Podcast y Artefacto escritas con el HTML anterior. El cuaderno abre primero una página con notas y muestra cuántas hay en cada pestaña. El dibujo de la mano escribiendo y la paleta lavanda vinculan visualmente el botón lateral con las invitaciones del recorrido. Los recursos propios del cuaderno incluyen versión en sus URLs para evitar mezclar HTML y scripts de distintas publicaciones.

El apartado «La metáfora» del cuaderno muestra solo la asociación presente en el recorrido. Se retiraron los campos «Una nota para seguir pensando» y «Una relación que te gustaría construir». Los valores anteriores de `free-note` y `larva-note` se conservan en el snapshot y en la exportación, sin volver a ofrecer esos campos de escritura.
