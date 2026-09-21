"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { SERVICES, type Service } from "@/lib/content";

export function Servicos() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="servicos"
      ref={ref}
      className="relative bg-cream"
      style={{ height: reduce ? undefined : "360vh" }}
    >
      <div
        className={
          reduce
            ? "container-mefa py-24 md:py-36"
            : "sticky top-20 flex h-[calc(100svh-5rem)] flex-col justify-start overflow-x-clip py-4 sm:py-6 md:justify-center md:py-8"
        }
      >
        <div className={reduce ? "" : "container-mefa flex min-h-0 flex-1 flex-col"}>
          {reduce ? (
            <>
              <SectionHeading />
              <div className="mt-14 grid gap-6 lg:grid-cols-3">
                {SERVICES.map((service, i) => (
                  <ServiceCard key={service.id} service={service} index={i} />
                ))}
              </div>
            </>
          ) : (
            <div className="grid min-h-0 flex-1 grid-cols-1 items-start gap-4 sm:gap-6 lg:grid-cols-12 lg:items-center lg:gap-12">
              <div className="shrink-0 lg:col-span-5">
                <SectionHeading compact />
              </div>

              <div className="relative min-h-0 w-full max-w-full overflow-x-clip lg:col-span-7">
                <div className="invisible" aria-hidden>
                  <ServiceCard
                    service={SERVICES.reduce((a, b) =>
                      a.items.length >= b.items.length ? a : b,
                    )}
                    index={0}
                    stacked
                  />
                </div>
                {SERVICES.map((service, i) => (
                  <StackedCard
                    key={service.id}
                    service={service}
                    index={i}
                    progress={scrollYProgress}
                    count={SERVICES.length}
                  />
                ))}
              </div>

              <CardDots progress={scrollYProgress} count={SERVICES.length} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ compact = false }: { compact?: boolean }) {
  return (
    <>
      <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-violeta sm:text-xs">
        Nós fazemos
      </span>
      <h2
        className={`mt-2 max-w-xl font-display font-black leading-[1.1] tracking-tight text-uva text-balance sm:mt-3 ${
          compact
            ? "text-[1.35rem] sm:text-3xl lg:text-4xl"
            : "text-4xl sm:text-5xl"
        }`}
      >
        Do conceito ao movimento — tudo que a sua marca precisa pra ser
        inconfundível.
      </h2>
    </>
  );
}

function CardDots({
  progress,
  count,
}: {
  progress: MotionValue<number>;
  count: number;
}) {
  const [active, setActive] = useState(0);

  useMotionValueEvent(progress, "change", (value) => {
    const next = Math.min(count - 1, Math.max(0, Math.floor(value * count)));
    setActive((prev) => (prev === next ? prev : next));
  });

  return (
    <div
      className="flex justify-center gap-2 lg:col-span-12 lg:hidden"
      aria-hidden
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i === active ? "w-6 bg-violeta" : "w-1.5 bg-uva/25"
          }`}
        />
      ))}
    </div>
  );
}

function StackedCard({
  service,
  index,
  progress,
  count,
}: {
  service: Service;
  index: number;
  progress: MotionValue<number>;
  count: number;
}) {
  const slot = 1 / count;
  const inStart = index * slot;
  const inEnd = inStart + slot * 0.28;
  const outStart = (index + 1) * slot;
  const outEnd = Math.min(outStart + slot * 0.28, 1);

  const isFirst = index === 0;
  const isLast = index === count - 1;

  const x = useTransform(
    progress,
    isFirst
      ? [0, outStart, outEnd]
      : isLast
        ? [0, inStart, inEnd, 1]
        : [0, inStart, inEnd, outStart, outEnd, 1],
    isFirst
      ? ["0%", "0%", "-100%"]
      : isLast
        ? ["100%", "100%", "0%", "0%"]
        : ["100%", "100%", "0%", "0%", "-100%", "-100%"],
  );

  const opacity = useTransform(
    progress,
    isFirst
      ? [0, outStart, outEnd]
      : isLast
        ? [0, inStart, inEnd, 1]
        : [0, inStart, inEnd, outStart, outEnd, 1],
    isFirst
      ? [1, 1, 0]
      : isLast
        ? [0, 0, 1, 1]
        : [0, 0, 1, 1, 0, 0],
  );

  return (
    <motion.div
      style={{ x, opacity, zIndex: index + 1 }}
      className="absolute inset-0"
    >
      <ServiceCard service={service} index={index} stacked fill />
    </motion.div>
  );
}

function ServiceCard({
  service,
  index,
  stacked = false,
  fill = false,
}: {
  service: Service;
  index: number;
  stacked?: boolean;
  fill?: boolean;
}) {
  return (
    <article
      className={`group flex flex-col rounded-2xl border border-uva/10 bg-white p-4 shadow-[0_24px_60px_-32px_rgba(61,3,86,0.35)] sm:rounded-3xl sm:p-6 md:p-8 ${
        fill ? "h-full" : ""
      } ${
        stacked
          ? ""
          : "h-full transition-all duration-500 ease-out-expo hover:-translate-y-1.5 hover:border-violeta/30"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-display text-3xl font-black text-lilas transition-colors group-hover:text-violeta sm:text-4xl md:text-5xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-uva/15 text-uva transition-all duration-300 group-hover:bg-violeta group-hover:text-white sm:h-11 sm:w-11">
          →
        </span>
      </div>

      <h3 className="mt-3 font-display text-lg font-bold leading-tight text-uva sm:mt-6 sm:text-xl md:mt-8 md:text-2xl">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-roxo/75 sm:mt-3 sm:text-base">
        {service.intro}
      </p>

      <ul className="mt-4 flex flex-col gap-1.5 border-t border-uva/10 pt-4 sm:mt-7 sm:gap-2.5 sm:pt-6">
        {service.items.map((it) => (
          <li
            key={it}
            className="flex items-center gap-2 text-xs font-medium text-roxo/80 sm:gap-3 sm:text-sm"
          >
            <span className="h-1.5 w-1.5 flex-none rounded-full bg-violeta" />
            {it}
          </li>
        ))}
      </ul>
    </article>
  );
}
