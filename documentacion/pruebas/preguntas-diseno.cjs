const {chromium}=require('playwright');const assert=require('node:assert/strict');
(async()=>{const browser=await chromium.launch({executablePath:process.env.CHROMIUM_PATH||'/usr/bin/chromium',headless:true,args:['--no-sandbox']});try{for(const width of [1365,768,390]){const page=await browser.newPage({viewport:{width,height:900},reducedMotion:width===390?'reduce':'no-preference'});const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto(process.env.TEST_BASE_URL||'http://localhost:3000');
assert.equal(await page.locator('.box-orbit-piece,.box-discovery,.blackbox-reading,.box-open-button').count(),0);
const legend=await page.locator('.blackbox-intro').textContent();for(const term of ['propósitos','contenidos','actividades','recursos','orientaciones','retroalimentación'])assert(legend.includes(term));
assert.equal(await page.locator('.design-question-card').count(),4);assert.equal(await page.locator('.design-question-card .notebook-entry,.design-question-card>summary>p').count(),0);
const text=await page.locator('.design-question-stack').textContent();assert(!/se esperaba|debía|necesitaba|podrás|tendría/.test(text));
await page.locator('.case-questions-disclosure>summary').scrollIntoViewIfNeeded();await page.waitForFunction(()=>document.querySelector('.case-questions-disclosure').open);await page.waitForTimeout(250);
for(let i=0;i<4;i++){
 const card=page.locator('.design-question-card').nth(i);await card.evaluate(el=>window.scrollTo({top:el.getBoundingClientRect().top+scrollY-200,behavior:'instant'}));
 await page.waitForFunction(i=>document.querySelectorAll('.design-question-card')[i].open&&document.querySelectorAll('.design-question-card')[i].classList.contains('is-current'),i,{timeout:5000});
 assert.equal(await page.locator('.design-question-card[open]').count(),i+1);
 assert(await card.evaluate(e=>e.scrollWidth<=e.clientWidth+1));
}
assert(await page.locator('.design-questions-map').evaluate(e=>e.scrollWidth<=e.clientWidth+1));assert(await page.locator('.blackbox-core').evaluate(e=>e.classList.contains('box-open')));
await page.locator('.blackbox-intro').evaluate(el=>window.scrollTo({top:el.getBoundingClientRect().top+scrollY-110,behavior:'instant'}));await page.screenshot({path:'/workspace/work/preguntas-diseno-'+width+'.png'});
assert.deepEqual(errors,[]);console.log('OK '+width+'px: leyenda con componentes, cuatro preguntas en presente y apertura progresiva por scroll.');await page.close();}}finally{await browser.close()}})().catch(e=>{console.error(e);process.exit(1)});
