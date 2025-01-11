/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        wave: 'wave 0.6s ease-in-out ',
      },
      fontFamily: {
        openSans: ['"Open Sans"', 'sans-serif'],
        bubblegum: ['"Bubblegum Sans"', 'cursive'],
      },
      colors: {
        primary: '#a5dd61',
        secondary:'#FFAA00'
      },
    
    },
  },
  plugins: [],
};
