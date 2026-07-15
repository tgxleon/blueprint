# Blueprint

**Your human design, decoded.** Blueprint is a free web app that calculates your complete Human Design chart from your birth details and turns it into a comprehensive, readable report — your energy type, strategy, decision-making authority, profile, centers, and channels, plus practical guidance for applying it to daily life and tricky goals.

**Live app:** deployed on Vercel · auto-deploys from `main`

![Type: static site](https://img.shields.io/badge/stack-vanilla%20HTML%2FCSS%2FJS-8052ff) ![No backend](https://img.shields.io/badge/backend-none-15846e) ![Privacy](https://img.shields.io/badge/birth%20data-never%20leaves%20the%20browser-ffb829)

---

## Features

- **Intuitive input** — name, birth date, time, and country/region of birth. No account, no signup. Timezone (including the historical DST rules of the birth *era*) is resolved automatically from the browser's IANA timezone database.
- **Real astronomical calculation** — planetary positions are computed in the browser, not looked up from canned data (see [How it works](#how-it-works)).
- **Interactive bodygraph** — the classic 9-center chart with all 64 gates and 36 channels. Hover any gate, center, or channel for a plain-language explanation of what it means *in your chart* (including "hanging gates" that complete through other people).
- **A full report, not a summary** — modeled on paid 30-page PDF reports:
  - Foundational properties: type, strategy, authority, profile, definition, signature/not-self, incarnation cross, defined centers, birth + design moments
  - Type deep-dive with "ways to align" guidance
  - All nine centers interpreted for *your* defined/open configuration
  - Named interpretations for every active channel
  - A closing synthesis letter based on your chart's openness
  - Work / Decisions / Energy / Tricky-goals life application per type
- **Explainer tooltips everywhere** — hover any dotted-underlined term to learn what it means; concepts and your specific results are explained separately.
- **Save as PDF** — a print stylesheet renders the dark report as a clean light document.
- **Ambient particle field** — a constellation of drifting triangular fragments behind the content (respects `prefers-reduced-motion`).

## How it works

Everything runs client-side. There is no server, no database, no analytics — birth data never leaves the visitor's browser.

1. **Ephemeris** ([hd-engine.js](hd-engine.js)) — geocentric ecliptic longitudes for the Sun, Moon, lunar nodes, and Mercury–Pluto are computed from JPL approximate Keplerian elements (valid 1800–2050) with Kepler-equation iteration; the Moon uses a truncated Meeus series and the node includes the true-node oscillation term. Accuracy is well within one gate (5.625°); positions exactly on a line boundary (0.9375°) may occasionally differ from professional software by one line.
2. **Design moment** — the chart is calculated twice: at birth (personality) and at the moment the Sun was exactly 88° of arc earlier (design), found by Newton iteration.
3. **Mandala mapping** — longitudes map onto the 64-gate wheel (Gate 41 starting at 2° Aquarius), giving 26 gate.line activations.
4. **Chart derivation** — active channels come from gate pairs; defined centers from active channels; **type** from Sacral definition and motor-to-Throat connectivity (graph search); **authority** from the standard hierarchy (Solar Plexus → Sacral → Spleen → Ego → Self-Projected → Mental → Lunar); **profile** from the Sun lines; **definition** from connected components over the center graph.
5. **Interpretation** ([content.js](content.js), [content-deep.js](content-deep.js)) — static content keyed by every possible result: 5 types, 7 authorities, 12 profiles, 9 centers × defined/open, 36 channels, 64 gate keynotes.

Validated against a professionally generated chart (type, authority, profile, definition, channels, incarnation-cross gates, and planetary activations all match).

## Project structure

```
index.html        page shell and report sections
style.css         Origin-inspired "midnight gallery" design system
app.js            form logic, report rendering, bodygraph SVG, tooltips
hd-engine.js      astronomy + Human Design chart derivation
content.js        core interpretations (types, authorities, profiles, centers)
content-deep.js   long-form report content (centers, channels, closing letters)
timezones.js      country → IANA zone map + historical offset resolution
particles.js      ambient triangle constellation background
```

## Running locally

No build step — serve the folder with any static server:

```bash
python3 -m http.server 4173 --directory .
# → http://localhost:4173
```

## Deploying

The app is a pure static site. On [Vercel](https://vercel.com/new): import the repo, framework preset **Other**, leave build command and output directory empty. Every push to `main` auto-deploys.

## Disclaimer

Human Design is a self-reflection framework, not science or medical advice. Blueprint presents it as a mirror for experimentation — take what resonates, and leave the rest.
