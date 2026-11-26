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
  const artwork=box.querySelector('.box-file-art');
  if(artwork){artwork.classList.add('design-box-body');const lid=artwork.cloneNode(false);lid.className='design-box-lid';lid.alt='';lid.setAttribute('aria-hidden','true');artwork.parentElement.append(lid);}
  map.classList.add('design-questions-map','design-question-flight');
  const stack=document.createElement('div');stack.className='design-question-stack';box.append(stack);
  const cards=[...map.querySelectorAll('.blackbox-node')];
  cards.forEach((card,i)=>{card.classList.add('design-question-card');card.dataset.designQuestion=String(i);card.open=true;card.inert=true;card.setAttribute('aria-hidden','true');card.querySelector(':scope>summary>p')?.remove();card.querySelector('.case-question-toggle')?.remove();card.querySelectorAll('.notebook-entry').forEach(button=>button.remove());stack.append(card);});
  map.querySelector('figcaption')?.remove();map.removeAttribute('aria-describedby');document.querySelector('.blackbox-reading')?.remove();
  const controls=document.createElement('nav');controls.className='design-question-controls';controls.setAttribute('aria-label','Preguntas que salen de la caja');
  cards.forEach((card,i)=>{const button=document.createElement('button');button.type='button';button.textContent=String(i+1);button.setAttribute('aria-label','Ver pregunta '+(i+1)+': '+card.querySelector('h4').textContent);button.onclick=()=>go(i);controls.append(button);});
  const status=document.createElement('span');status.className='design-question-status';status.setAttribute('role','status');status.setAttribute('aria-live','polite');controls.append(status);box.append(controls);
  const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.classList.add('design-question-threads');svg.setAttribute('aria-hidden','true');svg.setAttribute('preserveAspectRatio','none');
  const threads=cards.map(()=>{const path=document.createElementNS(svg.namespaceURI,'path');path.setAttribute('pathLength','1');svg.append(path);return path;});stack.before(svg);
  function drawThreads(){
   if(!artwork)return;const rect=box.getBoundingClientRect(),image=artwork.getBoundingClientRect();if(!rect.width||!image.width)return;
   svg.setAttribute('viewBox','0 0 '+rect.width+' '+rect.height);
   const origins=[[.45,.62],[.51,.6],[.48,.65],[.56,.63]],mobile=innerWidth<=800;
   cards.forEach((card,i)=>{const [x,y]=origins[i],ox=image.left-rect.left+image.width*x,oy=image.top-rect.top+image.height*y;
    const ex=mobile?card.offsetLeft+card.offsetWidth*.5:card.offsetLeft+(i%2?8:card.offsetWidth-8),ey=mobile?card.offsetTop+card.offsetHeight-4:card.offsetTop+card.offsetHeight*.55;
    const bend=mobile?30:(i%2?65:-65);threads[i].setAttribute('d',`M${ox} ${oy} C${ox+bend} ${oy-70} ${ex-bend} ${ey+(mobile?55:0)} ${ex} ${ey}`);
   });
  }
  let queued=false,last=-2;
  const stickyTop=()=>parseFloat(getComputedStyle(box).top)||110;
  function show(index,opening=1){
   const short=innerHeight<650,mobile=innerWidth<=800,reduced=matchMedia('(prefers-reduced-motion:reduce)').matches||document.body.classList.contains('no-motion');
   const lidProgress=short?1:reduced?(opening>=.99?1:0):opening;
   box.style.setProperty('--box-opening',String(lidProgress));box.dataset.boxOpening=opening.toFixed(3);
   cards.forEach((card,i)=>{const revealed=short||i<=index,visible=short||(mobile?i===index:revealed);card.classList.toggle('is-revealed',revealed);card.classList.toggle('is-current',i===index);card.classList.toggle('is-visible',visible);card.inert=!visible;card.setAttribute('aria-hidden',String(!visible));threads[i].classList.toggle('is-visible',visible);});
   controls.querySelectorAll('button').forEach((button,i)=>button.setAttribute('aria-current',i===index?'step':'false'));
   box.classList.toggle('box-open',opening>=.99||short);box.dataset.currentQuestion=String(index+1);
   if(last!==index){status.textContent=index<0?'Primero, abrí la caja con el scroll':(index+1)+' de '+cards.length;last=index;}
  }
  function update(){queued=false;if(!map.getClientRects().length)return;const rect=map.getBoundingClientRect();const distance=Math.max(1,map.offsetHeight-box.offsetHeight);const ratio=Math.max(0,Math.min(1,(stickyTop()-rect.top)/distance));show(Math.min(cards.length-1,Math.floor(ratio*(cards.length+1))-1),Math.min(1,ratio*(cards.length+1)));}
  function schedule(){if(!queued){queued=true;requestAnimationFrame(update);}}
  function resize(){map.style.setProperty('--question-flight-distance',Math.round(innerHeight*1.8)+'px');map.style.setProperty('--question-scene-height',box.offsetHeight+'px');drawThreads();schedule();}
  function go(index){const distance=Math.max(1,map.offsetHeight-box.offsetHeight);const ratio=(index+1+.12)/(cards.length+1);window.scrollTo({top:scrollY+map.getBoundingClientRect().top-stickyTop()+ratio*distance,behavior:'instant'});show(index);}
  const sizes=new ResizeObserver(drawThreads);cards.forEach(card=>sizes.observe(card));artwork?.addEventListener('load',drawThreads);
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',resize);map.closest('details')?.addEventListener('toggle',()=>{resize();schedule();});new ResizeObserver(resize).observe(box);resize();
 }

 mountDesignQuestions();
 document.querySelectorAll('.larva-connection-question,.larva-metaphor-bridge,.icon-thought,.blackbox-node h4,.research-cycle-node h4,.river-stop-question').forEach(el=>el.classList.add('journey-question'));
 const openOnScroll=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;entry.target.open=true;openOnScroll.unobserve(entry.target);}},{rootMargin:'0px 0px -12% 0px',threshold:0});
 function observeReadings(){main.querySelectorAll('details:not([data-scroll-reading]):not(.design-question-card)').forEach(detail=>{detail.dataset.scrollReading='true';openOnScroll.observe(detail);});}
 observeReadings();
 new MutationObserver(()=>{flattenNotes();observeReadings();}).observe(main,{childList:true,subtree:true});
 // Una activación conserva un cambio visible sin alterar los textos ni sus valores guardados.
 document.addEventListener('click',event=>{const element=event.target.closest('.meta-labels li,.ink-node,.pair-options button,.relation-choice');if(element)element.classList.add('is-connected');});
 function mountRelationColors(){
  const root=document.getElementById('mariposa'),group=root?.querySelector('.connection-buttons');if(!group)return;
  const palettes=[['#ecdfa6','#75591b','#fbf7e8'],['#c9dfed','#2c5d7b','#eff6fa'],['#bdded5','#285e52','#eef7f3'],['#e6c9dd','#79446a','#faf0f6']];
  group.querySelectorAll('[data-connection]').forEach((button,i)=>{const [paper,accent]=palettes[i];button.style.setProperty('--link-paper',paper);button.style.setProperty('--link-accent',accent);});
  function sync(){
   const selected=group.querySelector('[aria-pressed="true"]');if(!selected)return;
   const index=Number(selected.dataset.connection),[paper,accent,panel]=palettes[index];
   root.style.setProperty('--relation-paper',paper);root.style.setProperty('--relation-accent',accent);root.style.setProperty('--relation-panel',panel);root.dataset.relationColor=String(index);
  }
  new MutationObserver(sync).observe(group,{attributes:true,subtree:true,attributeFilter:['aria-pressed']});sync();
 }
 mountRelationColors();

 function mountRiverComponentCarousel(){
  const original=document.querySelector('.expedition-components');if(!original)return;
  const entries=[...original.querySelectorAll('dl>div')].map(el=>({title:el.querySelector('dt').textContent,body:el.querySelector('dd').textContent}));
  const outer=document.createElement('section');outer.className='river-component-carousel';outer.setAttribute('aria-labelledby','river-components-title');
  outer.innerHTML='<div class="river-carousel-scene"><h5 id="river-components-title">Qué componentes organiza esta metáfora</h5><p class="river-carousel-help">Seguí bajando para recorrer los seis componentes. También podés usar las flechas.</p><div id="river-component-slides" class="river-component-slides" role="region" aria-roledescription="carrusel" aria-label="Componentes de la metáfora del río" tabindex="0"></div><div class="river-carousel-controls"><button type="button" data-river-component-prev aria-label="Componente anterior" aria-controls="river-component-slides">← Anterior</button><p class="river-carousel-status" role="status" aria-live="polite"></p><button type="button" data-river-component-next aria-label="Componente siguiente" aria-controls="river-component-slides">Siguiente →</button></div><div class="river-carousel-progress" aria-hidden="true"><span></span></div></div>';
  const viewport=outer.querySelector('.river-component-slides'),scene=outer.firstElementChild,prev=outer.querySelector('[data-river-component-prev]'),next=outer.querySelector('[data-river-component-next]'),status=outer.querySelector('.river-carousel-status'),progress=outer.querySelector('.river-carousel-progress>span');
  const slides=entries.map((entry,i)=>{const slide=document.createElement('article');slide.className='river-component-slide';slide.setAttribute('role','group');slide.setAttribute('aria-roledescription','diapositiva');slide.setAttribute('aria-label',(i+1)+' de '+entries.length+': '+entry.title);const heading=document.createElement('h6'),body=document.createElement('p');heading.textContent=entry.title;body.textContent=entry.body;slide.append(heading,body);slide.hidden=i!==0;viewport.append(slide);return slide;});
  original.replaceWith(outer);let current=-1,queued=false;
  const stickyTop=()=>parseFloat(getComputedStyle(scene).top)||150;
  function show(index){index=Math.max(0,Math.min(entries.length-1,index));if(index===current)return;current=index;slides.forEach((slide,i)=>slide.hidden=i!==index);prev.disabled=index===0;next.disabled=index===entries.length-1;status.textContent=(index+1)+' de '+entries.length;progress.style.width=((index+1)/entries.length*100)+'%';outer.dataset.carouselIndex=String(index);}
  function update(){queued=false;const distance=Math.max(1,outer.offsetHeight-scene.offsetHeight);const ratio=Math.max(0,Math.min(1,(stickyTop()-outer.getBoundingClientRect().top)/distance));show(Math.round(ratio*(entries.length-1)));}
  function schedule(){if(!queued){queued=true;requestAnimationFrame(update);}}
  function resize(){outer.style.setProperty('--carousel-scene-height',scene.offsetHeight+'px');outer.style.setProperty('--carousel-distance',Math.round(innerHeight*1.35)+'px');schedule();}
  function go(index){index=Math.max(0,Math.min(entries.length-1,index));show(index);const top=scrollY+outer.getBoundingClientRect().top-stickyTop()+index/(entries.length-1)*Math.max(1,outer.offsetHeight-scene.offsetHeight);window.scrollTo({top,behavior:'instant'});}
  prev.onclick=()=>go(current-1);next.onclick=()=>go(current+1);
  viewport.addEventListener('keydown',event=>{const targets={ArrowLeft:current-1,ArrowRight:current+1,Home:0,End:entries.length-1};if(!(event.key in targets))return;event.preventDefault();go(targets[event.key]);});
  let pointer=null;viewport.addEventListener('pointerdown',event=>{pointer={x:event.clientX,y:event.clientY};});viewport.addEventListener('pointerup',event=>{if(!pointer)return;const dx=event.clientX-pointer.x,dy=event.clientY-pointer.y;pointer=null;if(Math.abs(dx)>55&&Math.abs(dx)>Math.abs(dy)*1.5)go(current+(dx<0?1:-1));});viewport.addEventListener('pointercancel',()=>pointer=null);
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',resize);new ResizeObserver(resize).observe(scene);show(0);resize();
 }
 mountRiverComponentCarousel();

})();
