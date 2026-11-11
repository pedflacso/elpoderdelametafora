/* Las notas locales siguen disponibles aunque no haya conexión a Supabase. */
(()=>{
 'use strict';
 const bridge=window.metaforaNotes;if(!bridge)return;
 const launcher=document.createElement('button');launcher.type='button';launcher.className='notes-launcher';launcher.id='open-my-notes';launcher.textContent='Abrir mis notas';launcher.setAttribute('aria-haspopup','dialog');launcher.setAttribute('aria-controls','my-notes');
 const panel=document.createElement('dialog');panel.id='my-notes';panel.className='notes-dialog';panel.setAttribute('aria-labelledby','my-notes-title');
 panel.innerHTML=`<header><h2 id="my-notes-title">Mis notas</h2><button type="button" id="close-my-notes" autofocus>Cerrar</button></header>
 <p>Reuní tus ideas y volvé a lo que anotaste en cualquiera de los dos caminos.</p>
 <label for="free-note">Una nota para seguir pensando</label><textarea id="free-note" placeholder="Podés anotar una idea o una pregunta…"></textarea>
 <p id="my-notes-local-status" class="notes-status" role="status"></p>
 <h3>Lo que escribiste en el recorrido</h3><pre id="my-notes-content"></pre>
 <div class="notes-actions"><button type="button" id="my-notes-download">Descargar mis notas</button></div>
 <section id="notes-cloud" class="notes-cloud" hidden aria-labelledby="notes-cloud-title"><h3 id="notes-cloud-title">Mis notas entre dispositivos</h3>
 <p>Si querés conservar una copia en tu cuenta, ingresá con tu correo. Solo vos podés acceder a tus notas desde el sitio. La copia de este navegador se guarda por separado.</p>
 <form id="notes-login"><label for="notes-email">Tu correo</label><input id="notes-email" type="email" autocomplete="email" required><div class="notes-actions"><button type="submit">Recibir enlace de ingreso</button></div></form>
 <div id="notes-account" hidden><p id="notes-identity"></p><div class="notes-actions"><button type="button" id="notes-upload">Guardar copia en mi cuenta</button><button type="button" id="notes-fetch">Recuperar copia de mi cuenta</button><button type="button" id="notes-logout">Cerrar sesión</button></div></div>
 <div id="notes-restore-confirm" hidden><p>Recuperar esta copia reemplaza las notas actuales de este navegador. Descargá tus notas si querés conservarlas también.</p><div class="notes-actions"><button type="button" id="notes-restore">Sí, recuperar esta copia</button><button type="button" id="notes-restore-cancel">Conservar mis notas actuales</button></div></div>
 <p id="notes-cloud-status" class="notes-status" role="status"></p></section>`;
 document.body.append(launcher,panel);
 const q=id=>panel.querySelector('#'+id),content=q('my-notes-content'),localStatus=q('my-notes-local-status');
 function refresh(){content.textContent=bridge.text()||'Todavía no escribiste notas. Podés empezar acá o en los espacios del recorrido.';localStatus.textContent=document.getElementById('storage-status')?.textContent||'';}
 launcher.onclick=()=>{q('free-note').value=bridge.freeNote();refresh();panel.showModal();};
 q('close-my-notes').onclick=()=>panel.close();panel.addEventListener('close',()=>launcher.focus({preventScroll:true}));
 q('free-note').addEventListener('input',e=>{bridge.setFreeNote(e.target.value);refresh();});
 q('my-notes-download').onclick=()=>{if(!bridge.text().trim()){localStatus.textContent='Todavía no hay notas para descargar.';return;}bridge.download();localStatus.textContent='La descarga de tus notas está preparada.';};
 new MutationObserver(()=>{if(panel.open)refresh();}).observe(document.getElementById('storage-status'),{childList:true,subtree:true,characterData:true});
 const config=window.METAFORA_SUPABASE;
 if(!config?.url||!config?.publishableKey)return;
 const cloud=q('notes-cloud'),status=q('notes-cloud-status');cloud.hidden=false;
 // Load the local SDK only for a configured project.
 const sdk=document.createElement('script');sdk.src='notas/supabase.js';sdk.onload=connect;sdk.onerror=()=>status.textContent='No se pudo abrir la conexión. Tus notas siguen disponibles en este navegador.';document.head.append(sdk);
 async function connect(){
  let client,session=null,busy=false,pending=null;
  try{client=window.MetaforaSupabase.createClient(config.url,config.publishableKey,{auth:{flowType:'pkce',detectSessionInUrl:true,persistSession:true,autoRefreshToken:true}});}catch{status.textContent='No se pudo configurar la conexión. Tus notas siguen disponibles en este navegador.';return;}
  function identity(current){session=current;pending=null;q('notes-restore-confirm').hidden=true;q('notes-login').hidden=!!session;q('notes-account').hidden=!session;q('notes-identity').textContent=session?'Conectada tu cuenta: '+session.user.email:'';}
  async function operation(action){if(busy)return;busy=true;panel.querySelectorAll('#notes-cloud button').forEach(b=>b.disabled=true);try{await action();}catch{status.textContent='No se pudo completar la operación. Tus notas locales se conservan. Podés volver a intentarlo.';}finally{busy=false;panel.querySelectorAll('#notes-cloud button').forEach(b=>b.disabled=false);}}
  const result=await client.auth.getSession();if(result.error)status.textContent='No se pudo recuperar la sesión. Podés volver a ingresar.';identity(result.data.session);
  client.auth.onAuthStateChange((_event,current)=>identity(current));
  q('notes-login').onsubmit=e=>{e.preventDefault();operation(async()=>{const email=q('notes-email').value.trim();const redirect=new URL(location.href);redirect.hash='';redirect.search='';const {error}=await client.auth.signInWithOtp({email,options:{emailRedirectTo:redirect.href}});if(error)throw error;status.textContent='Revisá tu correo y abrí el enlace en este navegador para ingresar.';});};
  q('notes-upload').onclick=()=>operation(async()=>{const owner=session?.user.id;if(!owner)throw Error('Sesión requerida');const {error}=await client.from('metafora_notes').upsert({user_id:owner,notes:bridge.snapshot(),updated_at:new Date().toISOString()},{onConflict:'user_id'});if(error)throw error;status.textContent='Guardamos una copia de tus notas en tu cuenta.';});
  q('notes-fetch').onclick=()=>operation(async()=>{const owner=session?.user.id;if(!owner)throw Error('Sesión requerida');const {data,error}=await client.from('metafora_notes').select('notes,updated_at').eq('user_id',owner).maybeSingle();if(error)throw error;if(!session||session.user.id!==owner)return;if(!data){status.textContent='Todavía no hay una copia guardada en tu cuenta.';return;}pending={owner,notes:data.notes};q('notes-restore-confirm').hidden=false;status.textContent='Encontramos tu copia. Confirmá si querés recuperarla.';});
  q('notes-restore').onclick=()=>{if(!pending||pending.owner!==session?.user.id)return;try{bridge.restore(pending.notes);}catch{status.textContent='No se pudo recuperar la copia. Tus notas actuales se conservan.';}};
  q('notes-restore-cancel').onclick=()=>{pending=null;q('notes-restore-confirm').hidden=true;status.textContent='Conservamos las notas de este navegador.';};
  q('notes-logout').onclick=()=>operation(async()=>{const {error}=await client.auth.signOut();if(error)throw error;identity(null);status.textContent='Cerraste sesión. La copia local sigue en este navegador; podés borrarla desde el inicio del recorrido.';});
 }
})();
