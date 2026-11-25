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
 function mountDesignQuestions(){
  const box=document.querySelector('.blackbox-core'),map=document.querySelector('.blackbox-map');if(!box||!map)return;
  const layer=box.closest('.layer-blackbox');if(layer)layer.dataset.autoOpened='true';
  box.classList.remove('box-open');box.querySelector('.box-open-button')?.remove();box.querySelector('.box-discovery')?.remove();
  const theatre=box.querySelector('.box-theatre');
  if(theatre){const illustration=document.createElement('div');illustration.className='box-theatre design-question-illustration';illustration.setAttribute('aria-hidden','true');const art=theatre.querySelector('.scrap-box-stage');if(art)illustration.append(art);theatre.replaceWith(illustration);}
  map.classList.add('design-questions-map');
  const stack=document.createElement('div');stack.className='design-question-stack';map.append(stack);
  const cards=[...map.querySelectorAll('.blackbox-node')];
  cards.forEach((card,i)=>{
   card.classList.add('design-question-card');card.dataset.designQuestion=String(i);card.open=false;
   card.querySelector(':scope>summary>p')?.remove();card.querySelector('.case-question-toggle')?.remove();
   card.querySelectorAll('.notebook-entry').forEach(button=>button.remove());stack.append(card);
  });
  map.querySelector('figcaption')?.remove();document.querySelector('.blackbox-reading')?.remove();
  const caption=document.createElement('figcaption');caption.id='blackbox-caption';caption.textContent='Estas preguntas orientan la investigación del caso y las decisiones de diseño.';map.append(caption);
  let queued=false;const revealed=new Set();
  function update(){
   queued=false;const bounds=map.getBoundingClientRect();if(!map.getClientRects().length||bounds.top>innerHeight*.85||bounds.bottom<100)return;
   box.classList.add('box-open');let active=0;const target=innerHeight*.42;
   cards.forEach((card,i)=>{if(card.getBoundingClientRect().top<=target)active=i;});
   cards.forEach((card,i)=>{card.classList.toggle('is-current',i===active);if(i<=active&&!revealed.has(i)){revealed.add(i);card.open=true;card.classList.add('is-revealed');}});
   box.dataset.currentQuestion=String(active+1);
  }
  function schedule(){if(!queued){queued=true;requestAnimationFrame(update);}}
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);
  map.closest('details')?.addEventListener('toggle',schedule);cards.forEach(card=>card.addEventListener('toggle',schedule));schedule();
 }
 mountDesignQuestions();
 document.querySelectorAll('.larva-connection-question,.larva-metaphor-bridge,.icon-thought,.blackbox-node h4,.research-cycle-node h4,.river-stop-question').forEach(el=>el.classList.add('journey-question'));
 const openOnScroll=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;entry.target.open=true;openOnScroll.unobserve(entry.target);}},{rootMargin:'0px 0px -12% 0px',threshold:0});
 function observeReadings(){main.querySelectorAll('details:not([data-scroll-reading]):not(.design-question-card)').forEach(detail=>{detail.dataset.scrollReading='true';openOnScroll.observe(detail);});}
 observeReadings();
 new MutationObserver(()=>{flattenNotes();observeReadings();}).observe(main,{childList:true,subtree:true});
 // Una activación conserva un cambio visible sin alterar los textos ni sus valores guardados.
 document.addEventListener('click',event=>{const element=event.target.closest('.meta-labels li,.ink-node,.pair-options button,.relation-choice');if(element)element.classList.add('is-connected');});
})();
