import Diamond from './Diamond';

export default function ServiceColumn({ heading, items }) {
  return (
    <div>
      <h3 className="mb-5 font-serif text-[23px] text-amber-700">
        {heading}
      </h3>

      {items.map((item) => (
        <div
          key={item.title}
          className="flex items-start gap-3.5 border-t border-slate-900/[0.12] py-4"
        >
          <Diamond size={8} style={{ marginTop: 6 }} />

          <div>
            <div className="font-sans text-base font-semibold text-slate-900">
              {item.title}
            </div>

            <div className="mt-1 font-sans text-[13px] leading-[1.5] text-slate-600">
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}