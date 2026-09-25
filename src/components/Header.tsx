"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BRAND } from "@/lib/content";

const NAV = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-cream transition-shadow duration-500 ease-out-expo ${
        scrolled ? "shadow-[0_1px_0_rgba(61,3,86,0.08)]" : ""
      }`}
    >
      <div className="container-mefa flex h-20 items-center justify-between">
        <Link
          href="#top"
          aria-label="mefa. — página inicial"
          className="relative z-50 flex items-center"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/assets/mefa-logo.png"
            alt="mefa. — mais que design, identidade"
            width={232}
            height={88}
            priority
            className={`h-10 w-auto md:h-12 ${open ? "brightness-0 invert" : ""}`}
          />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium uppercase tracking-wide text-roxo/80 transition-colors hover:text-uva"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-violeta transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#orcamento"
            className="rounded-full bg-violeta px-6 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-uva"
          >
            Orçamento
          </a>
        </nav>

        {/* Toggle mobile */}
        <button
          className="relative z-50 flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <motion.span
              animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-7 bg-uva"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="block h-0.5 w-7 bg-uva"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block h-0.5 w-7 bg-uva"
            />
          </div>
        </button>
      </div>

      {/* Overlay mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center gap-2 bg-uva px-8 md:hidden"
          >
            {NAV.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
                className="font-display text-5xl font-black text-lilas"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#orcamento"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + NAV.length * 0.08 }}
              className="mt-8 inline-flex w-fit rounded-full bg-lilas px-8 py-4 text-sm font-semibold uppercase tracking-wide text-uva"
            >
              Pedir orçamento
            </motion.a>
            <motion.a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-4 text-sm text-lilas/70"
            >
              WhatsApp · {BRAND.whatsappDisplay}
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
