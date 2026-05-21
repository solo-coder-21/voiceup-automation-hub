# VoiceUp Automation Hub

Marketing site for VoiceUp — an AI-powered voice automation platform for contact centers.

## Tech stack

- [Vite](https://vitejs.dev/) + [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/) for client-side routing
- [TanStack Query](https://tanstack.com/query) for data fetching
- [lucide-react](https://lucide.dev/) icons

## Getting started

```bash
# Install dependencies
npm install

# Start the dev server (http://localhost:8080)
npm run dev

# Production build
npm run build

# Preview the production build locally
npm run preview

# Lint
npm run lint
```

Dev server port is configured to `8080` in [`vite.config.ts`](./vite.config.ts).

## Project structure

```
public/                  Static assets (logo, hero video, robots.txt)
src/
  components/            Site-wide components (Navbar, Footer, shadcn ui/)
  pages/                 Route pages (Index, Solutions, Industries, ...)
  hooks/                 Custom React hooks
  lib/                   Utilities
  index.css              Global styles + design tokens
  main.tsx               App entry
  App.tsx                Router + providers
```

## Performance notes

The landing page (`src/pages/Index.tsx`) drives several scroll-linked and looping
animations. To keep scrolling smooth:

- Scroll handlers are throttled with `requestAnimationFrame` and write to CSS variables instead of React state, so scrolling does not re-render the page.
- Decorative animations (orbits, waveform, background patterns) are gated to `IntersectionObserver` so they only run while their section is on-screen.
- The hero `<video>` uses `preload="metadata"` and pauses when scrolled out of the viewport.
- Global rules respect `prefers-reduced-motion` and pause infinite animations for users who request reduced motion.
