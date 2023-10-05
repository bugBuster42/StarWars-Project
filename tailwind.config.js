/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        font_color: '#FFFFFF',
        primary: '#A58363',
        primary_light: '#C7A98D',
        pripmary_drak: '#664A30',
        text_yellow: '#FFC500',
      },
      fontFamily: {
        main: ['Coustard', 'cursive'],
      },
    },
  },
  plugins: [],
};
