/* Cuaderno con guardado en este navegador y descarga de las notas. */
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
 <div class="notebook-toolbar"><p id="my-notes-local-status" class="notes-status" role="status"></p></div>
 <div class="notebook-spread"><nav id="notebook-tabs" class="notebook-tabs" role="tablist" aria-label="Páginas de mi cuaderno"></nav><section id="notebook-page" class="notebook-page" role="tabpanel" tabindex="0"></section></div>
 <details class="notebook-all"><summary>Leer todas mis notas juntas</summary><pre id="my-notes-content"></pre></details>
 <div class="notes-actions"><button type="button" id="my-notes-download">Descargar mi cuaderno</button></div>
`;
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
   area.addEventListener('input',()=>{bridge.setEntry(entry.key,area.value);refresh();});page.append(label,area);
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
})();
