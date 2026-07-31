# CLAUDE.md

This file provides guidance to AI coding assistants working in this repository.

## Project Summary

The official recruitment and showcase web portal for the Network Public Opinion Security Laboratory (Qinglang Pioneer Team) at Jiangsu Police Institute (JSPI), College of National Security. It is a single-page client-side application (SPA) built with React 18, Vite 6, TypeScript 5, and Tailwind CSS v4.

## Core Commands

- `pnpm dev` - Start local development server with Vite hot module replacement
- `pnpm build` - Execute TypeScript type checks (`tsc`) and compile production bundle via Vite
- `pnpm lint` - Perform full TypeScript type verification (`tsc --noEmit`)
- `pnpm preview` - Preview production build locally from the `dist/` directory

Package Manager: `pnpm` is used for package management. Note: TypeScript (`tsc`) serves as the strict single source of truth for build validation. Always run `pnpm build` or `pnpm lint` before committing code changes.

## Architecture Guidelines

- Tech Stack: React 18, Vite 6, TypeScript 5 (Strict Mode), Tailwind CSS v4 (`@tailwindcss/vite` plugin), Framer Motion 11, Lucide React icons, React Router DOM (HashRouter).
- Routing: Configured in `App.tsx` using `HashRouter` with five core top-level pages (`/`, `/achievements`, `/development`, `/overview`, `/join`). `ScrollToTop` automatically resets window scroll position on route changes.
- Content Management: Pages in `src/pages/` are self-contained layout components. Section data structures (awards, timeline, policies, infrastructure) are defined with TypeScript interfaces and constant arrays at the top of each page file.
- Motion Primitives: Reusable animation components reside in `src/components/` (e.g., `WordsPullUp`, `WordsPullUpMultiStyle`, `AnimatedLetter`, `NumberTicker`). Reusable scroll animations utilize `framer-motion`'s `useInView(ref, { once: true })` pattern.
- Path Alias: `@` maps to `./src` as defined in both `vite.config.ts` and `tsconfig.json`.

## Design System & Tokens

- Tokens (`src/index.css`): Managed via Tailwind CSS v4 `@theme` directives. Primary accent champagne `--color-primary: #DEDBC8`, primary text `--color-primary-[#E1E0CC]`, dark surfaces `--color-dark-card: #101010` / `--color-bg-base: #0a0a0c`, and borders `--color-border-subtle: #27272a`. Base body background color is `#0a0a0c`.
- Typography Stack: Primary body font `Noto Sans SC` for CJK, `Almarai` for Latin and numeric displays, and `Instrument Serif` for serif accents. Fallbacks include `PingFang SC` and `Microsoft YaHei`.
- Custom Utility Classes: `.noise-overlay` and `.bg-noise` for SVG noise textures; `.radar-sweep` for radar animation sweeps.

## Media Asset Policy

- Large media assets (such as `public/hero-bg.mp4`) are excluded via `.gitignore` and served over CDN (`https://ik.imagekit.io/...`).
- Lightweight static assets (such as `public/logo.png` and `public/_redirects`) are stored directly in `public/`.
- Do not commit large binary video or audio files directly to the git repository.
