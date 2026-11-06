# OSUS Alroqey Website

Marketing site for OSUS Alroqey Ltd. Co. Next.js 15 App Router, statically
exported and deployed to GitHub Pages at `https://itskhashman.github.io/Osus/`.
Bilingual (English / Arabic with RTL), light and dark themes.

## Git and commits

- **Never add Claude/AI attribution to commits or PRs.** No `Co-Authored-By: Claude`
  trailer, no "Generated with Claude Code" line, nothing that says Claude wrote
  the change. Commits are authored by the developer only.
- One logical change per commit; split unrelated changes into separate commits.
- Don't commit to `main` directly — work on a branch and open a PR. Pushing to
  `main` triggers the production deploy.
- Only commit or push when asked.

## Commands

```bash
npm run dev        # http://localhost:3000/Osus/en/  (/ and /Osus/ redirect there in dev)
npm run build      # static export to out/
npm run typecheck  # tsc --noEmit
npm run lint
```

- Use Node 26 (`.nvmrc`) and **npm 12.0.2** — CI pins the same versions. A
  lockfile written by a different npm major can make `npm ci` fail in CI.
- `npm run build` and `npm run dev` share `.next/`. Don't build while the dev
  server is running — it causes `ChunkLoadError` in the browser. To verify a
  build alongside a running dev server, build in a separate copy of the repo.
  If chunks break: stop dev, `rm -rf .next`, restart.

## Deployment

- `.github/workflows/deploy.yml` runs on push to `main`: `npm ci` →
  `npm run build` → uploads `out/` to GitHub Pages.
- `next.config.ts` uses `output: "export"`, `basePath: "/Osus"`,
  `trailingSlash: true`, unoptimized images. No server: no middleware, API
  routes, or runtime redirects in production.
- `public/index.html` becomes `out/index.html` and redirects `/Osus/` to a
  locale. The dev-only `redirects()` in `next.config.ts` mirror it for `next dev`.

## Base path and assets

- Everything lives under `/Osus`. `.env` (committed) sets
  `NEXT_PUBLIC_BASE_PATH=/Osus`; it must always match `basePath` in
  `next.config.ts`.
- Plain `<img>` tags and CSS `url()` don't get the base path automatically —
  always wrap files from `public/` with `assetPath()` from `@/lib/assetPath`.
  Image paths live in `src/fixture/images.ts`.
- Links go through next-intl's `Link` (see below), which handles basePath and locale.

## Project structure (`src/`)

| Folder | Holds |
|---|---|
| `app/[locale]/` | Routes. `page.tsx` files are thin: `setRequestLocale(locale)` then render a view. `layout.tsx` sets `lang`/`dir`, providers, header and footer. `loading.tsx` shows the spinner. |
| `views/<page>/` | One view per page, composing components. |
| `components/<feature>/` | Feature components (home, contact, products, …). |
| `components/common/` | Shared site pieces (Button, Section, PageTitle, ThemeProvider, …). |
| `components/ui/` | shadcn-style primitives (`cva` + `cn`): button, dialog, carousel, spinner. |
| `domain/` | TypeScript types only. |
| `fixture/` | Static content data (ids, images, links) — **no translatable text**. |
| `rules/` | Pure functions and constants (filters, locale direction, page sizes). |
| `services/` | Client hooks holding page state (`useProjectList`, `useContactForm`). |
| `hooks/` | Generic React hooks. |
| `i18n/` | next-intl routing, request config, navigation helpers. |
| `lib/` | `assetPath`, `cn` (utils), theme color constants. |

Path alias: `@/*` → `src/*`.

## Conventions

- **TypeScript only** (`.ts`/`.tsx`). The only non-TS files are the tool configs
  `eslint.config.mjs` and `postcss.config.mjs`.
- **Localization uses next-intl only.** All user-facing text goes in
  `messages/en.json` **and** `messages/ar.json` (keep keys in sync); read it with
  `useTranslations` / `getTranslations`. Never hard-code copy in components.
  Locales: `en` (default), `ar` (RTL via `getDirection` / `isRtl` in `rules/locale.ts`).
- Import `Link`, `usePathname`, `useRouter`, `redirect` from `@/i18n/navigation`,
  not from `next/link` / `next/navigation`.
- Use logical properties for RTL (`ms-`, `me-`, `ps-`, `border-s-`) rather than left/right where possible.
- Icons: `lucide-react`.

## Styling and theming

- Tailwind CSS v4, configured in `src/app/[locale]/globals.css` (no tailwind config file).
- Colors are CSS variables in `:root`, overridden in `.dark { … }`. Tailwind
  names are mapped to them in `@theme inline` — e.g. `slate-900` = ink text,
  `slate-600` = muted text, `slate-200` = hairline, `amber-700` = OSUS gold.
- Semantic colors to use instead of raw ones:
  - `bg-page` — page background
  - `bg-surface` — cards and panels (instead of `bg-white`)
  - `bg-band` / `bg-band-raised` — dark bands that stay dark in both themes (footer, stats bar, dark buttons)
  - `text-on-accent` — text on gold backgrounds
  - `border-line-strong` — input and chip borders
- `bg-white` means "always white" (partner logo tiles, whose images have white backgrounds).
- Dark mode: `next-themes` (`attribute="class"`, default `system`). Use the
  `dark:` variant; for theme-dependent images render both and toggle with
  `dark:hidden` / `hidden dark:block` (no hydration mismatch). Toggle lives in
  `components/layout/ThemeToggle.tsx`.
- Inline styles use `colors` from `@/lib/theme`, which are `var(--…)` references.
- Fonts: Barlow Condensed (display/headings), Inter (body), Noto Kufi Arabic (Arabic).

## Before finishing a change

1. `npm run typecheck` and `npm run lint` (warnings about `<img>` are expected).
2. Check both `/Osus/en/…` and `/Osus/ar/…`, in light and dark mode.
3. New text added to both message files.
