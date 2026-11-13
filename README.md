[English](README.md) | [Русский](README.ru.md)

# Relaxation Practice

A PWA (Progressive Web App) for breathing exercises, stress relief, and grounding. Built with a focus on clean architecture, accessibility (A11y), performance, and smooth micro-interactions.

## Live Demo

[View the live application](https://relaxation-practice.layero.app)

## Tech Stack

- **Core:** React 19 (Hooks, Portals)
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (CSS variables, Grid/Flexbox, fully responsive)
- **Testing:** Vitest, React Testing Library, JSDOM
- **PWA:** `vite-plugin-pwa` (installable on home screen, auto-update)
- **Analytics:** Top.Mail.Ru (VK)

## Implemented Features

- **Breathing Practice:** Custom timer with high precision (50ms tick), SVG progress ring synchronization, and `Wake Lock API` to prevent screen sleep.
- **Grounding Practice:** Interactive UI with random color generation, 5-step counting logic, and reset functionality.
- **Progressive Muscle Relaxation:** Step-by-step guide with automated timers for tension (5s) and relaxation (15s) phases.
- **Letting Go of Thoughts:** Input form with a fade-out animation simulating the destruction of negative thoughts.
- **PWA Support:** Fully installable on iOS/Android home screens with automatic updates via Service Worker.
- **Responsive Design:** Adapted for all devices from 320px mobile screens to 4K monitors.

## Architectural Decisions

- **Separation of Concerns:** All business logic is extracted into custom hooks (`useBreathingTimer`, `useLockBodyScroll`), keeping UI components clean and focused on rendering.
- **A11y (Accessibility):**
  - Full focus trap in modals and `Escape` key support.
  - `prefers-reduced-motion` support to disable animations for users with vestibular disorders.
  - Semantic HTML and correct `aria-label` attributes.
- **Testing:** 11 tests written covering critical paths (unit tests for hooks, integration tests for navigation, UI tests for modals and forms).

## Getting Started Locally

```bash
# 1. Clone the repository
git clone https://github.com/meta-architectG/relaxation-practice.git

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```
