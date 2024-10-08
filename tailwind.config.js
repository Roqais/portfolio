/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {

        'full': '9999px',
        'half': '50px',
      },
      colors: {
        customPurple: '#5540AF',
        primary: "#5540af",
      },
    },
  },
  plugins: [],
}