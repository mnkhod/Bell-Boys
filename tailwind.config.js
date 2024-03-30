/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      main: ['Bebas Neue', 'sans-serif'],
      sub: ['Blinker', 'sans-serif'],
    },
    extend: {
      colors: {
        'primary': '#EB5E28',
        'input': '#CCC5B9',
        'text': '#FFFCF2',
        'page': '#252422',
        'box': '#403D39',
      }
    },
  },
  plugins: [],
}
