/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "atelier-green": "#143826",
        "atelier-dark": "#0B1A13",
        "atelier-darker": "#07140E",
        "atelier-red": "#C2101C",
        "atelier-red-hover": "#A80B15",
        "mint-soft": "#EBF4EE",
        "mint-light": "#F4F8F5",
        "mint-border": "#D8E5DC",
        "border-clean": "#E2E8E4",
        "primary": "#143826",
        "primary-container": "#1E4B34",
        "primary-light": "#E5EFE8",
        "secondary": "#C2101C",
        "secondary-dark": "#A80B15",
        "secondary-container": "#FDE8E9",
        "tertiary": "#2E5C43",
        "tertiary-container": "#E3EFE7",
        "surface": "#F8FAF9",
        "surface-low": "#F1F5F2",
        "on-surface": "#181D1A",
        "on-surface-variant": "#4F6056",
        "outline": "#D1DDD4"
      },
      fontFamily: {
        "display": ["'EB Garamond'", "serif"],
        "headline": ["'EB Garamond'", "serif"],
        "serif": ["'EB Garamond'", "serif"],
        "label": ["'Space Grotesk'", "sans-serif"],
        "mono": ["'Space Grotesk'", "monospace"],
        "body": ["'Plus Jakarta Sans'", "sans-serif"],
        "sans": ["'Plus Jakarta Sans'", "sans-serif"]
      },
      boxShadow: {
        'atelier': '0 2px 14px -2px rgba(20, 56, 38, 0.05), 0 1px 3px -1px rgba(20, 56, 38, 0.03)',
        'atelier-hover': '0 12px 28px -6px rgba(20, 56, 38, 0.09), 0 4px 10px -2px rgba(20, 56, 38, 0.04)'
      }
    },
  },
  plugins: [],
}
