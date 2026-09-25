import type { Project } from "@/lib/content";

export function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen?: (project: Project) => void;
}) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-uva/10 bg-white transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-40px_rgba(61,3,86,0.4)]">
      <button
        type="button"
        onClick={() => onOpen?.(project)}
        className="flex h-full flex-col text-left"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-cream">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-uva backdrop-blur">
            {project.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-7">
          <h3 className="font-display text-2xl font-bold leading-tight text-uva">
            {project.title}
          </h3>
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-violeta">
            {project.subtitle}
          </p>
          <p className="mt-4 flex-1 text-sm leading-relaxed text-roxo/75">
            {project.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-uva/15 px-3 py-1 text-xs font-medium text-roxo/70 transition-colors group-hover:border-lilas group-hover:bg-lilas/20 group-hover:text-uva"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </button>
    </article>
  );
}
