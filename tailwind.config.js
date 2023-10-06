/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'fond-card-detail': "url('./src/assets/fond-card-detail.png')",
      },
    },
  },
  plugins: [],
};
