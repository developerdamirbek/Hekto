/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "josefinSans" : ["Josefin Sans", "sans-serif"]
      },
      boxShadow: {
        'custom': '0px 0px 25px 0px rgba(0, 0, 0, 0.1)',
        'card': '0px 8px 40px 0px rgba(49, 32, 138, 0.05)',
        'detail': '0px 0px 25px 10px rgb(246, 244, 253)'
      },
      container: {
        center: true,
        screens: {
          xl: "1220px"
        },
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      colors: {
        "pink":"#FB2E86",
        "red":"#FB2448",
        "blue":"#2F1AC4",
        "offNavyBlue":"#3F509E",
        "navyBlue":"#151875",
        "skyBlue":"#F3F9FF",
        "pantonePurple":"#E0D3F5",
        "purple":"#7E33E0",
        "offPurple":"#9F63B5",
        "offBlue":"#151875",
        "subText": "#8A8FB9",
        "deadlyDepths":"#0D0E43",
        "titleColor": "#1A0B5B",
        "textColor":"#151875"

      }
    },
  },
  plugins: [],
}