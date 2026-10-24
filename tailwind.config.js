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
          dark: '#05070d',
          surface: '#0a0e17',
          surfaceLight: '#111726',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(0, 229, 255, 0.3)',
          cyan: '#00e5ff',
          cyanGlow: 'rgba(0, 229, 255, 0.4)',
          cyanSoft: 'rgba(0, 229, 255, 0.08)',
          blue: '#0284c7',
          blueGlow: 'rgba(2, 132, 199, 0.4)',
          text: '#f1f5f9',
          textMuted: '#94a3b8',
          textFaint: '#64748b',
          accent: '#00e5ff',
          emerald: '#10b981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glow-cyan': '0 0 35px -5px rgba(0, 229, 255, 0.25)',
        'glow-cyan-lg': '0 0 60px -10px rgba(0, 229, 255, 0.35)',
        'glow-blue': '0 0 35px -5px rgba(2, 132, 199, 0.25)',
        'glass': '0 20px 50px -20px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'drift': 'drift 18s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(20px, 30px)' },
        }
      }
    },
  },
  plugins: [],
}
