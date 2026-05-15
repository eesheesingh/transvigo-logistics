/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Logo navy — matches TRANSVIGO wordmark + outer arrow swoosh
        navy: {
          50: "#eef3fb",
          100: "#d2dfee",
          200: "#a0badc",
          300: "#6c91c2",
          400: "#3f6ba1",
          500: "#1f4d80",
          600: "#163d6a",
          700: "#143C61", // ← logo navy
          800: "#0E3559",
          900: "#082544",
          950: "#051a32",
        },
        // Logo teal — innermost cyan-teal swoosh
        teal: {
          400: "#5DD0E6",
          500: "#2BBED9", // ← logo teal
          600: "#1FA1BC",
          700: "#167D94",
        },
        // Logo lime — vivid green swoosh
        lime: {
          400: "#95D360",
          500: "#74C13F", // ← logo lime
          600: "#5BA02E",
          700: "#467A26",
        },
        // Logo forest — the darker green band between navy and lime
        forest: {
          400: "#4A8A52",
          500: "#356939", // ← logo forest
          600: "#2A5530",
          700: "#1F4124",
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
        display: ['"Plus Jakarta Sans"', "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 50px -25px rgba(20, 60, 97, 0.35)",
        ring: "0 0 0 1px rgba(43, 190, 217, 0.25)",
      },
      keyframes: {
        dash: { to: { strokeDashoffset: "-200" } },
        ping2: {
          "0%": { transform: "scale(1)", opacity: "0.6" },
          "100%": { transform: "scale(2.4)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        floaty: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        dash: "dash 6s linear infinite",
        ping2: "ping2 2.4s cubic-bezier(0,0,0.2,1) infinite",
        marquee: "marquee 40s linear infinite",
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
