/* Ajustes editoriales de la reunión de noviembre: una lectura continua y un cuaderno. */
(()=>{
 'use strict';
 const main=document.getElementById('main');if(!main)return;
 const introduction=document.querySelector('.entry-notebook');
 if(introduction){
  const section=document.createElement('section');section.className='notebook-introduction';section.setAttribute('aria-labelledby','cuaderno-presentacion-title');
  const cover=document.createElement('button');cover.type='button';cover.className='notebook-cover-action';cover.dataset.notePage='ideas';cover.setAttribute('aria-haspopup','dialog');cover.setAttribute('aria-controls','my-notes');
  cover.append(...introduction.querySelector('summary').childNodes);
  cover.querySelector('.cover-prompt').textContent='Abrir mi cuaderno';
  const hand=document.createElement('img');hand.src='imagenes/scrap/mano-escritura.png';hand.alt='';hand.className='cover-writing-hand';hand.width=100;hand.height=68;cover.querySelector('.cover-label h2').after(hand);
  const description=introduction.querySelector('.notebook-pages>p');
  section.append(cover);if(description)section.append(description);introduction.replaceWith(section);
 }
 function flattenNotes(){
  main.querySelectorAll('details.note-dock,details.reflection-note-entry').forEach(detail=>{
   const sheet=document.createElement('section');sheet.className=detail.className+' notebook-prompt-sheet';
   const summary=detail.querySelector(':scope>summary'),heading=document.createElement('h4');
   heading.textContent=summary?.querySelector('strong')?.textContent||'Mi cuaderno de notas';sheet.append(heading);
   const body=detail.querySelector('.note-body,.reflection-body');if(body)sheet.append(...body.childNodes);
   detail.replaceWith(sheet);
  });
  main.querySelectorAll('.notebook-entry:not([data-paper-entry])').forEach(button=>{button.dataset.paperEntry='true';});
 }
 flattenNotes();
 main.querySelectorAll('.crisalida-notebook,.curation-notebook').forEach(el=>el.classList.add('notebook-prompt-sheet'));
 const box=document.querySelector('.blackbox-core');if(box){box.classList.add('box-open');const layer=box.closest('.layer-blackbox');if(layer)layer.dataset.autoOpened='true';const disclosure=box.querySelector('.box-discovery');if(disclosure)disclosure.hidden=false;box.querySelector('.box-open-button')?.remove();}
 const theatre=document.querySelector('.box-theatre');if(theatre){theatre.removeAttribute('tabindex');theatre.setAttribute('role','img');theatre.setAttribute('aria-label','Los componentes del diseño desplegados');}
 const intro=document.querySelector('.blackbox-intro');if(intro)intro.textContent='Estas preguntas son una brújula para la investigación. Mirá cómo se relacionan el propósito de enseñanza, los contenidos, los recursos, la actividad, las orientaciones y la retroalimentación. Vas a recorrer el objeto y el aula del caso y volver sobre tus ideas en el cuaderno.';
 const titles=['Propósitos y contenidos','Actividad y recorrido','Recursos y relaciones','Orientaciones y retroalimentación'];
 document.querySelectorAll('.blackbox-node-heading>span:last-child').forEach((el,i)=>{el.textContent=titles[i]||el.textContent;});
 document.querySelectorAll('.larva-connection-question,.larva-metaphor-bridge,.icon-thought,.blackbox-node h4,.research-cycle-node h4,.river-stop-question').forEach(el=>el.classList.add('journey-question'));
 const openOnScroll=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;entry.target.open=true;openOnScroll.unobserve(entry.target);}},{rootMargin:'0px 0px -12% 0px',threshold:0});
 function observeReadings(){main.querySelectorAll('details:not([data-scroll-reading])').forEach(detail=>{detail.dataset.scrollReading='true';openOnScroll.observe(detail);});}
 observeReadings();
 new MutationObserver(()=>{flattenNotes();observeReadings();}).observe(main,{childList:true,subtree:true});
 // Una activación conserva un cambio visible sin alterar los textos ni sus valores guardados.
 document.addEventListener('click',event=>{const element=event.target.closest('.meta-labels li,.ink-node,.pair-options button,.relation-choice');if(element)element.classList.add('is-connected');});
})();
