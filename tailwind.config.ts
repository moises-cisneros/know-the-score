import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base colors
        background: "var(--app-background)",
        foreground: "var(--app-foreground)",

        // KTS Brand colors
        'kts-primary': {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9', // Main brand blue
          600: '#0284c7',
          900: '#0c4a6e'
        },

        // Prediction outcome colors
        'kts-success': '#22c55e', // Winning predictions
        'kts-danger': '#ef4444',  // Losing predictions
        'kts-warning': '#f59e0b', // Pending predictions

        // Sports-specific colors
        'kts-field': '#16a34a',   // Football field green
        'kts-gold': '#fbbf24',    // Trophy/winner gold

        // UI colors
        'card-bg': 'var(--app-card-bg)',
        'card-border': 'var(--app-card-border)',
        'accent': 'var(--app-accent)',
        'accent-hover': 'var(--app-accent-hover)',
        'accent-light': 'var(--app-accent-light)',
        'foreground-muted': 'var(--app-foreground-muted)',
        'gray': 'var(--app-gray)',
        'gray-dark': 'var(--app-gray-dark)'
      },
      animation: {
        "fade-out": "1s fadeOut 3s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-in forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      fontFamily: {
        'geist': ['var(--font-geist-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
