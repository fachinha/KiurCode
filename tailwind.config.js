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
          black: '#060608',
          dark: '#0a0a0e',
          surface: '#111116',
          surfaceLight: '#181820',
          border: 'rgba(255, 255, 255, 0.08)',
          borderStrong: 'rgba(255, 255, 255, 0.16)',
          borderRed: 'rgba(255, 42, 59, 0.35)',
          red: '#ff2a3b',
          redHover: '#e01e2f',
          redGlow: 'rgba(255, 42, 59, 0.45)',
          redSoft: 'rgba(255, 42, 59, 0.10)',
          white: '#ffffff',
          cream: '#f8f8fa',
          muted: '#a1a1aa',
          faint: '#71717a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-red': '0 0 35px -5px rgba(255, 42, 59, 0.35)',
        'glow-red-lg': '0 0 65px -10px rgba(255, 42, 59, 0.45)',
        'glass': '0 20px 50px -20px rgba(0, 0, 0, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
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
