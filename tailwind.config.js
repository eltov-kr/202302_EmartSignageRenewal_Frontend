/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        red: '#FF4842',
        yellow: {
          primary: '#FFAB00',
          light: '#FFEECC',
        },
        grey: {
          100: '#F9FAFB',
          200: '#C0C8CF',
          300: '#919EAB',
          400: '#637381',
          500: '#45515B',
        },
      },
    },
    fontFamily: {
      noto: ['Noto Sans KR', 'sans-serif'],
    },
  },
  plugins: [],
};
