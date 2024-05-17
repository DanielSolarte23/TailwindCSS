/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'fondo-inicio': "url('./img/fondoInicio.jpg')",
      },
      colors: {
      'ReD': "#b11e21",
      'GrisD': '#1e2326'
    },
    fontFamily: {
      'rigt': ['"Righteous"'],
    },
    },
    

  },
  plugins: [],
}

