/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '128': '32rem',
      },
      transitionTimingFunction: {
        'sloo': 'cubic-bezier(0, 0.75, 0.36, 0.83)',
      }
    },
  },
  plugins: [],
}