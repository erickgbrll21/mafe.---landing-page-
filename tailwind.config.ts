import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial Mefa (brandbook)
        uva: "#3D0356",
        roxo: "#311B42",
        violeta: "#5D2D8C",
        lilas: "#CFAAF2",
        "cinza-marca": "#CCCCCC",
        cream: "#F6F2FA",
      },
      fontFamily: {
        // "Tan Nimbus" indisponivel no Google Fonts -> fallback Fraunces (serifada de personalidade)
        display: ["var(--font-display)", "Fraunces", "Georgia", "serif"],
        body: ["var(--font-body)", "Montserrat", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1280px",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
