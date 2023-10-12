/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'fond-card-detail': "url('./src/assets/fond-card-detail.png')",
      },
      colors: {
        'font-color': '#FFFFFF',
        primary: '#A58363',
        'primary-light': '#C7A98D',
        'primary-dark': '#664A30',
        'text-yellow': '#FFC500',
      },
      fontFamily: {
        main: ['Coustard', 'cursive'],
        test: ['Blinker'],
      },
    },
  },
  plugins: [],
};
