module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: ['light'],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
