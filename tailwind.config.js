/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        // Configuramos una sans-serif geométrica como principal
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        // Definimos la paleta de colores de la referencia
        'premium-bg': '#0A0A0A', // Negro profundo
        'premium-cyan': '#00E6FF', // Cian vibrante (acentos)
        'premium-red': '#FF2D55', // Rojo rosado (botones)
        'premium-card': '#141414', // Gris muy oscuro (tarjetas)
        'premium-border': '#262626', // Gris borde (bajos)
      },
    },
  },
  plugins: [],
};
