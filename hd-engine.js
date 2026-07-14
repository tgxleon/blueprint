/* Blueprint — Human Design calculation engine.
   Planetary positions via JPL approximate Keplerian elements (valid 1800–2050),
   Moon via truncated Meeus series. Accuracy is well within one gate (5.625°). */

const DEG = Math.PI / 180;

function norm360(x) { return ((x % 360) + 360) % 360; }

// ---- Julian day (UTC) ----
function julianDay(y, m, d, hourUTC) {
  if (m <= 2) { y -= 1; m += 12; }
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);
  return Math.floor(365.25 * (y + 4716)) + Math.floor(30.6001 * (m + 1)) + d + B - 1524.5 + hourUTC / 24;
}

// ---- Keplerian elements: [a, e, I, L, longPeri, longNode] + rates per century ----
const ELEMENTS = {
  mercury: [[0.38709927, 0.20563593, 7.00497902, 252.25032350, 77.45779628, 48.33076593],
            [0.00000037, 0.00001906, -0.00594749, 149472.67411175, 0.16047689, -0.12534081]],
  venus:   [[0.72333566, 0.00677672, 3.39467605, 181.97909950, 131.60246718, 76.67984255],
            [0.00000390, -0.00004107, -0.00078890, 58517.81538729, 0.00268329, -0.27769418]],
  earth:   [[1.00000261, 0.01671123, -0.00001531, 100.46457166, 102.93768193, 0.0],
            [0.00000562, -0.00004392, -0.01294668, 35999.37244981, 0.32327364, 0.0]],
  mars:    [[1.52371034, 0.09339410, 1.84969142, -4.55343205, -23.94362959, 49.55953891],
            [0.00001847, 0.00007882, -0.00813131, 19140.30268499, 0.44441088, -0.29257343]],
  jupiter: [[5.20288700, 0.04838624, 1.30439695, 34.39644051, 14.72847983, 100.47390909],
            [-0.00011607, -0.00013253, -0.00183714, 3034.74612775, 0.21252668, 0.20469106]],
  saturn:  [[9.53667594, 0.05386179, 2.48599187, 49.95424423, 92.59887831, 113.66242448],
            [-0.00125060, -0.00050991, 0.00193609, 1222.49362201, -0.41897216, -0.28867794]],
  uranus:  [[19.18916464, 0.04725744, 0.77263783, 313.23810451, 170.95427630, 74.01692503],
            [-0.00196176, -0.00004397, -0.00242939, 428.48202785, 0.40805281, 0.04240589]],
  neptune: [[30.06992276, 0.00859048, 1.77004347, -55.12002969, 44.96476227, 131.78422574],
            [0.00026291, 0.00005105, 0.00035372, 218.45945325, -0.32241464, -0.00508664]],
  pluto:   [[39.48211675, 0.24882730, 17.14001206, 238.92903833, 224.06891629, 110.30393684],
            [-0.00031596, 0.00005170, 0.00004818, 145.20780515, -0.01183482, -0.01831482]],
};

function heliocentricXYZ(name, T) {
  const [el0, rate] = ELEMENTS[name];
  const a = el0[0] + rate[0] * T;
  const e = el0[1] + rate[1] * T;
  const I = (el0[2] + rate[2] * T) * DEG;
  const L = norm360(el0[3] + rate[3] * T);
  const lp = el0[4] + rate[4] * T;
  const ln = el0[5] + rate[5] * T;
  const M = norm360(L - lp) * DEG;
  const w = (lp - ln) * DEG;
  const O = ln * DEG;
  // Kepler
  let E = M + e * Math.sin(M);
  for (let i = 0; i < 8; i++) E = E - (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
  const xp = a * (Math.cos(E) - e);
  const yp = a * Math.sqrt(1 - e * e) * Math.sin(E);
  const cw = Math.cos(w), sw = Math.sin(w), cO = Math.cos(O), sO = Math.sin(O), cI = Math.cos(I), sI = Math.sin(I);
  return {
    x: (cw * cO - sw * sO * cI) * xp + (-sw * cO - cw * sO * cI) * yp,
    y: (cw * sO + sw * cO * cI) * xp + (-sw * sO + cw * cO * cI) * yp,
    z: (sw * sI) * xp + (cw * sI) * yp,
  };
}

function geocentricLongitude(name, T) {
  const e = heliocentricXYZ('earth', T);
  if (name === 'sun') return norm360(Math.atan2(-e.y, -e.x) / DEG);
  const p = heliocentricXYZ(name, T);
  return norm360(Math.atan2(p.y - e.y, p.x - e.x) / DEG);
}

// ---- Moon (Meeus truncated, error < ~0.1°) ----
function moonLongitude(T) {
  const Lp = norm360(218.3164477 + 481267.88123421 * T - 0.0015786 * T * T);
  const D = norm360(297.8501921 + 445267.1114034 * T - 0.0018819 * T * T) * DEG;
  const M = norm360(357.5291092 + 35999.0502909 * T - 0.0001536 * T * T) * DEG;
  const Mp = norm360(134.9633964 + 477198.8675055 * T + 0.0087414 * T * T) * DEG;
  const F = norm360(93.2720950 + 483202.0175233 * T - 0.0036539 * T * T) * DEG;
  let dL =
    6.288774 * Math.sin(Mp) +
    1.274027 * Math.sin(2 * D - Mp) +
    0.658314 * Math.sin(2 * D) +
    0.213618 * Math.sin(2 * Mp) -
    0.185116 * Math.sin(M) -
    0.114332 * Math.sin(2 * F) +
    0.058793 * Math.sin(2 * D - 2 * Mp) +
    0.057066 * Math.sin(2 * D - M - Mp) +
    0.053322 * Math.sin(2 * D + Mp) +
    0.045758 * Math.sin(2 * D - M) -
    0.040923 * Math.sin(M - Mp) -
    0.034720 * Math.sin(D) -
    0.030383 * Math.sin(M + Mp) +
    0.015327 * Math.sin(2 * D - 2 * F) -
    0.012528 * Math.sin(Mp + 2 * F) +
    0.010980 * Math.sin(Mp - 2 * F);
  return norm360(Lp + dL);
}

function trueNodeLongitude(T, sunLon) {
  const mean = norm360(125.0445479 - 1934.1362891 * T + 0.0020754 * T * T);
  // dominant oscillation of the true node (period ~173d, amplitude ~1.5°)
  return norm360(mean + 1.4979 * Math.sin(2 * (sunLon - mean) * DEG));
}

function Tof(jd) { return (jd - 2451545.0) / 36525; }

// ---- Design moment: sun 88° of arc before birth ----
function designJD(birthJD) {
  const target = norm360(geocentricLongitude('sun', Tof(birthJD)) - 88);
  let jd = birthJD - 88.0;
  for (let i = 0; i < 10; i++) {
    let diff = norm360(geocentricLongitude('sun', Tof(jd)) - target);
    if (diff > 180) diff -= 360;
    if (Math.abs(diff) < 1e-5) break;
    jd -= diff / 0.98565; // sun mean motion deg/day
  }
  return jd;
}

// ---- Gate wheel: 64 gates, 5.625° each, gate 41 starts at 302° (2° Aquarius) ----
const GATE_ORDER = [41,19,13,49,30,55,37,63,22,36,25,17,21,51,42,3,27,24,2,23,8,20,16,35,45,12,15,52,39,53,62,56,31,33,7,4,29,59,40,64,47,6,46,18,48,57,32,50,28,44,1,43,14,34,9,5,26,11,10,58,38,54,61,60];
const WHEEL_START = 302.0;

function gateLine(lon) {
  const pos = norm360(lon - WHEEL_START);
  const idx = Math.floor(pos / 5.625);
  const line = Math.floor((pos % 5.625) / 0.9375) + 1;
  return { gate: GATE_ORDER[idx], line };
}

// ---- Bodygraph structure ----
const GATE_CENTER = {};
[[ 'head', [64,61,63]],
 ['ajna', [47,24,4,17,43,11]],
 ['throat', [62,23,56,35,12,45,33,8,31,20,16]],
 ['g', [1,13,25,46,2,15,10,7]],
 ['heart', [21,40,26,51]],
 ['spleen', [48,57,44,50,32,28,18]],
 ['sacral', [5,14,29,59,9,3,42,27,34]],
 ['solar', [6,37,22,36,30,55,49]],
 ['root', [53,60,52,19,39,41,58,38,54]],
].forEach(([c, gates]) => gates.forEach(g => GATE_CENTER[g] = c));

const CHANNELS = [
  [1,8],[2,14],[3,60],[4,63],[5,15],[6,59],[7,31],[9,52],[10,20],[10,34],[10,57],
  [11,56],[12,22],[13,33],[16,48],[17,62],[18,58],[19,49],[20,34],[20,57],[21,45],
  [23,43],[24,61],[25,51],[26,44],[27,50],[28,38],[29,46],[30,41],[32,54],[34,57],
  [35,36],[37,40],[39,55],[42,53],[47,64],
];

const MOTORS = ['sacral', 'solar', 'heart', 'root'];

// ---- Chart computation ----
const PLANETS = [
  ['Sun', 'sun'], ['Earth', null], ['Moon', 'moon'], ['North Node', 'node'], ['South Node', null],
  ['Mercury', 'mercury'], ['Venus', 'venus'], ['Mars', 'mars'], ['Jupiter', 'jupiter'],
  ['Saturn', 'saturn'], ['Uranus', 'uranus'], ['Neptune', 'neptune'], ['Pluto', 'pluto'],
];

function activationsAt(jd) {
  const T = Tof(jd);
  const sun = geocentricLongitude('sun', T);
  const node = trueNodeLongitude(T, sun);
  const lons = {
    Sun: sun, Earth: norm360(sun + 180), Moon: moonLongitude(T),
    'North Node': node, 'South Node': norm360(node + 180),
  };
  ['mercury','venus','mars','jupiter','saturn','uranus','neptune','pluto'].forEach(p => {
    lons[p.charAt(0).toUpperCase() + p.slice(1)] = geocentricLongitude(p, T);
  });
  return PLANETS.map(([label]) => ({ planet: label, ...gateLine(lons[label]) }));
}

function computeChart({ year, month, day, hour, minute, tzOffset }) {
  const birthJD = julianDay(year, month, day, hour + minute / 60 - tzOffset);
  const desJD = designJD(birthJD);
  const personality = activationsAt(birthJD);
  const design = activationsAt(desJD);

  const allGates = new Set([...personality, ...design].map(a => a.gate));
  const activeChannels = CHANNELS.filter(([a, b]) => allGates.has(a) && allGates.has(b));

  // Defined centers & connectivity graph
  const defined = new Set();
  const adj = {};
  activeChannels.forEach(([a, b]) => {
    const ca = GATE_CENTER[a], cb = GATE_CENTER[b];
    defined.add(ca); defined.add(cb);
    (adj[ca] = adj[ca] || new Set()).add(cb);
    (adj[cb] = adj[cb] || new Set()).add(ca);
  });

  function connected(from, to) {
    const seen = new Set([from]); const q = [from];
    while (q.length) {
      const c = q.shift();
      if (c === to) return true;
      (adj[c] || []).forEach(n => { if (!seen.has(n)) { seen.add(n); q.push(n); } });
    }
    return false;
  }

  const sacral = defined.has('sacral');
  const motorToThroat = MOTORS.some(m => defined.has(m) && connected(m, 'throat'));

  let type;
  if (defined.size === 0) type = 'Reflector';
  else if (sacral) type = motorToThroat ? 'Manifesting Generator' : 'Generator';
  else if (motorToThroat) type = 'Manifestor';
  else type = 'Projector';

  let authority;
  if (type === 'Reflector') authority = 'Lunar';
  else if (defined.has('solar')) authority = 'Emotional';
  else if (defined.has('sacral')) authority = 'Sacral';
  else if (defined.has('spleen')) authority = 'Splenic';
  else if (defined.has('heart') && connected('heart', 'throat')) authority = 'Ego';
  else if (defined.has('g')) authority = 'Self-Projected';
  else authority = 'Mental';

  // Definition: connected components among defined centers
  const comps = [];
  const seen = new Set();
  defined.forEach(c => {
    if (seen.has(c)) return;
    const q = [c]; seen.add(c); let n = 0;
    while (q.length) { const x = q.shift(); n++; (adj[x] || []).forEach(y => { if (!seen.has(y)) { seen.add(y); q.push(y); } }); }
    comps.push(n);
  });
  const definition = ['No Definition', 'Single Definition', 'Split Definition', 'Triple Split Definition', 'Quadruple Split Definition'][comps.length] || 'Split Definition';

  const profile = `${personality[0].line}/${design[0].line}`;

  return { personality, design, activeChannels, definedCenters: [...defined], type, authority, definition, profile, birthJD, desJD };
}

window.HD = { computeChart, GATE_CENTER, CHANNELS };
