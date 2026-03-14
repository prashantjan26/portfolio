# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

This is a **Next.js 16 personal portfolio** using the App Router (`/app` directory), React 19, TypeScript, Tailwind CSS v4, Framer Motion, and Lucide React.

**Key conventions:**
- All routes and layouts live in `app/` following App Router conventions
- Global styles, CSS animations (blob keyframes, dot-grid texture), and custom utilities are in `app/globals.css`
- Tailwind v4 is configured via PostCSS (`postcss.config.mjs`) — no `tailwind.config.*` file
- Path alias `@/*` resolves to the repo root
- Geist sans and mono fonts are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables `--font-geist-sans` / `--font-geist-mono`
- All section components live in `components/` and are client components (`"use client"`) because they use Framer Motion scroll animations
- `app/page.tsx` is a server component that simply imports and renders the section components in order

**Sections (in render order):**
`Navigation` → `Hero` → `About` → `Experience` → `Skills` → `Projects` → `BeyondWork` → `Contact` → `Footer`

**Scroll animations:** All sections use `whileInView` + `viewport={{ once: true }}` from Framer Motion. Do not add `"use client"` to `app/page.tsx`.

**Background theme:** Main bg is `#05050f`. Alternating sections use `bg-white/[0.015]`. Cards use `bg-white/[0.03]` with `border-white/[0.07]`. Accent colors: violet-600 (primary), cyan-500 (secondary).
