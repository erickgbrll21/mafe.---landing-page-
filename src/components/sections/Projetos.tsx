"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal } from "@/components/ProjectModal";
import {
  LAB_PROJECTS,
  PORTFOLIO_FILTERS,
  PROJECTS,
  type PortfolioFilter,
  type Project,
} from "@/lib/content";

export function Projetos() {
  const [filter, setFilter] = useState<PortfolioFilter>("Todos");
  const [open, setOpen] = useState<Project | null>(null);
  const reduce = useReducedMotion();

  const visible = useMemo(
    () =>
      filter === "Todos"
        ? PROJECTS
        : PROJECTS.filter((p) => p.category === filter),
    [filter],
  );

  return (
    <section id="projetos" className="bg-cream py-24 md:py-36">
      <div className="container-mefa">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violeta">
                Projetos
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 max-w-2xl font-display text-4xl font-black leading-[1.05] tracking-tight text-uva text-balance sm:text-5xl">
                Marcas que a gente ajudou a virar elas mesmas.
              </h2>
            </Reveal>
          </div>

          {/* Filtro */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {PORTFOLIO_FILTERS.map((f) => {
                const active = filter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    aria-pressed={active}
                    className={`rounded-full px-5 py-2.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                      active
                        ? "bg-violeta text-white"
                        : "border border-uva/20 text-roxo/70 hover:border-uva hover:text-uva"
                    }`}
                  >
                    {f}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <motion.div
          layout
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: reduce ? 0 : 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} onOpen={setOpen} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Laboratorio Mefa */}
        <div className="mt-28">
          <Reveal>
            <div className="flex items-center gap-4">
              <span className="font-display text-2xl italic text-violeta">
                Laboratório Mefa
              </span>
              <span className="h-px flex-1 bg-uva/15" />
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-roxo/70">
              Território livre. Aqui a gente experimenta sem cliente, sem
              briefing e sem freio — só pra lembrar que marca também pode ser
              brincadeira séria.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {LAB_PROJECTS.map((project, i) => (
              <Reveal key={project.slug} delay={0.1 + i * 0.08}>
                <ProjectCard project={project} onOpen={setOpen} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
