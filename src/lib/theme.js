/**
 * Design tokens for the OSUS site.
 * Single source of truth — every component imports from here instead of
 * hard-coding hex values, so a rebrand is a one-file change.
 */
export const colors = {
  ink: '#26262F',          // primary text / dark surfaces
  inkSoft: '#4a4a52',      // body copy on light
  muted: '#6b6a63',        // secondary copy
  subtle: '#8a8578',       // labels, meta
  accent: '#C99A2B',       // OSUS gold
  sand: '#F4F1EB',         // page background
  sandDeep: '#EFEBE3',     // image placeholder fill
  white: '#FFFFFF',
  onDark: '#c9c6bd',       // body copy on ink
  onDarkMuted: '#a9a79f',
  hairline: 'rgba(38,38,47,0.10)',
  hairlineStrong: 'rgba(38,38,47,0.20)',
  hairlineOnDark: 'rgba(255,255,255,0.10)',
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
