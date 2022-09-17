/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      large: "1536px",
    },
    extend: {
      backgroundImage: {
        'bgm': "url('/center.png')",
      
        
        

      }

    },
    fontFamily: {
      'pt': ["Patrick Hand", "cursive"]
    }
  },
  plugins: [],
}
