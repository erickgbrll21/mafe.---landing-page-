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
        <div className="absolute inset-0 md:hidden">
          <Image
            src="/assets/hero-duda-mobile.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-bottom"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent via-cream/75 to-cream"
          />
        </div>
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/assets/hero-duda-v2.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[82%_center]"
          />
        </div>
      </div>

      <div className="container-mefa relative z-20 flex min-h-[calc(100svh-5rem)] flex-col justify-start pb-8 pt-3 md:justify-center md:pb-36 md:pt-6">
        <motion.div
          variants={container}
          initial={false}
          animate="show"
          className="w-full max-w-[20.5rem] md:max-w-xl"
        >
          <motion.span
            variants={item}
            className="mb-2 inline-flex items-center gap-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-violeta md:mb-4 md:text-xs"
          >
            {BRAND.tagline}
          </motion.span>

          <h1 className="font-display text-[1.45rem] font-black leading-[1.12] tracking-tight text-uva text-balance sm:text-2xl md:text-[2.25rem] lg:text-4xl">
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
            className="mt-2 max-w-[16.5rem] text-[0.72rem] leading-snug text-roxo/80 md:mt-5 md:max-w-md md:text-base"
          >
            <span className="md:hidden">
              A gente não vende &ldquo;postzinho bonito&rdquo;. A gente
              constrói identidade.
            </span>
            <span className="hidden md:inline">
              Sou a Duda, fundadora da Mefa — e antes de qualquer coisa, quero
              deixar uma coisa clara: aqui a gente não vende &ldquo;postzinho
              bonito&rdquo;. A gente constrói identidade.
            </span>
          </motion.p>

          <motion.div
            variants={item}
            className="mt-2 flex flex-col items-start gap-1.5 md:mt-7 md:flex-row md:items-center md:gap-3"
          >
            <a
              href="#orcamento"
              className="group inline-flex min-h-8 items-center justify-center gap-1.5 rounded-full bg-violeta px-3 py-1.5 text-[0.55rem] font-semibold uppercase tracking-wide text-white transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-uva md:min-h-11 md:px-7 md:text-xs"
            >
              Pedir um orçamento
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#projetos"
              className="inline-flex min-h-8 items-center justify-center gap-1.5 rounded-full border border-uva/20 px-3 py-1.5 text-[0.55rem] font-semibold uppercase tracking-wide text-uva transition-all duration-300 hover:border-uva hover:bg-uva hover:text-white md:min-h-11 md:px-7 md:text-xs"
            >
              Ver projetos
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={false}
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
