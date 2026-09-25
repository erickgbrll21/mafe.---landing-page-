"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { BRAND } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 26 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section id="top" className="relative overflow-hidden bg-cream pt-20">
      <div aria-hidden className="absolute inset-x-0 bottom-0 top-20">
        <Image
          src="/assets/hero-duda-v2.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[75%_28%] sm:object-[77%_center] md:object-[82%_center]"
        />
      </div>

      <div className="container-mefa relative z-10 flex min-h-[calc(100svh-5rem)] flex-col justify-end pb-64 pt-6 sm:pb-72 md:justify-center md:pb-36">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="w-[52vw] max-w-[16rem] sm:w-auto sm:max-w-sm md:max-w-xl"
        >
          <motion.span
            variants={item}
            className="mb-2 inline-flex items-center gap-2 text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-violeta md:mb-4 md:text-xs"
          >
            {BRAND.tagline}
          </motion.span>

          <h1 className="font-display text-[1.2rem] font-black leading-[1.16] tracking-tight text-uva text-balance sm:text-2xl md:text-[2.25rem] lg:text-4xl">
            <motion.span variants={item} className="block">
              Design com propósito.
            </motion.span>
            <motion.span variants={item} className="block">
              Marca com identidade.
            </motion.span>
            <motion.span variants={item} className="block italic text-violeta">
              Você, do jeito que só você é.
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-2.5 max-w-[11.5rem] text-[0.65rem] leading-snug text-roxo/80 sm:max-w-xs sm:text-sm md:mt-5 md:max-w-md md:text-base"
          >
            Sou a Duda, fundadora da Mefa — e antes de qualquer coisa, quero
            deixar uma coisa clara: aqui a gente não vende &ldquo;postzinho
            bonito&rdquo;. A gente constrói identidade.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center md:mt-7 md:gap-3"
          >
            <a
              href="#orcamento"
              className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-violeta px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-white transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-uva sm:px-7 sm:text-xs"
            >
              Pedir um orçamento
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#projetos"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-uva/20 px-5 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-uva transition-all duration-300 hover:border-uva hover:bg-uva hover:text-white sm:px-7 sm:text-xs"
            >
              Ver projetos
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-uva/40 md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Role</span>
        <motion.span
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-uva/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
