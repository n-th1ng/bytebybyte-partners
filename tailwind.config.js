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
        brand: {
          50: "#eef0ff",
          100: "#dbe0ff",
          200: "#b8c1ff",
          300: "#7a8eff",
          400: "#4d51ff",
          500: "#1b17ff",
          600: "#1510cc",
          700: "#0f0c99",
          800: "#0a0866",
          900: "#060433",
        },
        spark: {
          400: "#8bffb8",
          500: "#5af78e",
          600: "#3dd976",
          700: "#2bb85f",
        },
        gold: {
          400: "#ffe066",
          500: "#ffd43b",
          600: "#fcc419",
        },
        coral: {
          400: "#ffb3b3",
          500: "#ff9c9c",
          600: "#e87878",
        },
        navy: {
          950: "#060e3a",
          900: "#0a1245",
          800: "#0f1a5e",
          700: "#16205c",
          600: "#1e2a6e",
          500: "#2a3790",
        },
        ink: {
          100: "#dbf3ff",
          200: "#f1f0f0",
          300: "#a0b0d0",
          400: "#8a99c7",
          500: "#6b7ab0",
        },
        dark: {
          950: "#060e3a",
          900: "#0a1245",
          800: "#0f1a5e",
          700: "#16205c",
          600: "#1e2a6e",
          500: "#2a3790",
          400: "#8a99c7",
          300: "#a0b0d0",
          200: "#c5d0e8",
          100: "#dbf3ff",
        },
      },
      fontFamily: {
        heading: ["Space Grotesk", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};