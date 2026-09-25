import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-cream pb-0 pt-20 md:pt-28">
      <div className="container-mefa">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violeta">
            Sobre · Manifesto
          </span>
        </Reveal>
      </div>

      <div className="mt-8 grid items-end lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="sr-only">
              Por que a gente acredita tanto nessa coisa de identidade com
              propósito?
            </h2>
            <div className="relative w-full max-w-2xl lg:max-w-[90%]">
              <Image
                src="/assets/sobre-duda.webp"
                alt="Por que a gente acredita tanto nessa coisa de identidade com propósito?"
                width={1536}
                height={1024}
                className="h-auto w-full"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-b from-transparent via-white/75 to-white lg:hidden"
              />
            </div>
            <div
              aria-hidden
              className="h-10 w-full max-w-2xl bg-gradient-to-b from-white to-cream lg:hidden"
            />
          </Reveal>
        </div>

        <div className="container-mefa pb-10 pt-8 lg:col-span-5 lg:max-w-none lg:pb-16 lg:pl-10 lg:pr-8 lg:pt-0">
          <Reveal delay={0.1}>
            <p className="font-display text-xl font-semibold italic leading-snug text-violeta sm:text-2xl lg:text-[1.75rem]">
              &ldquo;Marca boa não é a que parece bonita. É a que parece ela
              mesma.&rdquo;
            </p>
          </Reveal>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-roxo/85 lg:mt-7 lg:space-y-4 lg:text-[1.05rem]">
            <Reveal delay={0.15}>
              <p>
                A Mefa nasceu de uma inquietação simples: cansei de ver marcas
                incríveis escondidas atrás de visuais genéricos. Gente com
                história, com talento, com propósito — mas com uma imagem que
                não dizia nada sobre quem elas eram.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p>
                Então a gente inverteu a ordem das coisas.{" "}
                <strong className="font-semibold text-uva">
                  Propósito antes de estética. Estratégia antes de estilo.
                </strong>{" "}
                Porque quando a gente entende o porquê da sua marca existir,
                desenhar o resto fica fácil — e fica seu.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p>
                Aqui não tem fórmula pronta nem template reciclado. Tem escuta,
                tem conceito, tem coragem de fazer diferente. Porque a sua marca
                não é igual a nenhuma outra — e a identidade dela não deveria
                ser também.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.3}>
            <a
              href="#orcamento"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-violeta px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-uva"
            >
              Quero construir minha identidade
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
