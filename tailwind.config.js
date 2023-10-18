/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'rotate-y-[0deg]',
    'rotate-y-[36deg]',
    'rotate-y-[72deg]',
    'rotate-y-[108deg]',
    'rotate-y-[144deg]',
    'rotate-y-[180deg]',
    'rotate-y-[216deg]',
    'rotate-y-[252deg]',
    'rotate-y-[288deg]',
    'rotate-y-[324deg]',
  ],

  theme: {
    extend: {
      colors: {
        'font-color': '#FFFFFF',
        primary: '#A58363',
        'primary-light': '#C7A98D',
        'primary-dark': '#664A30',
        'text-yellow': '#FFC500',
      },
      fontFamily: {
        main: ['Coustard', 'cursive'],
      },
    },
  },
  plugins: [require('tailwindcss-3d')],
};
