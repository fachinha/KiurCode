/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        kiur: {
          bg: '#ffffff',
          bgAlt: '#f8f9fb',
          dark: '#09090b',
          surface: '#ffffff',
          surfaceAlt: '#f4f4f7',
          border: '#e4e4e7',
          borderHover: '#d4d4d8',
          borderRed: 'rgba(229, 43, 43, 0.35)',
          red: '#e52b2b',
          redHover: '#cc2222',
          redGlow: 'rgba(229, 43, 43, 0.25)',
          redSoft: 'rgba(229, 43, 43, 0.08)',
          black: '#09090b',
          blackSoft: '#18181b',
          text: '#09090b',
          muted: '#52525b',
          faint: '#a1a1aa',
          white: '#ffffff',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'glow-red': '0 4px 20px -2px rgba(229, 43, 43, 0.35)',
      },
      animation: {
        'marquee': 'marquee 28s linear infinite',
        'marquee-slow': 'marquee 40s linear infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
      }
    },
  },
  plugins: [],
}
