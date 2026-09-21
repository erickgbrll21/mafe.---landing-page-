import type { Project } from "@/lib/content";

// Capas de placeholder geradas com a paleta da marca (nao ha mockups reais na pasta
// /assets alem do logo). Trocar o campo `image` no data por um asset real quando existir.
const COVERS = [
  "linear-gradient(135deg,#3D0356 0%,#5D2D8C 100%)",
  "linear-gradient(135deg,#311B42 0%,#5D2D8C 100%)",
  "linear-gradient(135deg,#5D2D8C 0%,#CFAAF2 100%)",
  "linear-gradient(135deg,#3D0356 0%,#CFAAF2 120%)",
  "linear-gradient(135deg,#311B42 0%,#3D0356 100%)",
];

function initials(title: string) {
  return title
    .replace(/[—-].*$/, "")
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toLowerCase();
}

export function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl border border-uva/10 bg-white transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:shadow-[0_40px_80px_-40px_rgba(61,3,86,0.4)]">
      {/* Capa */}
      <div
        className="relative aspect-[4/3] overflow-hidden"
        style={{ background: COVERS[index % COVERS.length] }}
      >
        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 grain flex items-center justify-center">
            <span className="select-none font-display text-[5.5rem] font-black leading-none text-white/90 transition-transform duration-700 ease-out-expo group-hover:scale-110">
              {initials(project.title)}.
            </span>
          </div>
        )}

        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-wide text-uva backdrop-blur">
          {project.category}
        </span>
      </div>

      {/* Conteudo */}
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
    </article>
  );
}
