/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        //mainColor:'#003973',
        //fadedColor:'#ffbe4a78',
        mainColor:'#8A5C6B',
        fadedColor:'#B76D70',
        cardColor: '#534666',
        //secondaryColor:'#E5E5BE',
        btnColor:'#EEB462'
      },
      backgroundImage: {
        'arrow-bg':'url(/arrow-bg.png)'
      },
      fontFamily: {
        title: ['Itim']
      }
    },
  },
  plugins: [],
}
