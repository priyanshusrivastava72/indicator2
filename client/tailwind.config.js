/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#050505',
          100: '#0a0a0a',
          200: '#111111',
          300: '#1a1a1a',
          400: '#222222',
        },
        emerald: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          900: '#064e3b',
        }
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.01) 100%)',
      },
      borderWidth: {
        '0.5': '0.5px',
      }
    },
  },
  plugins: [],
}
