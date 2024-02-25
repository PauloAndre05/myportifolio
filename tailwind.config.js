/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#23272F',
        'secound': '#374151',
        'third': '#149ECA',
        'four': '#1A1C22',
      },

      colors: {
        'primary': '#23272F',
        'secound': '#374151',
        'third': '#149ECA',
        'four': '#1A1C22',
      }, 

      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },

        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '50%':  { transform: 'rotate(180deg)' },
        },

        textEnd: {
          '0%': {transform: 'translateY(100%)'},
          '100%': {transform: 'translateY(-100%)'}
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        spinSlow: 'spinSlow 8s linear infinite',
        textEnd: 'textEnd 5s linear infinite'
      },

    },
  },
  plugins: [],
}

