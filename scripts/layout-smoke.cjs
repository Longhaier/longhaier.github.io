// Responsive acceptance checks against compiled _site (not source templates).
// External internet is deliberately denied to simulate flaky/blocked CDNs.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const {chromium} = require('playwright');

const ORIGIN = 'http://127.0.0.1:8765';
const PAGES = ['/', '/archive/', '/category/', '/tag/', '/about/', '/collection/'];
const ENGLISH_ARTICLES = {
  '/en/2019/03/13/java/': {original:'/2019/03/13/java/', content:'Choose a menu option.'},
  '/en/2018/03/25/where-will-you-be-in-five-years/': {original:'/2018/03/25/paper/', content:'Working backward'},
  '/en/2018/01/01/advice-from-ideal-island/': {original:'/2018/01/01/title/', content:'Opportunities and traps'},
  '/en/2017/11/19/five-whys/': {original:'/2017/11/19/problem-solving(1)/', content:'Design of experiments'},
};
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
  const english = route.startsWith('/en/');
  const locale = english ? 'en' : 'zh-CN';
  assert.equal(await page.locator('html').getAttribute('lang'), locale);
  const toggle = page.locator('.site-language');
  assert.ok(await toggle.isVisible(), 'Language switch hidden on '+route);
  const englishArticle = ENGLISH_ARTICLES[route];
  const translatedRoute = Object.keys(ENGLISH_ARTICLES).find(url => ENGLISH_ARTICLES[url].original === route);
  if (english || PAGES.includes(route) || translatedRoute) {
    const pairedRoute = englishArticle?.original || translatedRoute || (english ? route.slice(3) : '/en'+route);
    const otherLocale = english ? 'zh-CN' : 'en';
    assert.equal(await toggle.getAttribute('href'), pairedRoute);
    assert.equal(await page.locator('head link[hreflang="'+otherLocale+'"]').getAttribute('href'),
      'https://taobuilds.github.io'+pairedRoute);
  } else {
    assert.equal(await toggle.getAttribute('href'), '/en/');
  }
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
    const archive = english ? '/en/archive/' : '/archive/';
    assert.ok(await page.locator('.site-mobile-nav a[href="'+archive+'"]').isVisible(),'archive link inaccessible');
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
    for (const width of [320, 375, 1024, 1366]) {
      for (const route of PAGES) {
        const englishRoute = '/en'+route;
        await visit(browser,width,englishRoute);
        console.log('OK',width,englishRoute);
      }
    }
    await visit(browser,375,'/en/',{js:false});
    // The script and its CDN dependencies are absent: native <details> still works.
    await visit(browser,375,'/archive/',{js:false});
    await visit(browser,375,'/archive/',{js:false,blockCSS:true});
    const english = await browser.newPage({ viewport:{width:375,height:800} });
    await english.goto(ORIGIN+'/en/about/');
    await english.locator('.site-language').click();
    assert.equal(new URL(english.url()).pathname, '/about/');
    await english.locator('.site-language').click();
    assert.equal(new URL(english.url()).pathname, '/en/about/');
    assert.equal(await english.locator('.interior-article h3').count(), 3);
    assert.ok(await english.getByRole('link', { name:'Follow TaoBuilds on X' }).isVisible());
    await english.goto(ORIGIN+'/en/archive/');
    const search = english.getByRole('searchbox', { name:'Search articles' });
    await search.fill('array manager');
    assert.equal(await english.getByRole('status').textContent(), 'Matching entries: 1');
    assert.ok(await english.getByRole('link', { name:'A Simple Array Manager in Java' }).isVisible());
    assert.equal(await english.getByRole('link', { name:'A Simple Array Manager in Java' }).getAttribute('hreflang'), 'en');
    await search.fill('not-a-matching-title');
    assert.ok(await english.getByText('No articles match your search.').isVisible());
    for (const route of ['/en/', '/en/archive/', '/en/category/', '/en/tag/']) {
      await english.goto(ORIGIN+route);
      const postLinks = english.locator('.home-post h3 a, .interior-preview h3 a');
      const destinations = await postLinks.evaluateAll(links => Array.from(new Set(links.map(link => link.getAttribute('href')))).sort());
      assert.deepEqual(destinations, Object.keys(ENGLISH_ARTICLES).sort(), 'article links at '+route);
    }
    await english.goto(ORIGIN+'/en/archive/');
    await english.getByRole('link', { name:'A Simple Array Manager in Java' }).click();
    assert.equal(new URL(english.url()).pathname, '/en/2019/03/13/java/');
    await english.locator('.site-language').click();
    assert.equal(new URL(english.url()).pathname, '/2019/03/13/java/');
    await english.locator('.site-language').click();
    assert.equal(new URL(english.url()).pathname, '/en/2019/03/13/java/');

    for (const [route, entry] of Object.entries(ENGLISH_ARTICLES)) {
      await visit(browser,375,route);
      await english.goto(ORIGIN+route);
      const article = english.locator('main');
      assert.ok((await article.innerText()).includes(entry.content), 'translated body at '+route);
      assert.doesNotMatch(await article.innerText(), /\p{Script=Han}/u, 'Chinese text inside '+route);
      assert.ok(await article.getByRole('navigation', { name:'On this page' }).isVisible(), 'article contents at '+route);
      const articleLinks = await article.locator('.interior-post-nav a, .interior-related a').evaluateAll(
        links => links.map(link => link.getAttribute('href')),
      );
      assert.equal(articleLinks.filter(link => link in ENGLISH_ARTICLES && link !== route).length, articleLinks.length, 'reading links at '+route);
      assert.equal(await article.locator('.interior-related a').count(), 3, 'English related articles at '+route);
      assert.ok(await article.locator('.interior-post-nav a').count() >= 1, 'English adjacent articles at '+route);
    }
    const feed = await english.request.get(ORIGIN+'/en/feed.xml');
    assert.equal(feed.status(), 200);
    assert.match(await feed.text(), /<language>en<\/language>/);
    assert.match(await feed.text(), /<link>https:\/\/taobuilds.github.io\/en\/2019\/03\/13\/java\/<\/link>/);
    await english.close();
    // Exercise the original article layout on mobile and desktop too.
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
