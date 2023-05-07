/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      {
        dracula: {
          ...require('daisyui/src/colors/themes')['[data-theme=dracula]'],
          primary: '#03af68',

          secondary: '#399adb',

          accent: '#fca5a5',

          neutral: '#332839',

          'base-100': '#0D1117',

          info: '#31A5ED',

          success: '#50D782',

          warning: '#AD7310',

          error: '#F53C24'
        }
      }
    ]
  },
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Santoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: [require('daisyui'), require('tailwind-scrollbar')]
}
