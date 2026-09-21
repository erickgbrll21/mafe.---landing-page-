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
    <section
      id="top"
      className="relative overflow-hidden bg-uva text-white"
    >
      {/* Foto de fundo (Duda) — nítida, sem overlay na imagem inteira */}
      <div aria-hidden className="absolute inset-0">
        <Image
          src="/assets/hero-duda.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[72%_30%] sm:object-[75%_center] md:object-[right_center]"
        />
      </div>

      <div className="container-mefa relative z-10 flex min-h-[100svh] flex-col justify-end pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-24 md:justify-center md:pb-20 md:pt-28">
        <div className="relative w-full max-w-none md:w-fit md:max-w-md">
          {/* Blur só atrás do texto — no mobile vira uma faixa inferior compacta */}
          <div
            aria-hidden
            className="absolute -inset-x-6 -bottom-5 -top-4 rounded-t-3xl bg-uva/70 backdrop-blur-xl md:-inset-4 md:rounded-3xl"
          />

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative"
          >
          <motion.span
            variants={item}
            className="mb-2 inline-flex items-center gap-2 rounded-full border border-lilas/30 px-2.5 py-1 text-[0.55rem] font-medium uppercase tracking-[0.18em] text-lilas md:mb-3 md:px-3 md:py-1.5 md:text-[0.6rem]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-lilas" />
            {BRAND.tagline}
          </motion.span>

          <h1 className="font-display text-[1.2rem] font-black leading-[1.18] tracking-tight text-balance sm:text-2xl md:text-3xl lg:text-[2rem]">
            <motion.span variants={item} className="block">
              Design com propósito.
            </motion.span>
            <motion.span variants={item} className="block text-lilas">
              Marca com identidade.
            </motion.span>
            <motion.span variants={item} className="block italic text-white/90">
              Você, do jeito que só você é.
            </motion.span>
          </h1>

          <motion.p
            variants={item}
            className="mt-2.5 max-w-sm text-[0.8rem] leading-relaxed text-lilas/85 md:mt-4 md:text-sm"
          >
            Sou a Duda, fundadora da Mefa — e antes de qualquer coisa, quero
            deixar uma coisa clara: aqui a gente não vende &ldquo;postzinho
            bonito&rdquo;. A gente constrói identidade.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-4 flex flex-row flex-wrap items-center gap-2 md:mt-5 md:gap-2.5"
          >
            <a
              href="#orcamento"
              className="group inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-lilas px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-uva transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-white sm:flex-none md:px-5 md:text-xs"
            >
              Pedir um orçamento
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#projetos"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full border border-lilas/40 px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide text-lilas transition-all duration-300 hover:border-lilas hover:bg-lilas/10 sm:flex-none md:px-5 md:text-xs"
            >
              Ver projetos
            </a>
          </motion.div>
        </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-lilas/60 md:flex"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Role</span>
        <motion.span
          animate={reduce ? {} : { y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-px bg-gradient-to-b from-lilas to-transparent"
        />
      </motion.div>
    </section>
  );
}
