/* ============================================================
   DATA
   ============================================================ */
const UX = [
  {t:"TinyTots Hub: AI-Powered Daycare Intelligence",year:"2024",sub:"",tags:["Toddlers Growth","AI","Dashboard"],img:"assets/images/tinytots-hub-cover-image.jpg"},
  {t:"Saral Pay: A voice-first digital payment companion",year:"2026",sub:"IIT Delhi Capstone Project • FinTech & Financial Inclusion",case:"#case-saathi",tags:["Digital Payments","AI Companion","Dashboard"],img:"assets/images/saral-pay-cover.jpg"},
  {t:"StreetEats: An app connecting people with food hawkers",sub:"SDG 9 · Connecting hawkers & customers",case:"#case-streeteats",tags:["Location","Discovery","Mobile App"],img:"assets/images/streeteats-cover-illustration.jpg"},
  {t:"Design System for an internal Adobe dashboard",sub:"Design Systems · Figma · Under NDA",case:"#case-designsystem",tags:["Design System","Components","Figma"],img:"assets/images/design-system-cover.jpg"},
  {t:"NAVITRAX: A fleet management platform",sub:"Fleet management · Product UX",case:"#case-fleet",tags:["Fleet Management","Dashboard","Product UX"],img:"assets/images/navitrax-cover.jpg"},
  {t:"Safar Sathi: A transit companion for elderly bus journeys",sub:"SDG 9 · Accessibility · AI-driven mobile app",case:"#case-safar",tags:["Accessibility","Public Transit","Mobile App"],img:"assets/images/safar-sathi-cover.jpg"},
  {t:"AI Sales Assistant: an internal chatbot for Adobe's sales team",sub:"AI · Enterprise UX · Under NDA",case:"#case-salesai",tags:["AI","Enterprise","Chatbot"],img:"assets/images/ai-sales-assistant-cover.jpg"},
];
const VISUAL = [
  {t:"Brand identity system",role:"Visual Designer",dur:"6 weeks",ind:"Branding",
   d:"A flexible identity — logo, type, and colour — with clear usage guidelines.",tags:["Branding","Logo","Guidelines"],team:false},
  {t:"Product launch campaign visuals",role:"Visual Designer",dur:"4 weeks",ind:"Campaign",
   d:"A cohesive set of social, web, and print assets for a launch moment.",tags:["Campaign","Social","Print"],team:false},
  {t:"Icon & illustration library",role:"Visual Designer",dur:"Ongoing",ind:"Design System",
   d:"A consistent, scalable icon set built to live inside a design system.",tags:["Icons","Illustration","System"],team:false},
  {t:"Event poster series",role:"Visual Designer",dur:"3 weeks",ind:"Print",
   d:"A bold, typographic poster series for a local design meetup.",tags:["Poster","Typography","Print"],team:false},
];
const ART = [
  {t:"Beneath the waves",img:"assets/images/art-beneath-the-waves.jpg"},
  {t:"Eye on you!",img:"assets/images/art-eye-on-you.jpg"},
  {t:"Midnight moonlight",img:"assets/images/art-midnight-moonlight.jpg"},
  {t:"The Yellow Umbrella",img:"assets/images/art-the-yellow-umbrella.jpg"},
  {t:"12 AM! Next Episode?",img:"assets/images/art-12am-next-episode.jpg"},
  {t:"ये रे ये रे पावसा, तुला देते पैसा!",img:"assets/images/art-ye-re-ye-re-pavsa.jpg"},
  {t:"One Afternoon",img:"assets/images/art-one-afternoon.jpg"},
  {t:"It's more about the journey than the experience.",img:"assets/images/art-journey-over-experience.jpg"},
  {t:"Ambling along the streets",img:"assets/images/art-ambling-along-the-streets.jpg"},
];

const TOOLS = [
  ["Fi","Figma","Design"],["FJ","FigJam","Whiteboard"],["XD","Adobe XD","Design"],["Ps","Photoshop","Visual"],
  ["Ai","Illustrator","Visual"],["Mi","Miro","Whiteboard"],
  ["Gp","ChatGPT","AI"],["Cl","Claude","AI"],["Ff","Firefly","AI"],["Fr","Framer","Build"],
  ["<>","HTML","Code"],
];

const SKILLS = ["AI for UX","UX Research","Interaction Design","Wireframing","Usability Testing","Design Systems","Accessibility",
  "Information Architecture","Prototyping","Customer Experience (CX)","Visual Design","Dashboard Design","Responsive Design"];

const PH = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 15 5-5 4 4 3-3 6 6"/><circle cx="8.5" cy="8.5" r="1.5"/></svg>`;
const ARROW = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

/* ============================================================
   RENDER
   ============================================================ */
function projCard(p,i){
  const media = p.img
    ? `<img src="${p.img}" alt="${p.t}" loading="lazy"/>`
    : `<div class="ph">${PH}<span class="ph-label">Cover</span></div>`;
  const titleHTML = p.t.replace(/^([^:—]+[:—])/, '<b>$1</b>');
  const right = p.year || p.dur || '';
  const sub = (p.sub!==undefined) ? p.sub : [p.role,p.ind].filter(Boolean).join(' · ');
  return `<article class="proj card reveal" data-nav="${p.case||'#case'}">
    <div class="media">${media}</div>
    <div class="body">
      <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
      <div class="proj-head"><h3>${titleHTML}</h3>${right?`<span class="proj-year">${right}</span>`:''}</div>
      ${sub?`<p class="proj-sub">${sub}</p>`:''}
      <div class="foot"><span class="btn-link">View case study ${ARROW}</span></div>
    </div>
  </article>`;
}

function artCard(a){
  const media = a.img ? `<img src="${a.img}" alt="${a.t}" loading="lazy"/>` : `<div class="ph" style="aspect-ratio:${a.r||'1/1'}">${PH}<span class="ph-label">Artwork</span></div>`;
  return `<figure class="art-card reveal">
    ${media}
    <figcaption class="art-body">
      <div class="art-title">${a.t}</div>
      ${a.tool?`<div class="art-tool"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:14px;height:14px"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>${a.tool}</div>`:''}
    </figcaption>
  </figure>`;
}

document.getElementById('featuredGrid').innerHTML = [UX[0],UX[6],UX[1]].map(projCard).join('');
document.getElementById('uxGrid').innerHTML = [UX[0],UX[6],UX[1],UX[4],UX[3],UX[2],UX[5]].map(projCard).join('');

document.getElementById('artGrid').innerHTML = ART.map(artCard).join('');
document.getElementById('toolsGrid').innerHTML = TOOLS.map(([a,n,c])=>
  `<div class="tool card reveal"><div class="tico">${a}</div><div class="tn">${n}</div><div class="tc">${c}</div></div>`).join('');
{const _sw=document.getElementById('skillsWrap'); if(_sw){ const cl=['sc-a','sc-b','sc-c','sc-d','sc-e']; const big=[0,4,7,10]; _sw.innerHTML = SKILLS.map((s,i)=>`<span class="sc-pill ${cl[i%cl.length]}${big.includes(i)?' sc-big':''}" style="--r:${(i*41)%7-3}deg">${s}</span>`).join(''); }}
document.getElementById('year').textContent = new Date().getFullYear();

/* ============================================================
   ROUTER  (hash-based, single-page)
   ============================================================ */
const PAGES = {home:'page-home',about:'page-about',projects:'page-projects',work:'page-projects',case:'page-case','case-saathi':'page-case-saathipay','case-streeteats':'page-case-streeteats','case-designsystem':'page-case-designsystem','case-fleet':'page-case-fleet','case-safar':'page-case-safar','case-salesai':'page-case-salesai','contact-anchor':'page-home'};
function route(hash){
  let key = (hash||'#home').replace('#','');
  let scrollTarget = null;
  if(key==='contact-anchor'){key='home';}
  if(!PAGES[key]) key='home';
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const el = document.getElementById(PAGES[key]);
  if(el) el.classList.add('active');
  // active nav state
  document.querySelectorAll('.nav-links a').forEach(a=>{
    const h=a.getAttribute('href').replace('#','');
    a.classList.toggle('active', h===key || (['case','case-saathi','case-streeteats','case-designsystem','case-fleet','case-safar','case-salesai','projects'].includes(key)&&h==='work'));
  });
  window.scrollTo({top:0,behavior:'instant' in window?'instant':'auto'});
  observeReveals();
  return key;
}

function setWorkTab(tab){
  tab = tab || 'ux';
  document.querySelectorAll('.work-tab').forEach(b=>b.classList.toggle('active', b.dataset.tab===tab));
  document.querySelectorAll('.work-panel').forEach(p=>p.classList.toggle('active', p.dataset.panel===tab));
  observeReveals();
}
document.querySelectorAll('.work-tab').forEach(b=>b.addEventListener('click',()=>setWorkTab(b.dataset.tab)));

function setDS(key){
  document.querySelectorAll('.ds-tab').forEach(b=>b.classList.toggle('active', b.dataset.ds===key));
  document.querySelectorAll('.ds-panel').forEach(p=>p.classList.toggle('active', p.dataset.dsPanel===key));
}
document.querySelectorAll('.ds-tab').forEach(b=>b.addEventListener('click',()=>setDS(b.dataset.ds)));

function handleNav(target, scrollTo, tab){
  const key = route(target);
  if(tab){ setTimeout(()=>setWorkTab(tab), 60); }
  if(scrollTo){
    // wait a tick for the page to render, then scroll to a section
    setTimeout(()=>{
      const map={contact:'contact-section',resume:null};
      if(scrollTo==='resume'){
        const btn=document.querySelector('[data-resume]');
        if(btn) btn.scrollIntoView({behavior:'smooth',block:'center'});
      }else if(map[scrollTo]){
        const s=document.getElementById(map[scrollTo]);
        if(s) s.scrollIntoView({behavior:'smooth',block:'start'});
      }
    },120);
  }
  // close mobile menu
  document.getElementById('nav').classList.remove('open');
  document.getElementById('navToggle').setAttribute('aria-expanded','false');
}

// intercept any element carrying data-nav or an in-app hash href
document.addEventListener('click',e=>{
  const t = e.target.closest('[data-nav]');
  if(!t) return;
  const href = t.getAttribute('href') || t.getAttribute('data-nav');
  if(!href || !href.startsWith('#')) return;
  e.preventDefault();
  const scrollTo = t.getAttribute('data-scroll');
  const tab = t.getAttribute('data-tab');
  history.pushState(null,'',href);
  handleNav(href, scrollTo, tab);
});
window.addEventListener('popstate',()=>route(location.hash));

/* ============================================================
   SCROLL REVEAL
   ============================================================ */
let io;
function observeReveals(){
  const items = document.querySelectorAll('.page.active .reveal:not(.in)');
  if(!io){
    io = new IntersectionObserver(es=>{
      es.forEach(en=>{ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target);} });
    },{threshold:.12, rootMargin:'0px 0px -8% 0px'});
  }
  items.forEach(i=>io.observe(i));
}

/* ============================================================
   NAV SCROLL STATE + PARALLAX
   ============================================================ */
const nav = document.getElementById('nav');
const blobs = document.querySelectorAll('.blob');
const heroBg = document.getElementById('heroBg');
const covers = document.querySelectorAll('.cs-cover img:not([data-no-parallax])');
const reduceMotion = matchMedia('(prefers-reduced-motion:reduce)').matches;
function onScroll(){
  nav.classList.toggle('scrolled', window.scrollY>10);
  const y = window.scrollY;
  if(heroBg){ heroBg.style.opacity = Math.max(0, 1 - y/620); }
  if(reduceMotion) return;
  blobs.forEach(b=>{ const d=parseFloat(b.dataset.depth||.3); b.style.transform=`translateY(${y*d*0.25}px)`; });
  if(heroBg){ heroBg.style.transform=`translate3d(0, ${y*0.18}px, 0)`; }
  const vh = window.innerHeight;
  covers.forEach(img=>{
    if(!img.offsetParent) return;
    const r = img.getBoundingClientRect();
    const off = Math.max(-26, Math.min(26, (r.top + r.height/2 - vh/2) * -0.05));
    const sc = img.dataset.coverScale || 1.12;
    img.style.transform = `scale(${sc}) translate3d(0, ${off}px, 0)`;
  });
}
let _pTick=false;
window.addEventListener('scroll',()=>{ if(!_pTick){ requestAnimationFrame(()=>{ onScroll(); _pTick=false; }); _pTick=true; } },{passive:true});

/* ============================================================
   MOBILE MENU
   ============================================================ */
const toggle=document.getElementById('navToggle');
toggle.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded',open);
});

/* ============================================================
   BUTTON RIPPLE
   ============================================================ */
document.addEventListener('click',e=>{
  const b=e.target.closest('.btn, .btn-link');
  if(!b) return;
  const r=document.createElement('span');r.className='ripple';
  const rect=b.getBoundingClientRect();const size=Math.max(rect.width,rect.height);
  r.style.width=r.style.height=size+'px';
  r.style.left=(e.clientX-rect.left-size/2)+'px';
  r.style.top=(e.clientY-rect.top-size/2)+'px';
  b.appendChild(r);setTimeout(()=>r.remove(),620);
});

/* ============================================================
   CONTACT FORM (validation + demo success state)
   ============================================================ */
const form=document.getElementById('contactForm');
form.addEventListener('submit',e=>{
  e.preventDefault();
  let ok=true;
  const name=form.querySelector('#cf-name'), email=form.querySelector('#cf-email'), msg=form.querySelector('#cf-msg');
  const setErr=(inp,bad)=>inp.closest('.field').classList.toggle('err',bad);
  setErr(name,!name.value.trim()); if(!name.value.trim())ok=false;
  const emailOk=/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
  setErr(email,!emailOk); if(!emailOk)ok=false;
  setErr(msg,!msg.value.trim()); if(!msg.value.trim())ok=false;
  const note=document.getElementById('formNote');
  if(ok){
    const subject=encodeURIComponent('Portfolio enquiry from '+name.value.trim());
    const body=encodeURIComponent(msg.value.trim()+'\n\n— '+name.value.trim()+' ('+email.value.trim()+')');
    window.location.href='mailto:sara24work@gmail.com?subject='+subject+'&body='+body;
    note.classList.add('show'); form.querySelector('button').textContent='Opening your email app…';
  }
  else{ note.classList.remove('show'); }
});
form.querySelectorAll('input,textarea').forEach(inp=>
  inp.addEventListener('input',()=>inp.closest('.field').classList.remove('err')));

// résumé demo
document.querySelector('[data-resume]')?.addEventListener('click',e=>{
  e.preventDefault();
  const b=e.currentTarget; const orig=b.innerHTML;
  b.innerHTML='Résumé is a placeholder — link your PDF here';
  setTimeout(()=>b.innerHTML=orig,2200);
});
document.querySelector('[data-paper]')?.addEventListener('click',e=>{
  e.preventDefault();
  const b=e.currentTarget; const orig=b.innerHTML;
  b.innerHTML='Add your paper link here';
  setTimeout(()=>b.innerHTML=orig,2200);
});

/* ============================================================
   BACK TO TOP
   ============================================================ */
document.getElementById('toTop').addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

/* ============================================================
   INIT
   ============================================================ */
route(location.hash);
onScroll();
observeReveals();
