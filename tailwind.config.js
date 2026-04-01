/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F9F7F2',
        primary: '#0F4C5C',
        navy: '#182232',
        accent: '#C9A96E',
        gold: '#C9A96E',
        sage: '#47654C',
        surface: {
          lowest: '#FFFFFF',
          low: '#F5F3EF',
          DEFAULT: '#F9F7F2',
          high: '#EAE8E4',
          dim: '#DBDAD6',
        },
        on: {
          surface: '#1B1C1A',
          'surface-variant': '#45474C',
          tertiary: '#FFFFFF',
          'tertiary-container': '#BA9B62',
        },
      },
      fontFamily: {
        headline: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['Manrope', '-apple-system', 'sans-serif'],
        brand: ['Montserrat', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '1.5rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
