/**
 * Page section wrapper with Tailwind CSS layout, spacing, and responsive gutters.
 */
export default function Section({
  children,
  background,
  padding = '64px 32px 100px',
  className = '',
  style,
}) {
  const isDefaultPadding = padding === '64px 32px 100px';

  return (
    <section
      className={`${
        isDefaultPadding ? 'px-8 pb-[100px] pt-16' : ''
      } ${className}`}
      style={{
        ...(background ? { background } : {}),
        ...(isDefaultPadding ? {} : { padding }),
        ...style,
      }}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}