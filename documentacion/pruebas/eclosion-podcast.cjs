const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const base=process.env.TEST_BASE_URL||'http://127.0.0.1:3000/';
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_PATH||undefined,args:['--no-sandbox','--disable-dev-shm-usage']});
 try{
  for(const [width,height,motion] of [[1365,900,'no-preference'],[768,1024,'no-preference'],[390,844,'reduce']]){
   const page=await browser.newPage({viewport:{width,height},reducedMotion:motion});const errors=[];page.on('pageerror',error=>errors.push(error.message));
   await page.goto(base,{waitUntil:'load'});
   assert.equal(await page.evaluate(()=>state.path),'podcast');
   assert.equal(await page.locator('.case-mode-cards,.try-other-path,.orientation-fork').count(),0);
   const body=await page.locator('body').innerText();assert(!/dos caminos|ambos caminos|otro camino|cambiar de camino|dos maneras de recorrer|Camino Artefacto|Artefacto interactivo/i.test(body));
   await page.locator('.case-scenario-gateway [data-case-open]').click();
   assert(await page.locator('#case-lab-dialog').evaluate(dialog=>dialog.open));
   assert.equal(await page.evaluate(()=>checkpoint),'caso');
   assert.equal(await page.locator('.case-investigator-nav,.case-voice-tabs,.case-oa-nav').count(),0);
   assert.equal(await page.locator('.case-scroll-step').count(),8);
   assert.equal(await page.locator('.case-tp').count(),1);
   assert.equal(await page.locator('#case-tp-title').innerText(),'Confiabilidad y validez de fuentes');
   assert.equal(await page.locator('.case-tp #lab-guide,.case-tp [data-lab-guide],.case-tp input[type=file]').count(),0);
   assert.equal(await page.locator('#case-delivery-title').innerText(),'Buzón de entrega');
   assert.equal(await page.locator('#case-lab-dialog .case-source-link,#lab-guide,.case-inline-guide').count(),0);
   assert.equal(await page.locator('.case-tp a').count(),0);
   assert((await page.locator('.case-tp').innerText()).includes('800 a 1.000 palabras'));
   assert((await page.locator('#case-tp-assignment').locator('..').innerText()).includes('Accedan a las fuentes reunidas en la Guía de análisis'));
   assert((await page.locator('.case-tp').innerText()).includes('validez de sus principales afirmaciones'));
   assert.equal(await page.locator('.case-tp-steps>li').count(),4);
   assert.equal(await page.locator('#case-step-unidad1 .case-unit-location>span').innerText(),'Unidad 1');
   assert.equal(await page.locator('#case-step-unidad1 .case-guide-location h4').innerText(),'Guía de análisis');
   assert.equal(await page.locator('#case-step-aula .case-guide-location,.case-tp .case-guide-location').count(),0);
   assert(await page.locator('#case-step-unidad1').evaluate(e=>e.previousElementSibling.id==='case-step-marcos'&&e.nextElementSibling.id==='case-step-desajuste'));
   assert((await page.locator('#case-mismatch-title').innerText()).includes('Unidad 3. La guía quedó en la Unidad 1.'));
   assert(await page.locator('#case-step-unidad1').evaluate(e=>e.offsetHeight>=document.getElementById('case-lab-content').clientHeight));
   assert.equal(await page.locator('#case-step-registro,.case-log,.case-log-route,[data-case-stage="registro"],[data-evidence="registro"],[data-pair-evidence="registro"]').count(),0);
   assert((await page.locator('#case-step-hipotesis').innerText()).includes('Registrá en tu cuaderno qué pudiste comprender durante la investigación y qué indicios sostienen tu explicación.'));
   assert.equal(await page.locator('#case-step-hipotesis button').count(),1);
   assert.equal(await page.locator('.case-testimony').count(),3);
   assert.equal(await page.locator('#case-campus-materials [data-lab-guide],#case-campus-materials a').count(),0);
   assert.equal(await page.locator('#case-lab-dialog details:not([open]):not(.audio-transcript)').count(),0);
   assert.equal(await page.locator('#case-lab-dialog .audio-transcript:not([open])').count(),3);
   const transcript=page.locator('#case-step-maria .audio-transcript');await transcript.locator('summary').click();assert(await transcript.evaluate(e=>e.open));await transcript.locator('summary').click();
   assert(await page.locator('#case-lab-dialog').evaluate(dialog=>{const ids=[...dialog.querySelectorAll('[id]')].map(el=>el.id);return ids.length===new Set(ids).size;}));
   assert((await page.locator('.case-simulated-control').count())>0);
   assert.equal(await page.locator('.case-simulated-control:is(a,button,[tabindex],[role="button"])').count(),0);
   assert.equal(await page.locator('.case-simulated-badge').count(),0);
   const firstSimulated=page.locator('.case-simulated-control').first();await firstSimulated.evaluate(el=>{const pane=document.getElementById('case-lab-content');pane.scrollTop+=el.getBoundingClientRect().top-pane.getBoundingClientRect().top-100;});
   const before=await page.locator('#case-lab-content').evaluate(pane=>pane.scrollTop);await firstSimulated.click();assert.equal(await page.locator('#case-lab-content').evaluate(pane=>pane.scrollTop),before);
   const pane=page.locator('#case-lab-content');let insideClicks=0;await page.exposeFunction('recordCaseClick',()=>insideClicks++);await page.locator('#case-lab-dialog').evaluate(dialog=>dialog.addEventListener('click',()=>window.recordCaseClick()));
   for(const id of ['maria','objeto','docente','aula','marcos','unidad1','desajuste','hipotesis']){
    await pane.evaluate((pane,id)=>{const target=document.getElementById('case-step-'+id);pane.scrollTo({top:target.getBoundingClientRect().top-pane.getBoundingClientRect().top+pane.scrollTop,behavior:'instant'});},id);
    await page.waitForFunction(id=>document.querySelector('.case-scroll-rail [aria-current]')?.dataset.caseStage===id,id,{timeout:5000});
    assert(await pane.evaluate(el=>el.scrollWidth<=el.clientWidth+1));
   }
   assert.equal(insideClicks,0,'Scrolling through all information must not require navigation clicks');
   assert(await page.locator('#case-lab-dialog audio').evaluateAll(audios=>audios.every(audio=>audio.paused&&!audio.autoplay)));
   const rail=await page.locator('.case-scroll-rail').boundingBox();assert(rail.height>rail.width,'Navigation must be vertical');
   const noteButton=page.locator('.case-lab-footer [data-note-page]');
   const style=el=>{const s=getComputedStyle(el),p=getComputedStyle(el,'::before');return [s.backgroundColor,s.color,s.borderRadius,p.backgroundImage];};
   const outside=await page.locator('.crisalida-notebook>button').evaluate(style);
   assert.deepEqual(await noteButton.evaluate(style),outside);
   await noteButton.click();assert(await page.locator('#my-notes').evaluate(e=>e.open));
   assert(await page.locator('#case-lab-dialog').evaluate(e=>e.open));
   await page.locator('[data-note-key="branch:podcast:explanation"]').fill('Explicación escrita desde el entorno del caso');
   await page.locator('#close-my-notes').click();assert(await noteButton.evaluate(e=>e===document.activeElement));
   await page.locator('#case-lab-dialog [data-lab-close]').click();
   await page.locator('#open-my-notes').click();assert.equal(await page.locator('#notebook-tab-artefacto').count(),0);
   await page.locator('#notebook-tab-podcast').click();await page.locator('[data-note-key="branch:podcast:explanation"]').fill('Mi explicación en la investigación unificada');await page.waitForTimeout(450);await page.reload();
   assert.equal(await page.evaluate(()=>state.podcast.explanation),'Mi explicación en la investigación unificada');
   assert.deepEqual(errors,[]);console.log(`OK ${width}px / ${motion}: narrativa única, scroll continuo, aula/objeto, guía en Unidad 1 y cuaderno unificado, audios manuales y notas persistentes.`);await page.close();
  }
  const page=await browser.newPage();await page.goto(base);await page.evaluate(()=>{state.podcast.active='registro';state.podcast.visited.add('registro');writeSave();});await page.reload();assert.equal(await page.evaluate(()=>state.podcast.active),null);await page.evaluate(()=>{state.path='artefacto';state.artefacto.explanation='Explicación anterior que se conserva';state.artefacto.meta='Reflexión anterior';state.podcast.explanation='';writeSave();});await page.reload();assert.equal(await page.evaluate(()=>state.path),'podcast');assert.equal(await page.evaluate(()=>state.podcast.explanation),'Explicación anterior que se conserva');assert((await page.evaluate(()=>window.metaforaNotes.text())).includes('Reflexión anterior'));await page.locator('#open-my-notes').click();assert.equal(await page.locator('#notebook-tab-artefacto').count(),0);await page.close();console.log('OK recuperación de notas del camino anterior sin borrar textos.');
 }finally{await browser.close();}
})().catch(error=>{console.error(error);process.exit(1);});
