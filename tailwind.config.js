/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          300: '#f5d78e',
          400: '#e8c060',
          500: '#c9953a',
          600: '#a87428',
        },
        dark: {
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222',
          500: '#2e2e2e',
        },
        cream: '#f5f0e8',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
        sans: ['"DM Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c9953a 0%, #f5d78e 50%, #c9953a 100%)',
      },
    },
  },
  plugins: [],
}