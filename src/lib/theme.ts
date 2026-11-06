/**
 * CSS custom properties from globals.css, so inline styles follow the active
 * light/dark theme instead of baking in the light palette.
 */
export const colors = {
  ink: "var(--ink)",
  inkSoft: "var(--ink-soft)",
  muted: "var(--muted)",
  subtle: "var(--subtle)",
  accent: "var(--osus-gold)",
  sand: "var(--sand)",
  sandDeep: "var(--sand-deep)",
  white: "var(--white)",
  onDark: "var(--on-dark)",
  onDarkMuted: "var(--on-dark-muted)",
  hairline: "var(--hairline)",
  hairlineStrong: "var(--hairline-strong)",
  hairlineOnDark: "var(--hairline-on-dark)",
};

export const fonts = {
  display: "'Barlow Condensed', sans-serif",
  body: "'Inter', sans-serif",
  arabic: "'Noto Kufi Arabic', 'Inter', sans-serif",
};

export const layout = {
  maxWidth: 1200,
  gutter: 32,
};

export const radius = { sharp: 2, pill: 18 };
