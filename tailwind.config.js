/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: "#070d33",
          2: "#0a1340",
          3: "#0e1749",
        },
        ink: {
          DEFAULT: "#e6ecfd",
          2: "#c5d0ea",
          3: "#9faccf",
          4: "#7985af",
          5: "#566093",
        },
        rule: {
          DEFAULT: "#1a2555",
          2: "#243168",
        },
        accent: {
          DEFAULT: "#1b17ff",
          ink: "#ffffff",
          warm: "#5af78e",
          warmInk: "#063420",
          coral: "#ff9c9c",
          gold: "#ffd248",
          goldInk: "#3a2e00",
        },
        navy: {
          DEFAULT: "#060e3a",
          50: "#0a1340",
          100: "#0e1749",
          200: "#060e3a",
          300: "#0e1749",
          400: "#16205c",
          500: "#1a2555",
          600: "#243168",
          700: "#1a2555",
          800: "#0e1749",
          900: "#0a1340",
          950: "#070d33",
        },
        brand: {
          DEFAULT: "#1b17ff",
          300: "#7c79ff",
          400: "#5b58ff",
          500: "#1b17ff",
          600: "#1511cc",
        },
        spark: {
          DEFAULT: "#5af78e",
          400: "#8afbb0",
          500: "#5af78e",
        },
        gold: {
          DEFAULT: "#ffd248",
          400: "#ffdd6b",
          500: "#ffd248",
          600: "#e6b800",
        },
        coral: {
          DEFAULT: "#ff9c9c",
          400: "#ffb3b3",
          500: "#ff9c9c",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        heading: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display": ["clamp(2.5rem, 5vw + 1rem, 4.5rem)", { lineHeight: "1.08", letterSpacing: "-0.03em" }],
        "display-s": ["clamp(2rem, 4vw + 0.75rem, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        measure: "65ch",
      },
    },
  },
  plugins: [],
};
