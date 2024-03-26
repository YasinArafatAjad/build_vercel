/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",  
    "./node_modules/flowbite-react/lib/esm/**/*.js",  
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'primary': '#C1DEE8',
      'secondery': '#FBD9B9',
      'black-1': '#000',
      'text-heading-1': '#1F1F1F',
      'gray-1': '#BEBEBE',
      'gray-2': '#FAFAFA',
      'white-1': '#FEFEFF'
  
    },
    screens: {
      // for mobile
      // its raw code
    //  for tablet
      'md': {'min': '767px','max': '1023px'},
      // for laptop and desktop
      'lg': {'min': '1024px'},
    },
    fontFamily: {    
      poppins : ['"Poppins"', 'sans-serif'],
      // poppins : ['"Whisper"', 'cursive']
    },
  },
  
  plugins: [
    require('flowbite/plugin'),
  ],
  
}