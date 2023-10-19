/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
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
      keyframes: {
        scroll: {
          '0%': {
            top: '350px',
            transform: 'translateZ(0) rotateX(35deg)',
          },
          '100%': {
            top: '-7500px',
            transform: 'translateZ(-2500px) rotateX(36deg)',
          },
        },
        'move-cards': {
          '0%': { transform: 'translateY(1vh)' },
          '100%': { transform: 'translateY(-15vh)' },
        },
      },
      animation: {
        'scroll-text': 'scroll 300s linear forwards',
        'move-cards': 'move-cards 9s ease-out forwards',
      },
    },
  },
  plugins: [],
};
