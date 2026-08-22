import type { CSSProperties } from 'react';
import { colors } from '@/lib/theme';
import Diamond from './Diamond';

export default function PlaceholderImage({
  label,
  height = 200,
  diamondSize = 16,
  fontSize = 13,
}) {
  return (
    <div
      className="flex w-full items-center justify-center gap-2.5 bg-(--placeholder-bg)"
      style={{
        '--placeholder-height': `${height}px`,
        '--placeholder-bg': colors.sandDeep,
      } as CSSProperties}
    >
      <Diamond size={diamondSize} />

      <span
        className="font-sans font-bold uppercase tracking-widest text-(--placeholder-text)"
        style={{
          '--placeholder-text': colors.subtle,
          fontSize: `${fontSize}px`,
        } as CSSProperties}
      >
        {label}
      </span>
    </div>
  );
}