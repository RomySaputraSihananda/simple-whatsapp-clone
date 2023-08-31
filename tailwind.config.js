/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'hp': '500px',
      },
      colors: {
        'backg': '#121B22',
        'nav': '#1F2C34',
        'nav-font': '#69767F',
        'msg-font': '#DFE7EA',
        'ijo': '#00A884'
      },
      backgroundImage: {
        'bgChat': "url('/src/assets/bgChat.png')"
      }
    },
  },
  plugins: [],
}

