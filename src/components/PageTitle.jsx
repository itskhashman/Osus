/** The single large heading that opens every interior page. */
export default function PageTitle({ children, size = 48, align }) {
  return (
    <h1
      className={`font-serif text-[var(--title-size)] font-extrabold leading-[1.05] tracking-[-0.01em] ${
        align === 'center' ? 'text-center' : ''
      }`}
      style={{ '--title-size': `${size}px` }}
    >
      {children}
    </h1>
  );
}