# Notas personales del recorrido

El botón lateral «Abrir mis notas» reúne las notas existentes de ambos caminos y agrega una nota libre. Funciona localmente sin configurar una base de datos. La copia local y la descarga siguen disponibles si Supabase falla.

## Activar la conexión

1. Usar un proyecto de Supabase del equipo. Ejecutar `notas.sql` en su editor SQL: crea `metafora_notes` con RLS y políticas por `auth.uid()`. No desactivar RLS.
2. Habilitar Email en Authentication > Providers. Configurar el correo de salida del proyecto para producción.
3. En Authentication > URL Configuration, autorizar `https://pedflacso.github.io/elpoderdelametafora/` y `https://pedflacso.github.io/elpoderdelametafora/version-1-autoasistida/` como destinos de redirección según las rutas publicadas. El ingreso por enlace usa PKCE y debe abrirse en el mismo navegador que lo solicitó.
4. Completar `version-1-autoasistida/notas/config.js` con la URL y la clave pública publishable (o anon) del proyecto. Nunca incluir `service_role`, contraseña de base de datos ni credenciales de administración. Para GitHub Pages, publicar también los archivos de `notas/` en la raíz que sirve `gh-pages`.
5. Verificar con dos cuentas reales: una debe poder guardar y recuperar sus notas y no acceder a las de la otra. Probar también sin sesión, cierre de sesión y desconexión. Esta comprobación necesita el proyecto real; las pruebas locales simuladas no la reemplazan.

No hay proyecto ni credenciales de Supabase configurados todavía. Mientras `config.js` esté vacío, no se carga el SDK, no se ofrecen controles de nube y no se envía ninguna nota fuera del navegador.

## Comportamiento

- El guardado local existente se conserva. Abrir el panel no cambia de camino ni borra lo escrito en el otro.
- Las copias en la cuenta son explícitas: «Guardar copia en mi cuenta» y «Recuperar copia de mi cuenta». No hay sincronización automática ni combinación de cambios entre dispositivos.
- Recuperar requiere confirmación para evitar perder notas locales; además se conserva una copia local previa con el sufijo `-before-cloud-restore`.
- Cerrar sesión no borra las notas locales. El panel lo informa; se pueden borrar desde el control del inicio. La descarga incluye la nota libre.
- La base contiene una fila por usuario, con sus notas y el estado necesario para retomar el recorrido. No está conectada a Moodle ni publica notas a otros participantes.

SDK local: `@supabase/supabase-js` 2.90.1, empaquetado con esbuild 0.25.12, IIFE `MetaforaSupabase`. Se carga solo cuando se configura el proyecto. Las licencias del SDK y sus dependencias se incluyen en `notas/LICENCIAS.txt`.
