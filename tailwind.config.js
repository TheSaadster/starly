/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'playfair': ['var(--font-playfair)', 'serif'],
      },
      colors: {
        gold: {
          50: '#fefdf8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#f7c948',
          500: '#f59e0b',
          600: '#e8b308',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        }
      },
      animation: {
        'twinkle': 'twinkle 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
        'fadeInUp': 'fadeInUp 0.8s ease-out forwards',
        'slideInLeft': 'slideInLeft 0.8s ease-out forwards',
        'pulse-ring': 'pulse-ring 1.5s ease-out infinite',
        'bounce-slow': 'bounce 3s infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-stellar': 'linear-gradient(135deg, #fef3c7 0%, #fde68a 25%, #f7c948 50%, #e8b308 75%, #a16207 100%)',
      },
      boxShadow: {
        'stellar': '0 0 50px rgba(247, 201, 72, 0.3)',
        'glow': '0 0 20px rgba(247, 201, 72, 0.5)',
        'inner-glow': 'inset 0 0 20px rgba(247, 201, 72, 0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
  ],
}