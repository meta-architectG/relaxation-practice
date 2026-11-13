[English](README.md) | [Русский](README.ru.md)

# Relaxation Practice

PWA for breathing exercises, grounding, and stress relief. Built with React 19 + Vite.

## Live Demo

[Check it out](https://relaxation-practice.meta-architect.workers.dev)

## Stack

- **React 19** (Hooks, Portals)
- **Vite** (build tool)
- **Vanilla CSS** (variables, grid/flex, responsive)
- **Vitest + React Testing Library** (tests)
- **vite-plugin-pwa** (installable, offline)

## Features

- **Breathing**: 50ms precision timer, synced with an SVG progress ring. Uses `Wake Lock API` to keep the screen on.
- **Grounding**: Find 5 objects of a random color, resets progress on color change.
- **Relaxation**: Timers for tension (5s) and relaxation (15s) phases.
- **Thoughts**: Textarea with a fade-out animation.
- **PWA**: Installable on iOS/Android, auto-updates.

## Architecture & Code

- Business logic is in custom hooks (`useBreathingTimer`, `useLockBodyScroll`), UI components are clean.
- Modals have a focus trap, close on `Escape` and backdrop click.
- Respects `prefers-reduced-motion` for users with vestibular disorders.
- 11 tests written (hooks, navigation, forms).

## Getting Started

```bash
git clone https://github.com/meta-architectG/relaxation-practice.git
npm install
npm run dev

