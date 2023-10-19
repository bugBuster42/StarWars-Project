/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    ...Array.from(Array(10).keys()).map(
      (i) => `[transform:rotateY(${i * 36}deg)translateZ(400px)]`,
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
        'light-green': '#DAFED8',
        'fluo-green': '#42EA45',
        'dark-green': '#1D6A1E',
      },
      fontFamily: {
        main: ['Coustard', 'cursive'],
      },
      backgroundImage: {
        main: "url('/background.png')",
      },
      rotate: {
        270: '270deg',
      },
      boxShadow: {
        laser: '-9px 1px 50px 30px #1D6A1E',
      },
    },
  },
  plugins: [require('tailwindcss-3d')],
};
