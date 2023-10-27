/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    ...Array.from(Array(10).keys()).map(
      (i) => `[transform:rotateY(${i * 36}deg)translateZ(400px)]`,
    ),
    ...Array.from(Array(10).keys()).map((i) => `rotate-y-[${i * 36}deg]`),
    ...Array.from(Array(10).keys()).map((i) => `rotate-y-[-${i * 36}deg]`),
    'h-48',
    'h-80',
    'w-36',
    'w-20',
    'w-28',
    'w-14',
    'bottom-40',
    'bottom-80',
    'left-28',
    'left-96',
    'top-32',
    'top-96',
    'right-56',
    'right-96',
    'border-fluo-green',
    'bg-light-green',
    'shadow-green',
    'border-fluo-blue',
    'bg-light-blue',
    'shadow-blue',
    'border-fluo-red',
    'bg-light-red',
    'shadow-red',
    'border-fluo-yellow',
    'bg-light-yellow',
    'shadow-yellow',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fond-card-detail': "url('./fond-card-detail.png')",
      },
      colors: {
        'font-color': '#FFFFFF',
        primary: '#A58363',
        'primary-light': '#C7A98D',
        'primary-dark': '#664A30',
        'text-yellow': '#FFC500',
        'light-green': '#DAFED8',
        'fluo-green': '#42EA45',
        'light-blue': '#93ADF9',
        'fluo-blue': '#3153BE',
        'light-red': '#FEB5B6',
        'fluo-red': '#DB0511',
        'light-yellow': '#E6F18D',
        'fluo-yellow': '#F3F330',
      },
      fontFamily: {
        main: ['Coustard', 'cursive'],
        test: ['Blinker'],
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
      rotate: {
        270: '270deg',
      },
      boxShadow: {
        green: '-9px 1px 50px 30px #1D6A1E',
        blue: '-9px 1px 50px 30px #041B77',
        red: '-9px 1px 50px 30px #8E0306',
        yellow: '-9px 1px 50px 30px #88950D',
      },
    },
  },
  plugins: [require('tailwindcss-3d')],
};
