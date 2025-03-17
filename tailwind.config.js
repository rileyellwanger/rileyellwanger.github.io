import {heroui} from "@heroui/theme"
import { li } from "framer-motion/client"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  darkMode: ["class", '[data-theme="dark"]'],
  plugins: [heroui({
    themes: {
      dark: {
        default: "dark",
        colors: {
          primary: {
            DEFAULT: "#0c593f",
            foreground: "#ffffff",
          },
          focus: "#0c593f",
        },
      },
    }
  })],
}
