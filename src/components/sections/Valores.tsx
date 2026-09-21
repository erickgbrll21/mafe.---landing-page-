import Image from "next/image";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { VALUES } from "@/lib/content";

export function Valores() {
  return (
    <section className="relative overflow-hidden bg-uva grain py-24 text-white md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 h-[28rem] w-[28rem] rounded-full bg-violeta/40 blur-[130px]"
      />
      <div className="container-mefa relative">
        {/* Missao & Visao */}
        <div className="grid gap-12 md:grid-cols-2">
          <Reveal>
            <div className="border-l-2 border-lilas/40 pl-6">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/assets/icon-missao.webp"
                  alt=""
                  width={72}
                  height={71}
                  className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-lilas">
                  Missão
                </span>
              </div>
              <p className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl text-balance">
                Traduzir a essência de cada marca em uma identidade que ela
                reconheça como sua — e que o mundo reconheça de longe.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="border-l-2 border-lilas/40 pl-6">
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src="/assets/icon-visao.webp"
                  alt=""
                  width={72}
                  height={72}
                  className="h-14 w-14 object-contain sm:h-16 sm:w-16"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-lilas">
                  Visão
                </span>
              </div>
              <p className="font-display text-2xl font-semibold leading-snug text-white sm:text-3xl text-balance">
                Ser referência em marcas com propósito — provando, projeto após
                projeto, que autenticidade vende mais que tendência.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="my-16 h-px w-full bg-white/10" />

        <Reveal>
          <h2 className="font-display text-3xl font-black tracking-tight text-lilas sm:text-4xl">
            Nossos valores
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map((value, i) => (
            <RevealItem
              key={value.title}
              className="group bg-uva p-8 transition-colors duration-300 hover:bg-roxo"
            >
              <span className="font-display text-4xl font-black text-violeta transition-colors group-hover:text-lilas">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-white">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-lilas/70">
                {value.description}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
