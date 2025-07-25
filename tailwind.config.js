/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)'],
        'playfair': ['var(--font-playfair)'],
      },
      colors: {
        gold: {
          400: '#f7c948',
          500: '#f7c948',
          600: '#e8b308',
        }
      },
    },
  },
  plugins: [],
}