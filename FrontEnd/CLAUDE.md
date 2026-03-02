# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Portfolio website for "Digital Rescue Developers" — a React 18 + Vite SPA in Spanish showcasing web development services.

## Commands

```bash
npm run dev        # Start Vite dev server
npm run build      # Production build (output: dist/)
npm run preview    # Preview production build locally
npm run lint       # ESLint (js,jsx)
```

No test framework is configured.

## Tech Stack

- **React 18** (functional components, hooks only — no class components)
- **Vite 5** with `@vitejs/plugin-react`
- **Tailwind CSS 4** via `@tailwindcss/vite` (no tailwind.config file — uses Vite plugin)
- **Framer Motion** for animations (page transitions, scroll-based, stagger effects)
- **React Router DOM 7** for client-side routing
- **EmailJS** for contact form submission (credentials in `config.js`, which is gitignored)
- **react-lazy-load-image-component** for image optimization
- **lucide-react** for icons

## Architecture

### Routing

Four routes defined in `src/App.jsx`:
- `/` → HomePage (main landing with all sections)
- `/nosotros` → AboutUs page
- `/servicios` → OnDevelopment placeholder
- `/contacto` → OnDevelopment placeholder

Page transitions use a custom door-opening animation (split logo with clipPath) orchestrated via Framer Motion's `AnimatePresence`. NavBar and Footer only render on the home route.

### Directory Layout

- `src/Pages/` — Page-level components, each in its own folder with sub-sections
- `src/Components/` — Reusable components (ProjectCard, TechList, SliderComponent, etc.)
- `src/services/` — Utility modules (ContactForm with EmailJS integration and validation)
- `src/assets/` — Static assets organized by type (Logo/, SliderImgs/, Technologies/, etc.)

### State Management

No state library — local `useState`/`useRef` only. State is minimal and component-scoped.

### Styling Approach

Mix of Tailwind CSS utility classes and component-scoped CSS files. Global styles and CSS custom properties (Blue Ribbon color palette, dark theme `#101720`) are in `src/index.css`. Font: "Inconsolata" (monospace, loaded via Google Fonts in `index.html`).

### Animation Patterns

Framer Motion is used extensively:
- `whileInView` for scroll-triggered entrance animations
- Stagger animations via `staggerChildren` in parent variants
- Custom page transition variants in `App.jsx`
- Color cycling animations on text

### Credentials

`config.js` (root level) holds EmailJS `Service_ID`, `Template_ID`, and `Public_Key`. This file is gitignored — it must be created locally with the correct values for the contact form to work.
