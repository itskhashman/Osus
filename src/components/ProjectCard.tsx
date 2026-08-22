import PlaceholderImage from './PlaceholderImage';

export default function ProjectCard({ project, locale, sectorLabel }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-sm border border-slate-200 bg-white">
      <PlaceholderImage
        label={sectorLabel}
        height={170}
        diamondSize={12}
        fontSize={11}
      />

      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="font-sans text-[11px] font-bold tracking-[0.08em] text-amber-700">
          {project.status[locale]}
        </span>

        <h3 className="font-serif text-[21px] leading-[1.15] text-slate-900">
          {project.name[locale]}
        </h3>

        <p className="font-sans text-[13px] leading-[1.55] text-slate-600">
          {project.meta[locale]}
        </p>

        <p className="mt-auto font-sans text-[13px] leading-[1.55] text-slate-500">
          {project.scope[locale]}
        </p>
      </div>
    </div>
  );
}