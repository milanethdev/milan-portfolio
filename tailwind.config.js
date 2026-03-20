/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['Orbitron', 'monospace'],
      },
      colors: {
        hack: {
          green: '#00ff41',
          cyan: '#00e5ff',
          purple: '#bd00ff',
          dark: '#080808',
          card: '#0f0f0f',
          border: '#1a1a1a',
        }
      },
    },
  },
  plugins: [],
}