/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      keyframes: {
        bgColorChange: {
          '0%, 100%': { backgroundColor: '#554922' }, // First color
          '50%': { backgroundColor: '#abcdef' },      // Second color
        },
      },
      animation: {
        bgColorChange: 'bgColorChange 1s ease-in-out infinite',
      },
      keyframes: {
        appear: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        appear: 'appear 1s linear', // 1s duration, linear timing
      },
      keyframes: {
        slideLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        slideLeft: 'slideLeft 0.5s ease-out',
      },
      colors: {
        customBrown: '#25200F',
        customgold: '#524621',
        tiltcard: '#1A1A1A',
        lightgold: '#D2BA57'
      },
      fontFamily: {
        times: ['"Times New Roman"', 'serif'],
      },
      backgroundImage: {
        spark: "url('/bgs.png')",
      },
      keyframes: {
        spark: {
          "0%, 100%": { opacity: "0", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
      },
      animation: {
        spark: "spark 2s infinite",
      },
    },
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
};
