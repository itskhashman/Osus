/** The single large heading that opens every interior page. */
export default function PageTitle({ children, size = 180, align }) {
  return (
    <h1
      className={`font-serif font-extrabold text-6xl leading-[1.05] tracking-[-0.01em] ${
        align === 'center' ? 'text-center' : ''
      }`}
    >
      {children}
    </h1>
  );
}