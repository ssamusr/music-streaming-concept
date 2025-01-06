import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Inter"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        'dark-alt': '#1A1E1F',
        dark: '#1D2123',
        light: '#EFEEE0',
        primary: '#FACD66',
      },
      backgroundImage: {
        'hero-pattern': "url('/app/assets/images/Hero.png')",
      },
    },
  },
  plugins: [],
} satisfies Config
