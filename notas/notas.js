/* Las notas locales siguen disponibles aunque no haya conexión a Supabase. */
(()=>{
 'use strict';
 const bridge=window.metaforaNotes;if(!bridge)return;
 // Compatibility while a browser replaces a cached copy of the previous HTML.
 if(typeof bridge.pages!=='function')bridge.pages=()=>[{id:'ideas',title:'Mis notas',fields:[{key:'personal:free-note',label:'Una nota para seguir pensando',value:bridge.freeNote()}]}];
 if(typeof bridge.setEntry!=='function')bridge.setEntry=(key,value)=>{if(key==='personal:free-note')bridge.setFreeNote(value);};
 const launcher=document.createElement('button');launcher.type='button';launcher.className='notes-launcher';launcher.id='open-my-notes';launcher.innerHTML='<img class="notebook-launcher-art" src="imagenes/scrap/mano-escritura.png" alt="" aria-hidden="true" width="52" height="36"><span>Abrir mis notas</span>';launcher.setAttribute('aria-haspopup','dialog');launcher.setAttribute('aria-controls','my-notes');
 const panel=document.createElement('dialog');panel.id='my-notes';panel.className='notes-dialog';panel.setAttribute('aria-labelledby','my-notes-title');
 panel.innerHTML=`<header><div><p class="notebook-eyebrow">EL PODER DE LA METÁFORA</p><h2 id="my-notes-title">Mi cuaderno de notas</h2></div><button type="button" id="close-my-notes" autofocus>Cerrar</button></header>
 <p class="notebook-intro">Un cuaderno para todo el recorrido. Las pestañas reúnen lo que escribís en cada tramo. Podés cambiar de página para volver a tus notas.</p>
 <div class="notebook-toolbar"><p id="my-notes-local-status" class="notes-status" role="status"></p><button type="button" id="notebook-account-jump" hidden>Guardar / recuperar en mi cuenta</button></div>
 <div class="notebook-spread"><nav id="notebook-tabs" class="notebook-tabs" role="tablist" aria-label="Páginas de mi cuaderno"></nav><section id="notebook-page" class="notebook-page" role="tabpanel" tabindex="0"></section></div>
 <details class="notebook-all"><summary>Leer todas mis notas juntas</summary><pre id="my-notes-content"></pre></details>
 <div class="notes-actions"><button type="button" id="my-notes-download">Descargar mi cuaderno</button></div>
 <section id="notes-cloud" class="notes-cloud" hidden aria-labelledby="notes-cloud-title"><h3 id="notes-cloud-title">Guardar y recuperar mi cuaderno</h3>
 <p>Para recuperar tu cuaderno desde otro dispositivo, ingresá con tu correo y abrí el enlace recibido. Después elegí «Recuperar mis notas». Tus notas son personales.</p>
 <form id="notes-login"><label for="notes-email">Tu correo</label><input id="notes-email" type="email" autocomplete="email" required><div class="notes-actions"><button type="submit">Recibir enlace de ingreso</button></div></form>
 <div id="notes-account" hidden><p id="notes-identity"></p><p>«Guardar todas mis notas» envía a tu cuenta una copia del cuaderno completo: ideas iniciales, el caso, ambos caminos y tu objeto. Si seguís escribiendo, volvé a guardarlo para actualizar esa copia.</p><div class="notes-actions"><button type="button" id="notes-upload">Guardar todas mis notas en mi cuenta</button><button type="button" id="notes-fetch">Recuperar mis notas</button><button type="button" id="notes-logout">Cerrar sesión</button></div></div>
 <div id="notes-restore-confirm" hidden><p>Recuperar esta copia reemplaza las notas actuales de este navegador. Descargá tus notas si querés conservarlas también.</p><div class="notes-actions"><button type="button" id="notes-restore">Sí, recuperar esta copia</button><button type="button" id="notes-restore-cancel">Conservar mis notas actuales</button></div></div>
 <p id="notes-cloud-status" class="notes-status" role="status"></p></section>`;
 document.body.append(launcher,panel);
 const q=id=>panel.querySelector('#'+id),content=q('my-notes-content'),localStatus=q('my-notes-local-status');
 function refresh(){content.textContent=bridge.text()||'Todavía no escribiste notas. Podés empezar acá o en los espacios del recorrido.';localStatus.textContent=document.getElementById('storage-status')?.textContent||'';for(const item of bridge.pages()){const button=q('notebook-tab-'+item.id);if(button){const count=item.fields.filter(field=>field.value.trim()).length;button.textContent=item.title+(count?' · '+count:'');button.setAttribute('aria-label',item.title+(count?', '+count+' notas escritas':''));}}}
 let activePage=null,opener=launcher;
 function preferredPage(){const pages=bridge.pages(),current=bridge.snapshot().branches?.path;return pages.find(p=>p.id===current&&p.fields.some(f=>f.value.trim()))?.id||pages.find(p=>p.fields.some(f=>f.value.trim()))?.id||pages[0].id;}
 const tabs=q('notebook-tabs'),page=q('notebook-page');
 function renderPage(id){
  const pages=bridge.pages(),selected=pages.find(p=>p.id===id)||pages[0];activePage=selected.id;
  tabs.replaceChildren();page.replaceChildren();
  for(const item of pages){const button=document.createElement('button');button.type='button';button.role='tab';button.id='notebook-tab-'+item.id;button.dataset.page=item.id;button.setAttribute('aria-controls','notebook-page');button.setAttribute('aria-selected',String(item.id===selected.id));button.tabIndex=item.id===selected.id?0:-1;const count=item.fields.filter(field=>field.value.trim()).length;button.textContent=item.title+(count?' · '+count:'');button.setAttribute('aria-label',item.title+(count?', '+count+' notas escritas':''));button.onclick=()=>{renderPage(item.id);q('notebook-tab-'+item.id).focus();};tabs.append(button);}
  page.setAttribute('aria-labelledby','notebook-tab-'+selected.id);
  const title=document.createElement('h3');title.textContent=selected.title;page.append(title);
  for(const [index,entry] of selected.fields.entries()){
   const label=document.createElement('label'),area=document.createElement('textarea');area.id=entry.key==='personal:free-note'?'free-note':'notebook-field-'+index;label.htmlFor=area.id;label.textContent=entry.label;area.value=entry.value;area.dataset.noteKey=entry.key;area.placeholder=entry.placeholder||'Escribí acá…';area.rows=4;
   area.addEventListener('input',()=>{bridge.setEntry(entry.key,area.value);refresh();if(q('notes-account').hidden===false)q('notes-cloud-status').textContent='Hay cambios en este navegador. Para enviarlos a tu cuenta, elegí «Guardar todas mis notas». ';});page.append(label,area);
  }
 }
 function openNotebook(id='ideas',trigger=launcher){opener=trigger;renderPage(id);refresh();panel.scrollTop=0;if(!panel.open)panel.showModal();}
 launcher.onclick=()=>openNotebook(activePage||preferredPage(),launcher);
 q('close-my-notes').onclick=()=>panel.close();panel.addEventListener('close',()=>opener?.isConnected?opener.focus({preventScroll:true}):launcher.focus({preventScroll:true}));
 tabs.addEventListener('keydown',event=>{const buttons=[...tabs.querySelectorAll('[role="tab"]')],i=buttons.indexOf(document.activeElement);if(i<0)return;let next;if(event.key==='ArrowRight')next=(i+1)%buttons.length;else if(event.key==='ArrowLeft')next=(i+buttons.length-1)%buttons.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=buttons.length-1;else return;event.preventDefault();const id=buttons[next].dataset.page;renderPage(id);q('notebook-tab-'+id).focus();});
 document.addEventListener('click',event=>{const trigger=event.target.closest('[data-note-page]');if(!trigger)return;event.preventDefault();openNotebook(trigger.dataset.notePage,trigger);const entry=trigger.dataset.noteEntry;if(entry){const area=[...page.querySelectorAll('textarea')].find(area=>area.dataset.noteKey===entry);if(area){area.focus({preventScroll:true});area.scrollIntoView({block:'center'});}}},true);
 const originalPages={'larva-note':'ideas','association-note':'ideas','case-first-note':'caso','need-note':'objeto','organize-note':'objeto','contrast-note':'podcast','relation-note':'artefacto','explanation':null};
 function noteKey(id){if(id==='explanation')return 'branch:'+bridge.snapshot().branches.path+':explanation';if(id==='contrast-note')return 'branch:podcast:note';if(id==='relation-note')return 'branch:artefacto:relationNote';return 'personal:'+id;}
 function refreshInlineStates(){for(const id of Object.keys(originalPages)){
  const area=document.getElementById(id),button=document.getElementById('linked-open-'+id);if(!area||!button)continue;
  const value=area.value.trim(),action=id==='explanation'?'mi explicación':id==='case-first-note'?'mi primera interpretación':'esta nota';
  const label=(value?'Revisar ':'Escribir ')+action+' en el cuaderno';if(button.textContent!==label)button.textContent=label;
  const reflection=area.closest('.reflection-note-entry')?.querySelector('.reflection-note-status');if(reflection&&reflection.textContent!==(value?'En el cuaderno':''))reflection.textContent=value?'En el cuaderno':'';
 }}
 function mountNotebookEntries(){for(const [id,fixedPage] of Object.entries(originalPages)){
  const area=document.getElementById(id);if(!area||area.closest('#my-notes')||area.dataset.notebookEntry)continue;
  area.dataset.notebookEntry='true';area.hidden=true;const targetPage=fixedPage||bridge.snapshot().branches.path;
  const originalLabel=document.querySelector('label[for="'+id+'"]');if(originalLabel){originalLabel.hidden=true;if(id!=='explanation'){const prompt=document.createElement('p');prompt.className='note-linked-prompt';prompt.textContent=originalLabel.textContent;area.before(prompt);}}
  const actions=document.createElement('div');actions.className='note-linked-actions';
  const open=document.createElement('button');open.id='linked-open-'+id;open.type='button';open.className='notebook-entry';open.dataset.notePage=targetPage;open.dataset.noteEntry=noteKey(id);open.setAttribute('aria-haspopup','dialog');open.setAttribute('aria-controls','my-notes');
  area.addEventListener('input',refreshInlineStates);actions.append(open);area.after(actions);
  if(id==='explanation'){for(const element of ['copy','copy-status','privacy']){const el=document.getElementById(element);if(el)el.hidden=true;}const headerAction=area.closest('.reflection-note-entry')?.querySelector('.reflection-entry-action');if(headerAction)headerAction.hidden=true;}
 }
 document.querySelectorAll('.note-body p.small').forEach(p=>{if(p.textContent.includes('Tus notas se reúnen')||p.textContent.includes('Las notas pueden guardarse'))p.hidden=true;});
 refreshInlineStates();}
 mountNotebookEntries();new MutationObserver(mountNotebookEntries).observe(document.getElementById('main'),{childList:true,subtree:true});
 q('my-notes-download').onclick=()=>{if(!bridge.text().trim()){localStatus.textContent='Todavía no hay notas para descargar.';return;}bridge.download();localStatus.textContent='La descarga de tus notas está preparada.';};
 new MutationObserver(()=>{if(panel.open)refresh();refreshInlineStates();}).observe(document.getElementById('storage-status'),{childList:true,subtree:true,characterData:true});
 const authReturn=new URLSearchParams(location.search).has('code')||new URLSearchParams(location.hash.slice(1)).has('error_description');
 const config=window.METAFORA_SUPABASE;
 if(!config?.url||!config?.publishableKey)return;
 const cloud=q('notes-cloud'),status=q('notes-cloud-status');cloud.hidden=false;
 q('notes-login').addEventListener('submit',event=>event.preventDefault());
 cloud.querySelectorAll('button').forEach(button=>button.disabled=true);
 q('notebook-account-jump').hidden=false;q('notebook-account-jump').onclick=()=>{cloud.scrollIntoView({block:'start'});if(!q('notes-login').hidden)q('notes-email').focus();else q('notes-upload').focus();};
 // Load the local SDK only for a configured project.
 const sdk=document.createElement('script');sdk.src='notas/supabase.js';sdk.onload=connect;sdk.onerror=()=>status.textContent='No se pudo abrir la conexión. Tus notas siguen disponibles en este navegador.';document.head.append(sdk);
 async function connect(){
  let client,session=null,busy=false,pending=null;
  try{client=window.MetaforaSupabase.createClient(config.url,config.publishableKey,{auth:{flowType:'pkce',detectSessionInUrl:true,persistSession:true,autoRefreshToken:true}});}catch{status.textContent='No se pudo configurar la conexión. Tus notas siguen disponibles en este navegador.';return;}
  function identity(current){session=current;pending=null;q('notes-restore-confirm').hidden=true;q('notes-login').hidden=!!session;q('notes-account').hidden=!session;q('notes-identity').textContent=session?'Conectada tu cuenta: '+session.user.email:'';}
  async function operation(action){if(busy)return;busy=true;panel.querySelectorAll('#notes-cloud button').forEach(b=>b.disabled=true);try{await action();}catch{status.textContent='No se pudo completar la operación. Tus notas locales se conservan. Podés volver a intentarlo.';}finally{busy=false;panel.querySelectorAll('#notes-cloud button').forEach(b=>b.disabled=false);}}
  const result=await client.auth.getSession();if(result.error)status.textContent='No se pudo recuperar la sesión. Podés volver a ingresar.';identity(result.data.session);
  if(authReturn){openNotebook(activePage||preferredPage());if(result.error)status.textContent='El enlace de ingreso no se pudo completar. Solicitá uno nuevo y abrilo en este mismo navegador.';else if(result.data.session)status.textContent='Ingresaste a tu cuenta. Podés guardar todo tu cuaderno o recuperar tus notas anteriores.';}
  client.auth.onAuthStateChange((_event,current)=>identity(current));
  q('notes-login').onsubmit=e=>{e.preventDefault();operation(async()=>{const email=q('notes-email').value.trim();const redirect=new URL(location.href);redirect.hash='';redirect.search='';const {error}=await client.auth.signInWithOtp({email,options:{emailRedirectTo:redirect.href}});if(error)throw error;status.textContent='Revisá tu correo y abrí el enlace en este navegador para ingresar.';});};
  q('notes-upload').onclick=()=>operation(async()=>{const owner=session?.user.id;if(!owner)throw Error('Sesión requerida');const {error}=await client.from('metafora_notes').upsert({user_id:owner,notes:bridge.snapshot(),updated_at:new Date().toISOString()},{onConflict:'user_id'});if(error)throw error;status.textContent='Tu cuaderno completo quedó guardado en tu cuenta. Podés recuperarlo al ingresar desde otro dispositivo.';});
  q('notes-fetch').onclick=()=>operation(async()=>{const owner=session?.user.id;if(!owner)throw Error('Sesión requerida');const {data,error}=await client.from('metafora_notes').select('notes,updated_at').eq('user_id',owner).maybeSingle();if(error)throw error;if(!session||session.user.id!==owner)return;if(!data){status.textContent='Todavía no hay una copia guardada en tu cuenta.';return;}pending={owner,notes:data.notes};q('notes-restore-confirm').hidden=false;status.textContent='Encontramos tu copia. Confirmá si querés recuperarla.';});
  q('notes-restore').onclick=()=>{if(!pending||pending.owner!==session?.user.id)return;try{bridge.restore(pending.notes);}catch{status.textContent='No se pudo recuperar la copia. Tus notas actuales se conservan.';}};
  q('notes-restore-cancel').onclick=()=>{pending=null;q('notes-restore-confirm').hidden=true;status.textContent='Conservamos las notas de este navegador.';};
  cloud.querySelectorAll('button').forEach(button=>button.disabled=false);
  q('notes-logout').onclick=()=>operation(async()=>{const {error}=await client.auth.signOut();if(error)throw error;identity(null);status.textContent='Cerraste sesión. La copia local sigue en este navegador; podés borrarla desde el inicio del recorrido.';});
 }
})();
