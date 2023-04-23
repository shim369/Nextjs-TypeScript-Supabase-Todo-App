/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'custom-gradient': 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
      }),
    },
  },
  plugins: [],
}