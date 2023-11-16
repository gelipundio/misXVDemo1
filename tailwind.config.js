/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./img/img_bg_marmol.jpg')",
      },

      colors: {
        'morado-fondo': '#6E2E78',
        'morado-regular': '#9845B0',
      },

      fontFamily: {

        'montserrat': ['montserrat'],
        'GreatVibes': ['Great Vibes'], 

      }
  },
  plugins: [],
}

}
