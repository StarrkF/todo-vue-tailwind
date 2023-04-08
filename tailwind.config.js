module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'glow': '0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #f0f, 0 0 40px #f0f',
        'glow-xl': ' 0 0 5px #fff, 0 0 10px #fff, 0 0 20px #fff, 0 0 40px #f0f, 0 0 80px #f0f',
      },
      colors: {
        dark:'#000',
        light:'#fff',
      }
    },
  },
  plugins: [],
}
