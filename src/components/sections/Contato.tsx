import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/content";

export function Contato() {
  return (
    <footer
      id="contato"
      className="relative overflow-hidden bg-uva grain text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-violeta/40 blur-[130px]"
      />

      {/* CTA final */}
      <div className="container-mefa relative pt-24 md:pt-36">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-lilas">
            Vamos criar sua marca?
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 max-w-4xl font-display text-5xl font-black leading-[1] tracking-tight text-balance sm:text-7xl lg:text-8xl">
            Vamos criar<br />
            <span className="italic text-lilas">sua marca?</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-lilas/80">
            Se você chegou até aqui, já deu o primeiro passo. O segundo é só uma
            mensagem.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 rounded-full bg-lilas px-9 py-5 text-base font-semibold uppercase tracking-wide text-uva transition-all duration-300 ease-out-expo hover:-translate-y-1 hover:bg-white"
          >
            Bora conversar no WhatsApp
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>

      {/* Rodape */}
      <div className="container-mefa relative mt-24 border-t border-white/10 py-12 md:mt-36">
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
