import type { Metadata, Viewport } from "next";
import { Fraunces, Montserrat } from "next/font/google";
import "./globals.css";

/*
  Fonte display: Fraunces (substituicao documentada de "Tan Nimbus", indisponivel
  no Google Fonts). Optical size alta + peso black para o ar robusto/retro do logo.
  Fonte body: Montserrat (fonte secundaria oficial do brandbook).
*/
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mefadesign.com.br"),
  title: {
    default: "mefa. — Mais que design, identidade.",
    template: "%s · mefa.",
  },
  description:
    "Design com propósito e marca com identidade. A Mefa constrói identidade — não vende 'postzinho bonito'. Branding, gestão de redes sociais e vídeo.",
  keywords: [
    "branding",
    "identidade visual",
    "design de marca",
    "gestão de redes sociais",
    "Mefa",
    "Duda",
  ],
  authors: [{ name: "Mefa Design" }],
  openGraph: {
    title: "mefa. — Mais que design, identidade.",
    description:
      "Design com propósito. Marca com identidade. Você, do jeito que só você é.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/assets/mefa-logo.png" }],
  },
  icons: {
    icon: "/assets/mefa-mark.png",
    apple: "/assets/mefa-mark.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#3D0356",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${montserrat.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
