[English](README.md) | [Русский](README.ru.md)

# Relaxation Practice

A Progressive Web App for breathing exercises, stress relief, and grounding. Built with React, Vite, and a focus on clean architecture, accessibility (A11y), and smooth micro-interactions.

## Live Demo

[View the live application](https://relaxation-practice.layero.app)

## Tech Stack

- **Core:** React 19 (Hooks, Portals)
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (CSS variables, Grid/Flexbox, responsive design)
- **Testing:** Vitest, React Testing Library, JSDOM
- **PWA:** `vite-plugin-pwa` (installable, auto-update)
- **Analytics:** Top.Mail.Ru (VK)

## Features

- **Breathing Practice**: Custom timer with 50ms precision, synced with an SVG progress ring. Uses the Wake Lock API to keep the screen on.
- **Grounding Practice**: Interactive UI with random color generation, a 5-step counting logic, and a reset button.
- **Muscle Relaxation**: Step-by-step guide with automated timers for tension (5s) and relaxation (15s) phases.
- **Letting Go of Thoughts**: Input form with a fade-out animation to simulate releasing negative thoughts.
- **PWA Ready**: Fully installable on iOS/Android with automatic Service Worker updates.
- **Responsive**: Works properly on everything from 320px mobile screens to 4K monitors.

## Architecture & Code Quality

- **Separation of Concerns**: Business logic is extracted into custom hooks (`useBreathingTimer`, `useLockBodyScroll`). UI components stay clean and focused on rendering.
- **Accessibility (A11y)**:
  - Modals have a full focus trap and close on the `Escape` key.
  - `prefers-reduced-motion` support to disable animations for users with vestibular disorders.
  - Semantic HTML and `aria-label` attributes.
- **Testing**: 11 tests written (unit for hooks, integration for navigation, UI for modals/forms).

## Getting Started Locally

```bash
# 1. Clone the repository
git clone https://github.com/meta-architectG/relaxation-practice.git

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev


