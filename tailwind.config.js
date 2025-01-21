/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      cursor: {
        'fancy': 'url(\'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" stroke="%23000" stroke-width="2" d="M4.5.79v22.42l6.56-6.57h9.29L4.5.79z"></path></svg>\') 4 4, auto',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'reverse-spin': 'reverse-spin 5s linear infinite',
        'move-down': 'move-down 2.5s linear infinite',
         'popup': "popup 0.5s ease-out forwards",
      },
      keyframes: {
        'reverse-spin': {
          to: {
            transform: 'rotate(-1turn)',
          },
        },
        popup: {
          "0%": { transform: "scale(0)", opacity: "1" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        'move-down': {
          '0%': { transform: 'translateY(-200%)' },
          '35%':{ transform:'translateY(100%)'},
          '65%':{ transform:'translateY(100%)'},
          '100%': { transform: 'translateY(600%)' },
        },
      },
      dropShadow: {
        md: '0px 0px 5px #333',
      },
      fontFamily: {
        "londrina": ['Londrina Outline', 'sans-serif'],
        "Archivo":['Archivo Black'],
        "Bakbak":['Bakbak One'],
        "Tilt":['Tilt Warp'],
        "Paytone":['Paytone One'],
        "Monoton":['Monoton'],
        "Rammetto":['Rammetto One'],
        "Bowlby":['Bowlby One SC'],
        "Bungee":['Bungee Inline'],
        "Mochiy":['Mochiy Pop One'],
        "Anek":['Anek Devanagari']

    },
    transitionTimingFunction: {
      'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      'bezier': 'all cubic-bezier(0.19, 1, 0.22, 1)'
    },
    backgroundImage: {
      'heroSectionImage': "url('/bgimage.png')",
    }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}