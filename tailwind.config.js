/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

// import flowbitePlugin from 'flowbite/plugin'
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        green:{
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#003478',
          600: '#007267',
          700: '#005f56',
          800: '#004b43',
          900: '#003d37',
          950: '#052e16',
        }
      }
    },
  },
  plugins: [daisyui],
  theme: {
    extend: {
      colors: {
        primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#003478","400":"#003478","500":"#003478","600":"#003478","700":"#003478","800":"#003478","900":"#003478"},
        green: {"50":"#f0fdf4","100":"#dcfce7","200":"#bbf7d0","300":"#86efac","400":"#4ade80","500":"#003478","600":"#003478","700":"#003478","800":"#003478","900":"#003478","950":"#003478"},
        blue: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#003478","400":"#003478","500":"#003478","600":"#003478","700":"#003478","800":"#003478","900":"#003478"},
      }
    },
    fontFamily: {
      'body': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ],
      'sans': [
        'Inter', 
        'ui-sans-serif', 
        'system-ui', 
        '-apple-system', 
        'system-ui', 
        'Segoe UI', 
        'Roboto', 
        'Helvetica Neue', 
        'Arial', 
        'Noto Sans', 
        'sans-serif', 
        'Apple Color Emoji', 
        'Segoe UI Emoji', 
        'Segoe UI Symbol', 
        'Noto Color Emoji'
      ]
    }
  }
}

