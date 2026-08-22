import { colors } from '@/lib/theme';

/** The OSUS brand mark: a rotated square. Used as bullet, badge and accent. */
export default function Diamond({ size = 12, color = colors.accent, style }) {
  return (
    <div
      className="h-[var(--diamond-size)] w-[var(--diamond-size)] shrink-0 rotate-45"
      style={{
        '--diamond-size': `${size}px`,
        '--diamond-color': color,
        ...style,
        backgroundColor: 'var(--diamond-color)',
      }}
    />
  );
}