import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function Sobre() {
  return (
    <section id="sobre" className="relative bg-cream py-24 md:py-36">
      <div className="container-mefa">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violeta">
            Sobre · Manifesto
          </span>
        </Reveal>

        <div className="mt-8 grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="sr-only">
                Por que a gente acredita tanto nessa coisa de identidade com
                propósito?
              </h2>
              <Image
                src="/assets/sobre-balao.webp"
                alt="Por que a gente acredita tanto nessa coisa de identidade com propósito?"
                width={1339}
                height={969}
                className="h-auto w-full max-w-xl lg:max-w-none"
              />
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <p className="font-display text-2xl font-semibold italic leading-snug text-violeta sm:text-3xl">
                &ldquo;Marca boa não é a que parece bonita. É a que parece ela
                mesma.&rdquo;
              </p>
            </Reveal>

            <div className="mt-8 space-y-5 text-lg leading-relaxed text-roxo/85">
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
                  Aqui não tem fórmula pronta nem template reciclado. Tem
                  escuta, tem conceito, tem coragem de fazer diferente. Porque a
                  sua marca não é igual a nenhuma outra — e a identidade dela não
                  deveria ser também.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.3}>
              <a
                href="#orcamento"
                className="group mt-10 inline-flex items-center gap-2 rounded-full bg-violeta px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-uva"
              >
                Quero construir minha identidade
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
