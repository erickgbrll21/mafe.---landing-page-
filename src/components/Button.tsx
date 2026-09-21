import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "outline" | "light" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-wide transition-all duration-300 ease-out-expo focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  // Botao primario: Violeta, hover escurece para Uva
  primary:
    "bg-violeta text-white shadow-[0_10px_30px_-12px_rgba(93,45,140,0.7)] hover:bg-uva hover:-translate-y-0.5",
  // Sobre fundo escuro: hover clareia para Lilas
  light:
    "bg-lilas text-uva hover:bg-white hover:-translate-y-0.5",
  outline:
    "border border-uva/30 text-uva hover:border-uva hover:bg-uva hover:text-lilas hover:-translate-y-0.5",
  ghost:
    "text-uva hover:text-violeta underline decoration-lilas decoration-2 underline-offset-4",
};

type ButtonAsLink = {
  href: string;
  variant?: Variant;
  children: ReactNode;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href">;

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  external,
  ...rest
}: ButtonAsLink & { className?: string }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} {...rest}>
      {children}
    </Link>
  );
}

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: {
  variant?: Variant;
  className?: string;
  children: ReactNode;
} & ComponentProps<"button">) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
