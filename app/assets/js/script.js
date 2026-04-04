
document.querySelectorAll('.gnav a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    const t = document.querySelector(a.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth'});
  });
});

function faqToggle(el) {
  el.parentElement.classList.toggle('open');
}

const aptLabels = {
  studio:'სტუდიო', one:'ერთსაძინებლიანი', two:'ორსაძინებლიანი', three:'სამსაძინებლიანი'
};

function showHighlight(key) {
  document.querySelectorAll('.apt-hl').forEach(g => g.style.display='none');
  const g = document.getElementById('hl-'+key);
  if(g) g.style.display='block';
  const leg = document.getElementById('pl-legend');
  const legTxt = document.getElementById('pl-legend-txt');
  if(leg && legTxt) {
    leg.style.display='block';
    legTxt.textContent = aptLabels[key] || '';
  }
}

function plUpdate(type, area, price) {
  [['pl-type', type], ['pl-area', area], ['pl-price', price]].forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
}

function plTab(el, key, type, area, price) {
  document.querySelectorAll('.pl-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  plUpdate(type, area, price);
  showHighlight(key);
  const rows = document.querySelectorAll('.pl-row');
  rows.forEach(r => r.classList.remove('active'));
  const idx = ['studio','one','two','three'].indexOf(key);
  if(rows[idx]) rows[idx].classList.add('active');
}

function plRow(el, type, area, price, key) {
  document.querySelectorAll('.pl-row').forEach(r => r.classList.remove('active'));
  el.classList.add('active');
  plUpdate(type, area, price);
  showHighlight(key);
  const idx = Array.from(document.querySelectorAll('.pl-row')).indexOf(el);
  document.querySelectorAll('.pl-tab').forEach((t,i) => t.classList.toggle('active', i===idx));
}


function syncPlanOverlay() {
  const wrap = document.querySelector('.pl-img-wrap');
  const img = document.getElementById('pl-plan-img');
  const svg = document.querySelector('.pl-svg-ov');
  if(!wrap || !img || !svg) return;

  const naturalWidth = img.naturalWidth || 0;
  const naturalHeight = img.naturalHeight || 0;
  if(!naturalWidth || !naturalHeight) return;

  const wrapWidth = wrap.clientWidth;
  const wrapHeight = wrap.clientHeight;
  if(!wrapWidth || !wrapHeight) return;

  const scale = Math.min(wrapWidth / naturalWidth, wrapHeight / naturalHeight);
  const drawWidth = naturalWidth * scale;
  const drawHeight = naturalHeight * scale;
  const left = (wrapWidth - drawWidth) / 2;
  const top = (wrapHeight - drawHeight) / 2;

  [img, svg].forEach(el => {
    el.style.left = left + 'px';
    el.style.top = top + 'px';
    el.style.width = drawWidth + 'px';
    el.style.height = drawHeight + 'px';
  });
}

function initPlanState() {
  const activeTab = document.querySelector('.pl-tab.active');
  const activeRow = document.querySelector('.pl-row.active');
  let key = 'studio';
  if (activeTab) {
    const tabs = Array.from(document.querySelectorAll('.pl-tab'));
    key = ['studio','one','two','three'][tabs.indexOf(activeTab)] || key;
  } else if (activeRow) {
    const rows = Array.from(document.querySelectorAll('.pl-row'));
    key = ['studio','one','two','three'][rows.indexOf(activeRow)] || key;
  }
  showHighlight(key);
  syncPlanOverlay();
}

document.addEventListener('DOMContentLoaded', () => {
  const img = document.getElementById('pl-plan-img');
  if (img) {
    if (img.complete) syncPlanOverlay();
    img.addEventListener('load', syncPlanOverlay);
  }
  initPlanState();
});
window.addEventListener('resize', syncPlanOverlay);

function toggleMenu() {
  const ul = document.querySelector('.gnav ul');
  const hb = document.getElementById('hamburger');
  if (!ul || !hb) return;
  ul.classList.toggle('open');
  hb.classList.toggle('open');
}
// close menu on link click
document.querySelectorAll('.gnav a').forEach(a => {
  a.addEventListener('click', () => {
    const ul = document.querySelector('.gnav ul');
    const hb = document.getElementById('hamburger');
    if (ul) ul.classList.remove('open');
    if (hb) hb.classList.remove('open');
  });
});
