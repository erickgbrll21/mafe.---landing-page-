"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/content";

export function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Fechar projeto"
            className="absolute inset-0 bg-uva/70 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex max-h-[92svh] w-full max-w-4xl flex-col overflow-hidden rounded-t-3xl bg-white sm:rounded-3xl"
          >
            <div className="flex items-start justify-between gap-4 border-b border-uva/10 px-5 py-4 sm:px-8 sm:py-5">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-violeta">
                  {project.category}
                </p>
                <h3
                  id="project-modal-title"
                  className="mt-1 font-display text-2xl font-bold text-uva sm:text-3xl"
                >
                  {project.title}
                </h3>
                <p className="mt-1 text-sm text-roxo/70">{project.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-uva/15 text-uva transition-colors hover:bg-uva hover:text-white"
                aria-label="Fechar"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
              <p className="max-w-2xl text-sm leading-relaxed text-roxo/80 sm:text-base">
                {project.description}
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {project.gallery.map((src) => (
                  <div
                    key={src}
                    className="overflow-hidden rounded-2xl bg-cream"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={src}
                      alt={`${project.title} — peça do projeto`}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
