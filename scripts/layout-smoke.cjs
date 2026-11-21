// Responsive acceptance checks against compiled _site (not source templates).
// External internet is deliberately denied to simulate flaky/blocked CDNs.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {chromium} = require('playwright');

const ORIGIN = 'http://127.0.0.1:8765';
const PAGES = ['/', '/archive/', '/category/', '/tag/', '/about/', '/collection/'];
const WIDTHS = [320, 375, 390, 768, 980, 1024, 1366];
const artifacts = path.join(process.cwd(), 'test-artifacts');
fs.mkdirSync(artifacts, {recursive:true});

async function visit(browser, width, route, opts={}) {
  const context = await browser.newContext({
    viewport:{width,height:800}, deviceScaleFactor:1,
    javaScriptEnabled:opts.js !== false, reducedMotion:'reduce',
  });
  await context.route('**/*', async requestRoute=>{
    const url=requestRoute.request().url();
    if(url.startsWith(ORIGIN)) {
      // Simulate CSS unavailability for fallback-only case.
      if(opts.blockCSS && url.includes('/css/main.css')) return requestRoute.abort();
      return requestRoute.continue();
    }
    return requestRoute.abort();
  });
  const page = await context.newPage();
  const errors=[];
  page.on('pageerror',err=>errors.push(String(err)));
  const response = await page.goto(ORIGIN+route,{waitUntil:'load',timeout:25000});
  assert.equal(response?.status(),200,'HTTP status '+route);
  if(!opts.blockCSS) {
    const cssCheck=await page.evaluate(()=>{
      const el=document.querySelector('.site-header');
      const styles=getComputedStyle(el);
      return styles.backgroundColor!=='rgba(0, 0, 0, 0)' &&
             styles.backgroundColor!=='transparent';
    });
    assert.ok(cssCheck,'compiled site CSS did not apply at '+route);
  }
  const info=await page.evaluate(()=>{
    const vw=window.innerWidth;
    const actual=document.documentElement.scrollWidth;
    const bad=Array.from(document.querySelectorAll('body *')).filter(el=>{
      const s=getComputedStyle(el);
      if(s.display==='none'||s.visibility==='hidden'||s.position==='fixed')return false;
      const rect=el.getBoundingClientRect();
      if(rect.width===0||rect.height===0||rect.right<=vw+3||rect.left>=vw)return false;
      let p=el.parentElement;
      while(p && p!==document.body) {
        const st=getComputedStyle(p);
        if(['hidden','auto','scroll','clip'].includes(st.overflowX))return false;
        p=p.parentElement;
      }
      return true;
    }).slice(0,6).map(e=>({tag:e.tagName,cls:String(e.className).slice(0,60),right:Math.round(e.getBoundingClientRect().right)}));
    return {viewport:vw,scrollWidth:actual,offenders:bad};
  });
  assert.ok(info.scrollWidth<=width+3, 'Horizontal scroll at '+route+' '+width+'px: '+JSON.stringify(info));
  assert.ok(info.offenders.length===0,'Off-screen elements at '+route+' '+width+'px: '+JSON.stringify(info));
  if(opts.js!==false) assert.deepEqual(errors,[],'browser errors '+route);
  if(width<=980) {
    const detail=page.locator('.site-mobile-nav');
    assert.equal(await detail.count(),1,'missing native mobile menu');
    assert.ok(await detail.isVisible(),'mobile menu hidden');
    await page.locator('.site-mobile-nav summary').click();
    assert.equal(await detail.getAttribute('open'),'','mobile menu did not expand');
    assert.ok(await page.locator('.site-mobile-nav a[href="/archive/"]').isVisible(),'archive link inaccessible');
    await page.locator('.site-mobile-nav summary').click();
  }
  if(opts.screenshot) {
    await page.screenshot({path:path.join(artifacts,opts.screenshot),fullPage:true});
  }
  await context.close();
}

(async()=>{
  const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
  try {
    for(const width of WIDTHS) {
      for(const route of PAGES) {
        await visit(browser,width,route,{
          screenshot:(width===375 && ['/', '/archive/', '/about/'].includes(route))
            ? 'mobile-'+(route==='/'?'home':route.slice(1,-1))+'.png'
            : (width===1366 && route==='/archive/')?'desktop-archive.png':null,
        });
        console.log('OK',width,route);
      }
    }
    // The script and its CDN dependencies are absent: native <details> still works.
    await visit(browser,375,'/archive/',{js:false});
    await visit(browser,375,'/archive/',{js:false,blockCSS:true});
    // At least one existing post page, not only top-level Jekyll paths.
    const context=await browser.newContext();
    const p=await context.newPage();
    await p.goto(ORIGIN+'/archive/',{waitUntil:'domcontentloaded'});
    const postLink=await p.locator('.interior-preview h3 a').first().getAttribute('href');
    await context.close();
    if(postLink) {
      await visit(browser,375,postLink);
      await visit(browser,1366,postLink);
    }
    console.log('Responsive acceptance checks passed');
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
