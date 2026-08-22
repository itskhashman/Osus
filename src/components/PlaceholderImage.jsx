import { colors } from '@/lib/theme';
import Diamond from './Diamond';

/**
 * Labelled neutral placeholder standing in for product/project photography.
 * Swap this component's body for next/image once real assets arrive.
 */
export default function PlaceholderImage({
  label,
  height = 200,
  diamondSize = 16,
  fontSize = 13,
}) {
  return (
    <div
      className="flex w-full items-center justify-center gap-2.5 bg-[var(--placeholder-bg)]"
      style={{
        '--placeholder-height': `${height}px`,
        '--placeholder-bg': colors.sandDeep,
      }}
    >
      <Diamond size={diamondSize} />

      <span
        className="font-sans font-bold uppercase tracking-[0.1em] text-[var(--placeholder-text)]"
        style={{
          '--placeholder-text': colors.subtle,
          fontSize: `${fontSize}px`,
        }}
      >
        {label}
      </span>
    </div>
  );
}