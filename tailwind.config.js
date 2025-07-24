// Configuración Tailwind
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui'],
      },
      colors: {
        azul: '#007BFF', // Azul personalizado
        btnPrimary: '#C71585',
        btnHover: '#A3126E',
        btnSecondary: '#007BFF',
      },
      backgroundImage: {
        'body-gradient': 'linear-gradient(to bottom right, #8A2BE2 -120%, #000000 100%)',
        'formatter-gradient': 'linear-gradient(to bottom right, #2D2D2D  -50%, #000 100%)'
      },
       borderRadius: {
        // Agrega un tamaño personalizado
        'btn': '0.5rem', // Usarás rounded-btn
      },
    },
  },
  darkMode: 'class', // Soporte para modo oscuro con clase .dark
  plugins: [],
};
