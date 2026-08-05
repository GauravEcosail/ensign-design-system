# Ensign Design System

The design system for **Ecosail / CVMS** — a maritime ERP for vessel reporting, voyage performance and emissions compliance (noon reports, CII, EU MRV/ETS, bunkering).

A single-page, 26-section design system showcase built with **React + Vite**, demonstrating the complete visual language: theme tokens (light & dark), color palette, typography, icons, buttons, inputs, navigation, cards, tables, charts, status indicators, alerts, forms, modals, calendars, spacing, motion — and a full fleet dashboard assembled from it all.

## The system

**Ensign** — shipping-line livery with ocean accents:

- Cream-paper canvas (`#F8F5EC`) with deep navy ink (`#12263A`); dark mode is a navy hull (`#0C1A28`) with warm cream text and a distinctive cream primary button
- Accent palette drawn from the ocean: azure (`#1668B0` light / `#4B9DE0` dark) and sea green (`#12996A` / `#2FAE83`)
- Gradients: brand navy→ocean, accent blue→green, and a soft fog wash
- Archivo signage type with uppercase controls; IBM Plex Mono for figures
- Livery details: a navy/blue/green tricolor stripe and inset-stripe active navigation
- Chart series use a CVD-validated data palette, separate from status colors

Every component reads only `--ds-*` CSS custom properties from [`src/showcase/themes.css`](src/showcase/themes.css) — that file is the entire spec. Both light and dark are first-class; the toggle drives the whole page.

## Run it

```bash
npm install
npm run dev          # local
npm run dev -- --host  # expose on LAN
npm run build        # production build to dist/
```

## Stack

React 18 · Vite 6 · [Recharts](https://recharts.org) for charts · [Lucide](https://lucide.dev) icons · Google Fonts (Archivo, Inter, IBM Plex Mono)

## Structure

```
src/
  showcase/
    themes.css       ← the token contract (the design system itself)
    showcase.css     ← token-driven component styles
    Showcase.jsx     ← page composition + section index
    Foundations.jsx  ← §1–4  theme, color, typography, icons
    Controls.jsx     ← §5–8  buttons, inputs, navigation, cards
    DataViz.jsx      ← §9–13 tables, charts, status, alerts, forms
    Patterns.jsx     ← §14–21 modals, tabs, avatars, menus, calendar…
    System.jsx       ← §22–26 spacing, shadows, motion, dashboard
    bits.jsx         ← shared primitives (gauge, ring, sparkline…)
  data.js            ← maritime mock data (vessels, CII, fuel, ETS)
```

---

🤖 Built with [Claude Code](https://claude.com/claude-code)
