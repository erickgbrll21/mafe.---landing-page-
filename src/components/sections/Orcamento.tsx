"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { BRAND } from "@/lib/content";

const NEEDS = [
  "Identidade Visual/Branding",
  "Gestão de Redes Sociais",
  "Vídeo/Motion",
  "Ainda não sei, quero conversar",
];

const STAGES = [
  "Já existe, quero repaginar",
  "Está nascendo agora",
  "Só uma ideia ainda",
];

type Errors = Partial<
  Record<"nome" | "whatsapp" | "email" | "needs" | "mensagem", string>
>;

const labelCls =
  "mb-2 block text-sm font-semibold text-uva";
const fieldBase =
  "w-full rounded-2xl border bg-white px-4 py-3.5 text-roxo placeholder:text-roxo/40 transition-all duration-200 focus:outline-none focus:ring-4";
const fieldOk =
  "border-uva/15 focus:border-violeta focus:ring-lilas/40";
const fieldErr =
  "border-red-500 focus:border-red-500 focus:ring-red-200";

export function Orcamento() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [stage, setStage] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const toggleNeed = (value: string) =>
    setNeeds((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value],
    );

  function validate(data: FormData): Errors {
    const e: Errors = {};
    const nome = String(data.get("nome") || "").trim();
    const whatsapp = String(data.get("whatsapp") || "").trim();
    const email = String(data.get("email") || "").trim();
    const mensagem = String(data.get("mensagem") || "").trim();

    if (nome.length < 2) e.nome = "Conta pra gente como você se chama.";
    if (whatsapp.replace(/\D/g, "").length < 10)
      e.whatsapp = "Coloca um WhatsApp válido com DDD.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      e.email = "Esse e-mail parece incompleto.";
    if (needs.length === 0)
      e.needs = "Escolhe pelo menos uma opção — pode ser mais de uma.";
    if (mensagem.length < 10)
      e.mensagem = "Fala um pouquinho mais sobre o projeto (mín. 10 caracteres).";
    return e;
  }

  function onSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const form = ev.currentTarget;
    const data = new FormData(form);
    const e = validate(data);
    setErrors(e);
    if (Object.keys(e).length > 0) {
      const first = form.querySelector<HTMLElement>("[aria-invalid='true']");
      first?.focus();
      return;
    }

    // Sem backend: monta a solicitacao e abre o WhatsApp da Duda ja preenchido.
    const msg = [
      `Oi, Duda! Vim pelo site pedir um orçamento.`,
      ``,
      `Nome: ${data.get("nome")}`,
      data.get("empresa") ? `Marca/Empresa: ${data.get("empresa")}` : null,
      `WhatsApp: ${data.get("whatsapp")}`,
      `E-mail: ${data.get("email")}`,
      `Preciso de: ${needs.join(", ")}`,
      stage ? `Estágio da marca: ${stage}` : null,
      `Sobre o projeto: ${data.get("mensagem")}`,
      data.get("prazo") ? `Prazo ideal: ${data.get("prazo")}` : null,
      data.get("orcamento") ? `Orçamento estimado: ${data.get("orcamento")}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/5531983029844?text=${encodeURIComponent(msg)}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
    form.reset();
    setNeeds([]);
    setStage("");
  }

  return (
    <section id="orcamento" className="bg-cream py-24 md:py-36">
      <div className="container-mefa">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Coluna de texto */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-violeta">
                Orçamento
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] tracking-tight text-uva text-balance sm:text-5xl">
                Conta pra gente sobre sua marca
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-roxo/80">
                Quanto mais você contar, melhor a gente entende como ajudar.
                Leva menos de 2 minutos.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-10 rounded-3xl border border-uva/10 bg-white p-6">
                <p className="text-sm leading-relaxed text-roxo/75">
                  Prefere ir direto ao ponto? Chama no WhatsApp que a Duda
                  responde pessoalmente.
                </p>
                <a
                  href={BRAND.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 font-semibold text-violeta hover:text-uva"
                >
                  {BRAND.whatsappDisplay} →
                </a>
              </div>
            </Reveal>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-full flex-col items-start justify-center rounded-3xl bg-uva grain p-10 text-white"
                >
                  <span className="font-display text-6xl font-black text-lilas">
                    Uhu!
                  </span>
                  <h3 className="mt-4 font-display text-2xl font-bold">
                    Sua solicitação está a caminho.
                  </h3>
                  <p className="mt-3 max-w-md text-lilas/80">
                    Abrimos o WhatsApp com tudo preenchido — é só enviar. Se
                    preferir, respondo pessoalmente todo pedido, geralmente em
                    até 24h.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-8 rounded-full bg-lilas px-7 py-3 text-sm font-semibold uppercase tracking-wide text-uva transition-colors hover:bg-white"
                  >
                    Enviar outra
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  noValidate
                  onSubmit={onSubmit}
                  initial={false}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-3xl border border-uva/10 bg-white p-6 sm:p-9"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="nome" className={labelCls}>
                        Nome *
                      </label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        autoComplete="name"
                        placeholder="Seu nome"
                        aria-invalid={!!errors.nome}
                        aria-describedby={errors.nome ? "err-nome" : undefined}
                        className={`${fieldBase} ${errors.nome ? fieldErr : fieldOk}`}
                      />
                      {errors.nome && (
                        <p id="err-nome" className="mt-2 text-sm text-red-600">
                          {errors.nome}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="empresa" className={labelCls}>
                        Empresa / Marca{" "}
                        <span className="font-normal text-roxo/50">
                          (opcional)
                        </span>
                      </label>
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        placeholder="Nome da marca"
                        className={`${fieldBase} ${fieldOk}`}
                      />
                    </div>

                    <div>
                      <label htmlFor="whatsapp" className={labelCls}>
                        WhatsApp *
                      </label>
                      <input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        autoComplete="tel"
                        placeholder="(31) 90000-0000"
                        aria-invalid={!!errors.whatsapp}
                        aria-describedby={
                          errors.whatsapp ? "err-whatsapp" : undefined
                        }
                        className={`${fieldBase} ${errors.whatsapp ? fieldErr : fieldOk}`}
                      />
                      {errors.whatsapp && (
                        <p id="err-whatsapp" className="mt-2 text-sm text-red-600">
                          {errors.whatsapp}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className={labelCls}>
                        E-mail *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        placeholder="voce@email.com"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? "err-email" : undefined}
                        className={`${fieldBase} ${errors.email ? fieldErr : fieldOk}`}
                      />
                      {errors.email && (
                        <p id="err-email" className="mt-2 text-sm text-red-600">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Multi-select: necessidades */}
                  <fieldset className="mt-8">
                    <legend className={labelCls}>O que você precisa? *</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {NEEDS.map((need) => {
                        const active = needs.includes(need);
                        return (
                          <label
                            key={need}
                            className={`flex cursor-pointer items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-200 ${
                              active
                                ? "border-violeta bg-violeta/10 text-uva"
                                : "border-uva/15 text-roxo/80 hover:border-uva/40"
                            }`}
                          >
                            <input
                              type="checkbox"
                              className="sr-only"
                              checked={active}
                              onChange={() => toggleNeed(need)}
                            />
                            <span
                              className={`flex h-5 w-5 flex-none items-center justify-center rounded-md border transition-colors ${
                                active
                                  ? "border-violeta bg-violeta text-white"
                                  : "border-uva/30"
                              }`}
                            >
                              {active && "✓"}
                            </span>
                            {need}
                          </label>
                        );
                      })}
                    </div>
                    {errors.needs && (
                      <p className="mt-2 text-sm text-red-600">{errors.needs}</p>
                    )}
                  </fieldset>

                  {/* Radio: estagio da marca */}
                  <fieldset className="mt-8">
                    <legend className={labelCls}>
                      Sua marca já existe ou está começando agora?
                    </legend>
                    <div className="flex flex-wrap gap-3">
                      {STAGES.map((s) => {
                        const active = stage === s;
                        return (
                          <label
                            key={s}
                            className={`flex cursor-pointer items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                              active
                                ? "border-violeta bg-violeta text-white"
                                : "border-uva/15 text-roxo/80 hover:border-uva/40"
                            }`}
                          >
                            <input
                              type="radio"
                              name="stage"
                              value={s}
                              className="sr-only"
                              checked={active}
                              onChange={() => setStage(s)}
                            />
                            {s}
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div className="mt-8">
                    <label htmlFor="mensagem" className={labelCls}>
                      Conta um pouco sobre o projeto *
                    </label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      rows={4}
                      placeholder="O que você tem hoje, o que te incomoda, onde quer chegar..."
                      aria-invalid={!!errors.mensagem}
                      aria-describedby={
                        errors.mensagem ? "err-mensagem" : undefined
                      }
                      className={`${fieldBase} resize-none ${errors.mensagem ? fieldErr : fieldOk}`}
                    />
                    {errors.mensagem && (
                      <p id="err-mensagem" className="mt-2 text-sm text-red-600">
                        {errors.mensagem}
                      </p>
                    )}
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="prazo" className={labelCls}>
                        Prazo ideal
                      </label>
                      <input
                        id="prazo"
                        name="prazo"
                        type="text"
                        placeholder="Ex: até 30 dias"
                        className={`${fieldBase} ${fieldOk}`}
                      />
                    </div>
                    <div>
                      <label htmlFor="orcamento" className={labelCls}>
                        Orçamento estimado{" "}
                        <span className="font-normal text-roxo/50">
                          (opcional)
                        </span>
                      </label>
                      <input
                        id="orcamento"
                        name="orcamento"
                        type="text"
                        placeholder="Ex: R$ 2.000 – R$ 5.000"
                        className={`${fieldBase} ${fieldOk}`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-violeta px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300 ease-out-expo hover:-translate-y-0.5 hover:bg-uva sm:w-auto"
                  >
                    Enviar solicitação
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </button>

                  <p className="mt-5 text-sm text-roxo/60">
                    Respondo pessoalmente todo pedido — geralmente em até 24h.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
