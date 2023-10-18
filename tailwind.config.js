/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: ['h-48', 'overflow-x-hidden'],
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
      backgroundImage: {
        main: "url('/background.png')",
      },
    },
  },
  plugins: [],
};
