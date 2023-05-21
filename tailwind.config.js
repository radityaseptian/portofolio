/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
      },
      backgroundColor: {
        'primary': '#0a192f',
        'secondary': '#c770f0'
      },
      colors: {
        'primary': '#c770f0',
        'secondary': '#CCD6F6',
      },
    },
  },
  plugins: [],
}
