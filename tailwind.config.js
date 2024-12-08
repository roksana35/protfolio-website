/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
      },
      fontFamily:{
        roboto:"'Roboto',sans-serif",
        montserrat:" 'Montserrat', sans-serif",
        arimo:"'Arimo', sans-serif"
      },
     
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

