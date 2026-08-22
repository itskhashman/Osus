# OSUS Alroqey — Website (Next.js)

Next.js 15 App Router export of the OSUS marketing site. Bilingual (EN / AR
with full RTL), seven routes, no external UI dependencies.

## Run it

\`\`\`bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start
\`\`\`

## How the project is organised

\`\`\`
src/
  app/                       App Router — one folder per route
    layout.jsx               <html>, fonts, LocaleProvider, Header, Footer
    globals.css              resets + CSS custom properties
    page.jsx                 Home
    products/page.jsx
    services/page.jsx
    partners/page.jsx
    projects/page.jsx        client-side sector filter + "load more"
    company/page.jsx
    certificates/page.jsx
    contact/page.jsx         controlled form (console.log stub)
  components/                presentational, no data fetching
    Header.jsx  Footer.jsx   site chrome (nav, language toggle)
    Hero.jsx    StatsBar.jsx CtaBand.jsx
    Section.jsx PageTitle.jsx Button.jsx     layout + typography primitives
    Diamond.jsx PlaceholderImage.jsx        brand mark + image stand-in
    ProductCard.jsx ProjectCard.jsx
    ServiceColumn.jsx BrandTile.jsx
  lib/
    theme.js                 design tokens (colors, fonts, layout, radius)
    content.js               ALL copy, keyed by locale (en / ar)
    projects.js              project reference data
    LocaleProvider.jsx       locale context + persistence + dir switching
\`\`\`

### The three rules the codebase follows

1. **No literal copy in components.** Every string comes from
   \`lib/content.js\` via \`useLocale().t\`. Adding a language = adding one
   object; translating = editing one file.
2. **No literal colors or fonts in components.** They import from
   \`lib/theme.js\`. A rebrand is a one-file change.
3. **Components are presentational; pages compose them.** Pages own state
   (filters, form values); components take props and render.

### Localisation

\`LocaleProvider\` holds the active locale, persists it to
\`localStorage\`, and writes \`lang\`/\`dir\` onto \`<html>\` so RTL
flips natively — logical CSS properties (\`borderInlineStart\`) and
\`isRtl\` handle the few directional details.

If you'd rather have locale-prefixed URLs (\`/ar/products\`), move the
routes under \`src/app/[locale]/\` and read the segment via
\`useParams()\` instead of context state — the dictionary shape stays
identical.

## What still needs real assets

- **Product, project and certificate imagery.** Product and project cards
  render \`<PlaceholderImage>\`; hero/company/contact use Unsplash URLs from
  \`lib/content.js\`. Replace both with \`next/image\` + files in
  \`public/\`.
- **Supplier logos.** \`BrandTile\` draws a lettermark; swap in licensed
  logo files.
- **Contact form endpoint.** \`contact/page.jsx\` logs to the console — add
  a route handler at \`src/app/api/contact/route.js\`.
- **Phone number** is a placeholder (\`+966 XX XXX XXXX\`).

Logos in \`public/assets/\` are the real OSUS marks (transparent PNG, plus a
white variant for dark backgrounds).
