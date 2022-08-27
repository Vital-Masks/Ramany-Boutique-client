module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'lg-max': { max: '1023px' },
        'md-max': { max: '425px' },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
