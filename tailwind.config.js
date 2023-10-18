/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    ...Array.from(Array(10).keys()).map(
      (i) => `[transform:rotateY(${i * 36}deg)translateZ(450px)]`,
    ),
    ...Array.from(Array(10).keys()).map((i) => `rotate-y-[${i * 36}deg]`),
    ...Array.from(Array(10).keys()).map((i) => `rotate-y-[-${i * 36}deg]`),
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
