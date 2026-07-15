/* Blueprint — UI */

const C = window.CONTENT;
const D = window.DEEP;

// Country / region selects
const countrySel = document.getElementById('country');
const regionSel = document.getElementById('region');
const regionRow = document.getElementById('region-row');

Object.keys(window.ZONES).sort().forEach(c => {
  const opt = document.createElement('option');
  opt.value = c; opt.textContent = c;
  countrySel.appendChild(opt);
});

function syncRegions() {
  const val = window.ZONES[countrySel.value];
  regionSel.innerHTML = '';
  if (typeof val === 'object') {
    Object.keys(val).forEach(r => {
      const opt = document.createElement('option');
      opt.value = val[r]; opt.textContent = r;
      regionSel.appendChild(opt);
    });
    regionRow.style.display = '';
  } else {
    regionRow.style.display = 'none';
  }
}
countrySel.addEventListener('change', syncRegions);

// Preselect the visitor's country from their browser timezone
(() => {
  const browserZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  for (const [country, val] of Object.entries(window.ZONES)) {
    const zones = typeof val === 'object' ? Object.values(val) : [val];
    if (zones.includes(browserZone)) {
      countrySel.value = country;
      syncRegions();
      if (typeof val === 'object') regionSel.value = browserZone;
      return;
    }
  }
  syncRegions();
})();

function selectedZone() {
  const val = window.ZONES[countrySel.value];
  return typeof val === 'object' ? regionSel.value : val;
}

document.getElementById('hd-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const dateVal = document.getElementById('bdate').value;
  if (!dateVal) return;
  const [y, mo, d] = dateVal.split('-').map(Number);
  const timeVal = document.getElementById('btime').value || '12:00';
  const [h, mi] = timeVal.split(':').map(Number);
  const name = document.getElementById('bname').value.trim();

  const tzOffset = window.tzOffsetHours(selectedZone(), y, mo, d, h, mi);
  const chart = HD.computeChart({ year: y, month: mo, day: d, hour: h, minute: mi, tzOffset });
  render(chart, name);
  document.getElementById('results').classList.add('visible');
  document.getElementById('results').scrollIntoView();
});

document.getElementById('print-btn').addEventListener('click', () => window.print());

// ---- Tooltip (single fixed element; immune to stacking contexts) ----
const tooltipEl = document.createElement('div');
tooltipEl.id = 'tooltip';
document.body.appendChild(tooltipEl);

function showTip(target) {
  tooltipEl.textContent = target.dataset.tip;
  tooltipEl.classList.add('show');
  const r = target.getBoundingClientRect();
  const tw = tooltipEl.offsetWidth, th = tooltipEl.offsetHeight;
  let x = Math.min(Math.max(8, r.left), window.innerWidth - tw - 8);
  let y = r.bottom + 10;
  if (y + th > window.innerHeight - 8) y = r.top - th - 10;
  tooltipEl.style.left = x + 'px';
  tooltipEl.style.top = y + 'px';
}
function hideTip() { tooltipEl.classList.remove('show'); }

document.addEventListener('mouseover', (e) => {
  const t = e.target.closest('.tip');
  if (t) showTip(t); else hideTip();
});
document.addEventListener('focusin', (e) => {
  const t = e.target.closest('.tip');
  if (t) showTip(t); else hideTip();
});
window.addEventListener('scroll', hideTip, { passive: true });

function jdToDateStr(jd) {
  const ms = (jd - 2440587.5) * 86400000;
  return new Date(ms).toISOString().slice(0, 16).replace('T', ' @ ') + ' UTC';
}

function crossAngle(profile) {
  if (profile === '4/1') return 'Juxtaposition Cross';
  return ['5/1', '5/2', '6/2', '6/3'].includes(profile) ? 'Left Angle Cross' : 'Right Angle Cross';
}

function render(chart, name) {
  const t = C.types[chart.type];
  const auth = C.authorities[chart.authority];
  const prof = C.profiles[chart.profile] || ['Your Profile', 'A rare line combination — read both line numbers as your personality (first) and unconscious (second) themes.'];
  const defined = new Set(chart.definedCenters);
  const you = name ? esc(name) : 'you';

  document.getElementById('res-title').innerHTML =
    (name ? `${esc(name)}, you are` : 'You are') + ` <em>${aOrAn(chart.type)} ${chart.type}</em>`;

  // Personal letter
  document.getElementById('letter').innerHTML = `
    <div class="card full letter-card">
      <div class="k">A letter to ${name ? esc(name) : 'you'}</div>
      <p>Dear ${name ? esc(name) : 'friend'},</p>
      <p>What follows isn't a set of instructions — it's a mirror. It won't tell you who you should be; it describes how your energy was already working on the day you were born, so you can stop pushing against your own design and start moving with it.</p>
      <p>Read it as an experiment, not a verdict. Try what resonates for a few weeks, discard what doesn't, and notice what changes. You don't have to get it perfect. You just have to be willing to try.</p>
    </div>`;

  // Summary tiles + foundational properties
  const pSun = chart.personality[0], pEarth = chart.personality[1];
  const dSun = chart.design[0], dEarth = chart.design[1];
  const tip = (text, tipText) => `<span class="tip" tabindex="0" data-tip="${esc(tipText)}">${text}</span>`;
  const angleTips = {
    'Right Angle Cross': 'A personal-destiny cross (~64% of people): your life theme unfolds primarily through your own journey and experiences.',
    'Left Angle Cross': 'A transpersonal cross (~33% of people): your life theme unfolds through the people you encounter — your purpose is entangled with others.',
    'Juxtaposition Cross': 'A rare fixed cross (~3% of people): your life theme runs on its own singular track, neither purely personal nor transpersonal.',
  };
  document.getElementById('tiles').innerHTML = `
    <div class="tile" style="background:${t.color}; color:${chart.type === 'Reflector' ? '#1a1a2e' : '#fff'}">
      <span class="t-label">${tip('Energy Type', 'One of five ways human energy is configured. Your type describes how your energy flows, how you best engage the world — whether you\'re built to initiate, respond, guide, or reflect — and what it costs you to work against that.')}</span>
      <div><div class="t-value">${tip(chart.type, TYPE_TIPS[chart.type])}</div><div class="t-sub">${t.essence.split('.')[0]}.</div></div>
    </div>
    <div class="tile dark">
      <span class="t-label">${tip('Strategy', 'The practical rule of thumb that follows from your type: how to enter opportunities, relationships, and decisions with the least resistance. Following it aligns you with what\'s genuinely meant for you.')}</span>
      <div><div class="t-value">${tip(t.strategy, STRATEGY_TIPS[chart.type])}</div><div class="t-sub">How opportunities are designed to reach you.</div></div>
    </div>
    <div class="tile dark">
      <span class="t-label">${tip('Authority', 'Your body\'s built-in decision-making system — the part of you designed to know what\'s correct for you. It\'s almost never the mind; the mind is for thinking, your authority is for deciding.')}</span>
      <div><div class="t-value">${tip(chart.authority, auth.text.split('.').slice(0, 2).join('.') + '.')}</div><div class="t-sub">Your built-in decision compass.</div></div>
    </div>
    <div class="tile inverted">
      <span class="t-label">${tip('Profile', 'Your learning-and-living style, written as two numbers: how your conscious personality operates (first) and how your unconscious design operates (second). Together they describe the costume your purpose wears.')}</span>
      <div><div class="t-value">${tip(chart.profile, prof[1])}</div><div class="t-sub">${prof[0]}</div></div>
    </div>
    <div class="tile dark">
      <span class="t-label">${tip('Definition', 'How the defined centers in your chart connect to each other — in one continuous circuit or several separate ones. It shapes whether you process life independently or need others to feel complete.')}</span>
      <div><div class="t-value">${tip(chart.definition.replace(' Definition',''), C.definitions[chart.definition])}</div><div class="t-sub">${C.definitions[chart.definition].split('.')[0]}.</div></div>
    </div>
    <div class="tile dark">
      <span class="t-label">${tip('Signature · Not-Self', 'Your two emotional feedback signals. The signature is how alignment feels for your type; the not-self theme is the feeling that tells you you\'ve been living against your design.')}</span>
      <div><div class="t-value">${tip(t.signature, `${t.signature} is your signature — the felt proof you\'re living your design. Its opposite, ${t.notSelf.toLowerCase()}, is your not-self theme: when it becomes chronic, return to your strategy and authority.`)}</div><div class="t-sub">On track you feel ${t.signature.toLowerCase()}; off track, ${t.notSelf.toLowerCase()}.</div></div>
    </div>
    <div class="tile dark">
      <span class="t-label">${tip('Incarnation Cross', 'Your overarching life theme, woven from your four most important gates: the Sun and Earth positions at birth (personality) and at the design moment. It describes the flavor of purpose your life keeps circling back to.')}</span>
      <div><div class="t-value" style="font-size:26px">${tip(crossAngle(chart.profile), angleTips[crossAngle(chart.profile)])}</div>
      <div class="t-sub">(${pSun.gate}/${pEarth.gate} | ${dSun.gate}/${dEarth.gate}) — the life theme woven from your Sun and Earth gates.</div></div>
    </div>
    <div class="tile dark">
      <span class="t-label">${tip('Birth · Design', 'Your chart is calculated twice: at birth (your conscious personality — the you that you know) and ~88 days earlier when the Sun was 88° back (your unconscious design — inherited traits others see in you but you don\'t).')}</span>
      <div><div class="t-value" style="font-size:26px">Two moments</div>
      <div class="t-sub">Personality: ${jdToDateStr(chart.birthJD)}<br>Design: ${jdToDateStr(chart.desJD)}</div></div>
    </div>
    <div class="tile dark">
      <span class="t-label">${tip('Defined Centers', 'The nine centers are energy hubs (like chakras). Colored-in (defined) centers are your consistent, reliable traits; open centers are where you take in and amplify others — your places of sensitivity and wisdom.')}</span>
      <div><div class="t-value" style="font-size:26px">${defined.size} of 9</div>
      <div class="t-sub">${defined.size === 0 ? 'Fully open — a pure mirror.' : [...defined].map(c => C.centers[c][0]).join(' · ')}</div></div>
    </div>`;

  drawBodygraph(chart);

  // The Basics: type, strategy/align, authority, profile
  document.getElementById('meaning').innerHTML = `
    <div class="card full">
      <div class="k">Your type — ${chart.type} · How you're designed to use your energy</div>
      <h3>${t.essence.split('.')[0]}.</h3>
      <p>${t.essence.split('.').slice(1).join('.').trim()}</p>
      <p>${t.meaning}</p>
    </div>
    <div class="card full">
      <div class="k">Your strategy — ${t.strategy} · Ways to align with your type</div>
      <div class="align-grid">
        ${D.align[chart.type].map(([k, v]) => `<div class="align-item"><b>${k}</b><p>${v}</p></div>`).join('')}
      </div>
    </div>
    <div class="card">
      <div class="k">${auth.title} · How to make authentic decisions</div>
      <h3>How you're built to <em>decide</em></h3>
      <p>${auth.text}</p>
      <div class="practice"><b>Try this</b>${auth.practice}</div>
    </div>
    <div class="card">
      <div class="k">Profile ${chart.profile} — ${prof[0]} · How you engage with the world</div>
      <h3>How you're built to <em>learn</em></h3>
      <p>${prof[1]}</p>
      <div class="practice"><b>Definition — ${chart.definition}</b>${C.definitions[chart.definition]}</div>
    </div>
    <div class="card full">
      <div class="k">Aligned vs. off track</div>
      <h3>Your compass: <em>${t.signature}</em> vs. ${t.notSelf.toLowerCase()}</h3>
      <p>${t.signature} is your signature — the felt sense that you're living your design. It isn't a reward at the end; it's live feedback, available every day. When it's present, keep going.</p>
      <p>${t.notSelf} is your not-self theme — the emotional smoke alarm of your type. It doesn't mean you're broken; it means somewhere you've been initiating, forcing, or committing against your strategy and authority. When it becomes chronic, don't push harder: return to your strategy (${t.strategy.toLowerCase()}) and your ${chart.authority.toLowerCase()} authority, and let the next right thing come to you the way your design intends.</p>
    </div>`;

  // Life application
  const lifeColors = ['var(--color-deep-iris)', 'var(--color-graphite)', 'var(--color-graphite)', 'var(--color-deep-iris)'];
  document.getElementById('life').innerHTML = t.life.map(([k, v], i) => `
    <div class="life-tile" style="background:${lifeColors[i]}">
      <h4>${k}</h4><p>${v}</p>
    </div>`).join('');

  // Centers — full report cards
  document.getElementById('centers').innerHTML = Object.entries(D.centers).map(([key, cc]) => {
    const isDef = defined.has(key);
    const s = isDef ? cc.defined : cc.open;
    return `
    <div class="card full center-report ${isDef ? 'is-defined' : ''}">
      <div class="k">${isDef ? 'Defined' : 'Open'} ${C.centers[key][0]} center · ${cc.q}</div>
      <h3>${s.h}</h3>
      ${s.body.map(p => `<p>${p}</p>`).join('')}
      <div class="practice"><b>Living this well</b>${s.p}</div>
    </div>`;
  }).join('');

  // Channels
  const chHtml = chart.activeChannels.map(([a, b]) => {
    const key = `${a}-${b}`;
    const [nm, desc] = D.channels[key] || [`Channel ${key}`, ''];
    return `
    <div class="card full">
      <div class="k">${nm} · ${a}-${b} · ${C.centers[HD.GATE_CENTER[a]][0]} ↔ ${C.centers[HD.GATE_CENTER[b]][0]}</div>
      <h3>${desc.split('.')[0]}.</h3>
      <p>${desc.split('.').slice(1).join('.').trim()}</p>
    </div>`;
  }).join('');
  document.getElementById('channels').innerHTML = chHtml ||
    `<div class="card full"><div class="k">Your channels</div><h3>No fixed channels — pure receptivity</h3>
     <p>As a Reflector you have no permanently active channels. The Moon and planets activate different channels in you as they move, which is why your gifts rotate — and why environment and timing matter more for you than for any other design.</p></div>`;

  // Closing letter
  const opennessKey = defined.size <= 4 ? 'high' : defined.size <= 6 ? 'mid' : 'low';
  document.getElementById('closing').innerHTML = `
    <div class="card full letter-card">
      <div class="k">Echoes of wisdom</div>
      <p><em>Dear ${name ? esc(name) : 'friend'},</em></p>
      <p>${D.closing.openness[opennessKey]}</p>
      <p>${D.closing.type[chart.type]} Your ${chart.authority.toLowerCase()} authority is the instrument to trust: ${auth.practice.charAt(0).toLowerCase()}${auth.practice.slice(1)}</p>
      <p>Your greatest strength comes when you honor your limits and stop trying to prove who you are. The more ${you === 'you' ? 'you stay' : `${you} stays`} connected to your own design, the more naturally your gifts support the people around you.</p>
      <p>Trust the process. Trust your design.</p>
    </div>`;

  // Gate tables
  const row = a => `<tr><td>${a.planet}</td><td>Gate ${a.gate}.${a.line}</td></tr>`;
  document.getElementById('gates').innerHTML = `
    <div class="gate-table pers"><h4>Personality · Conscious (birth)</h4><table>${chart.personality.map(row).join('')}</table></div>
    <div class="gate-table des"><h4>Design · Unconscious (~88° of sun arc prior)</h4><table>${chart.design.map(row).join('')}</table></div>`;
}

const TYPE_TIPS = {
  'Generator': 'The builder type (~37% of people). A defined Sacral center gives you sustainable life-force energy that renews itself when spent on work you genuinely love.',
  'Manifesting Generator': 'A hybrid builder-initiator (~33% of people). Sacral power plus a motor connected to the Throat: multi-passionate, fast, built to skip steps.',
  'Projector': 'The guide type (~20% of people). No Sacral motor — your gift is penetrating insight into others and systems, designed to be shared where it\'s recognized and invited.',
  'Manifestor': 'The initiator type (~9% of people). A motor connected to the Throat lets you go from impulse to action without waiting for anyone — you open doors others walk through.',
  'Reflector': 'The rarest type (~1% of people). No defined centers: you sample and mirror your environment, making you a living barometer of your community\'s health.',
};
const STRATEGY_TIPS = {
  'Generator': 'Instead of initiating cold, let life bring you things — then trust your gut\'s yes or no. Committing only to what your body responds to keeps your energy renewable.',
  'Manifesting Generator': 'Let life bring you options, trust your gut\'s response, then move at full speed — and give the people affected a quick heads-up before you leap.',
  'Projector': 'Your guidance lands when it\'s asked for. For big moves — jobs, relationships, cities — wait for genuine recognition and invitation rather than chasing.',
  'Manifestor': 'You don\'t need permission — but informing the people in your impact zone before you act melts the resistance your initiating naturally creates.',
  'Reflector': 'For major decisions, wait a full lunar cycle (~28 days). Clarity comes to you over time and through conversations, never in the moment.',
};

function aOrAn(w) { return /^[aeiou]/i.test(w) ? 'an' : 'a'; }
function esc(s) { return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

// ---- Bodygraph SVG (gate-level, classic layout) ----

// Anchor position of each of the 64 gates inside its center
const GATE_POS = {
  // Head
  64: [225, 82], 61: [250, 82], 63: [275, 82],
  // Ajna
  47: [225, 128], 24: [250, 128], 4: [275, 128], 17: [230, 152], 11: [270, 152], 43: [250, 174],
  // Throat
  62: [225, 237], 23: [250, 237], 56: [275, 237], 16: [222, 258], 35: [278, 258],
  20: [222, 278], 12: [278, 278], 45: [278, 296], 31: [225, 308], 8: [250, 308], 33: [275, 308],
  // G
  1: [250, 357], 7: [228, 378], 13: [272, 378], 10: [212, 395], 25: [288, 395],
  15: [230, 414], 46: [270, 414], 2: [250, 434],
  // Heart
  21: [335, 441], 51: [322, 452], 40: [347, 452], 26: [333, 465],
  // Spleen
  48: [55, 517], 57: [70, 529], 44: [80, 541], 50: [80, 553], 32: [70, 565], 28: [55, 577], 18: [40, 589],
  // Sacral
  5: [225, 517], 14: [250, 517], 29: [275, 517], 34: [222, 540], 59: [278, 540],
  27: [222, 562], 42: [225, 575], 3: [250, 575], 9: [275, 575],
  // Solar Plexus
  36: [445, 517], 22: [430, 529], 37: [420, 541], 6: [420, 553], 49: [430, 565], 55: [445, 577], 30: [460, 589],
  // Root
  53: [225, 657], 60: [250, 657], 52: [275, 657], 54: [222, 680], 38: [222, 698],
  58: [222, 714], 19: [278, 680], 39: [278, 698], 41: [278, 714],
};

// Quadratic control points for channels that curve around the body (key: "lo-hi")
const CHANNEL_BEND = {
  '16-48': [140, 340], '20-57': [130, 360], '10-20': [165, 330], '10-34': [165, 470],
  '10-57': [130, 470], '20-34': [140, 410], '34-57': [140, 555], '27-50': [150, 575],
  '26-44': [200, 512], '32-54': [115, 660], '28-38': [105, 680], '18-58': [95, 700],
  '35-36': [360, 340], '12-22': [350, 360], '21-45': [330, 355], '25-51': [306, 418],
  '37-40': [392, 482], '6-59': [350, 560], '19-49': [385, 660], '39-55': [400, 690], '30-41': [410, 705],
};

const CENTER_SHAPES = {
  head:   'M 250 25 L 295 95 L 205 95 Z',
  ajna:   'M 205 115 L 295 115 L 250 190 Z',
  throat: 'M 218 225 h 64 q 10 0 10 10 v 75 q 0 10 -10 10 h -64 q -10 0 -10 -10 v -75 q 0 -10 10 -10 Z',
  g:      'M 250 335 L 310 395 L 250 455 L 190 395 Z',
  heart:  'M 308 433 L 362 433 L 337 479 Z',
  spleen: 'M 30 495 L 135 547 L 30 600 Z',
  solar:  'M 470 495 L 365 547 L 470 600 Z',
  sacral: 'M 218 505 h 64 q 10 0 10 10 v 60 q 0 10 -10 10 h -64 q -10 0 -10 -10 v -60 q 0 -10 10 -10 Z',
  root:   'M 218 645 h 64 q 10 0 10 10 v 60 q 0 10 -10 10 h -64 q -10 0 -10 -10 v -60 q 0 -10 10 -10 Z',
};

const CENTER_LABELS = {
  head: [250, 14, 'middle'], ajna: [308, 152, 'start'], throat: [304, 272, 'start'],
  g: [180, 380, 'end'], heart: [372, 452, 'start'], spleen: [30, 622, 'start'],
  solar: [470, 622, 'end'], sacral: [304, 547, 'start'], root: [250, 745, 'middle'],
};

function channelPath(a, b) {
  const [x1, y1] = GATE_POS[a], [x2, y2] = GATE_POS[b];
  const key = [a, b].sort((m, n) => m - n).join('-');
  const c = CHANNEL_BEND[key];
  return c ? `M ${x1} ${y1} Q ${c[0]} ${c[1]} ${x2} ${y2}` : `M ${x1} ${y1} L ${x2} ${y2}`;
}

function drawBodygraph(chart) {
  const defined = new Set(chart.definedCenters);
  const pers = new Set(chart.personality.map(a => a.gate));
  const des = new Set(chart.design.map(a => a.gate));
  const activeChannelKeys = new Set(chart.activeChannels.map(([a, b]) => [a, b].sort((m, n) => m - n).join('-')));

  // 1. All 36 channels as faint wiring; active ones highlighted
  let wires = '', activeWires = '';
  HD.CHANNELS.forEach(([a, b]) => {
    const d = channelPath(a, b);
    const key = [a, b].sort((m, n) => m - n).join('-');
    if (activeChannelKeys.has(key)) {
      activeWires += `<path d="${d}" fill="none" stroke="var(--color-cyan-signal)" stroke-width="4" stroke-linecap="round" opacity="0.95"/>`;
    } else {
      wires += `<path d="${d}" fill="none" stroke="#2a2b2d" stroke-width="2" stroke-linecap="round"/>`;
    }
  });

  // 2. Center shapes on top of the wiring
  let shapes = '';
  Object.entries(CENTER_SHAPES).forEach(([c, d]) => {
    const isDef = defined.has(c);
    shapes += `<path d="${d}" fill="${isDef ? 'var(--color-iris-gleam)' : '#131416'}"
      stroke="${isDef ? 'var(--color-iris-gleam)' : '#3f4041'}" stroke-width="1.5"/>`;
    const [lx, ly, anchor] = CENTER_LABELS[c];
    shapes += `<text x="${lx}" y="${ly}" text-anchor="${anchor}" fill="${isDef ? '#d1c9ff' : '#6a6b6b'}"
      font-family="Roboto Mono" font-size="9" letter-spacing="1.5">${C.centers[c][0].toUpperCase()}</text>`;
  });

  // 3. Gate numbers: activated gates get a filled badge (white = personality,
  //    pink = design, ringed white = both); the rest stay quiet
  let gates = '';
  Object.entries(GATE_POS).forEach(([g, [x, y]]) => {
    const gate = Number(g);
    const inP = pers.has(gate), inD = des.has(gate);
    const onDef = defined.has(HD.GATE_CENTER[gate]);
    if (inP || inD) {
      const fill = inP ? '#ffffff' : 'var(--color-orchid-bloom)';
      const ring = inP && inD ? `stroke="var(--color-orchid-bloom)" stroke-width="2.5"` : `stroke="none"`;
      gates += `<circle cx="${x}" cy="${y}" r="7.5" fill="${fill}" ${ring}/>
        <text x="${x}" y="${y + 2.8}" text-anchor="middle" fill="#000" font-family="Roboto Mono" font-size="8" font-weight="500">${g}</text>`;
    } else {
      gates += `<text x="${x}" y="${y + 2.8}" text-anchor="middle" fill="${onDef ? 'rgba(255,255,255,0.55)' : '#5a5b5d'}"
        font-family="Roboto Mono" font-size="8">${g}</text>`;
    }
  });

  document.getElementById('bodygraph').innerHTML =
    `<svg viewBox="0 0 500 755" width="100%" style="max-width:500px" xmlns="http://www.w3.org/2000/svg">${wires}${activeWires}${shapes}${gates}</svg>`;
}
