/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blueGray: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',

          light: '#94A3B8',
          DEFAULT: '#64748B',
          dark: '#334155',
        },
        teal: {
          DEFAULT: '#0F766E',
        },
      },
    },
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          'base-100': '#64748B',
          'base-content': '#64748B',
        },
      },
    ],
  },

  plugins: [require('daisyui')],
};
