import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/content";

export function Contato() {
  return (
    <footer id="contato" className="relative scroll-mt-20 overflow-hidden bg-uva text-white">
      <div className="relative min-h-[70svh] overflow-hidden bg-cream text-uva md:min-h-[80svh]">
        <div aria-hidden className="absolute inset-0">
          <div className="absolute inset-0 md:hidden">
            <Image
              src="/assets/cta-duda-mobile.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-bottom"
            />
          </div>
          <div className="absolute inset-0 hidden md:block">
            <Image
              src="/assets/cta-duda.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-[right_center]"
            />
          </div>
        </div>

        <div className="container-mefa relative z-20 flex min-h-[100svh] flex-col justify-start pb-8 pt-24 md:min-h-[80svh] md:justify-center md:py-28">
          <div className="w-full max-w-[20.5rem] md:max-w-xl lg:max-w-3xl">
          <Reveal>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-violeta md:text-xs">
              Vamos criar sua marca?
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 font-display text-[1.75rem] font-black leading-[1.08] tracking-tight text-balance sm:text-4xl md:mt-5 md:text-6xl lg:text-7xl">
              Vamos criar
              <br />
              <span className="italic text-violeta">sua marca?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-2.5 max-w-[16.5rem] space-y-1 text-[0.78rem] leading-snug text-roxo/80 md:mt-6 md:max-w-md md:text-lg md:leading-relaxed">
              <p>Se você chegou até aqui, já deu o primeiro passo.</p>
              <p>O segundo é só uma mensagem.</p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <a
              href={BRAND.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-4 inline-flex min-h-10 items-center gap-2 rounded-full bg-violeta px-5 py-2.5 text-[0.65rem] font-semibold uppercase tracking-wide text-white transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:bg-uva sm:min-h-11 sm:px-7 sm:py-3.5 sm:text-xs md:mt-8 md:px-9 md:py-5 md:text-base"
            >
              Bora conversar?
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </Reveal>
          </div>
        </div>
      </div>

      {/* Rodape */}
      <div className="container-mefa relative border-t border-white/10 py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Image
              src="/assets/mefa-logo-footer.png"
              alt="mefa. — mais que design, identidade"
              width={235}
              height={89}
              className="h-16 w-auto md:h-20"
            />
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-lilas/60">
                Fala com a gente
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a
                    href={BRAND.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/85 transition-colors hover:text-lilas"
                  >
                    WhatsApp · {BRAND.whatsappDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${BRAND.email}`}
                    className="text-white/85 transition-colors hover:text-lilas"
                  >
                    {BRAND.email}
                  </a>
                </li>
                <li>
                  <a
                    href={BRAND.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/85 transition-colors hover:text-lilas"
                  >
                    Instagram · {BRAND.instagram}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-lilas/60">
                Navegue
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  ["Sobre", "#sobre"],
                  ["Projetos", "#projetos"],
                  ["Orçamento", "#orcamento"],
                  ["Contato", "#contato"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="text-white/85 transition-colors hover:text-lilas"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-lilas/50">
          <span>
            © {new Date().getFullYear()} mefa. — feito por {BRAND.founder}, com
            propósito.
          </span>
        </div>
      </div>
    </footer>
  );
}
