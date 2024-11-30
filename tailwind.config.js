// /** @type {import('tailwindcss').Config} */
// const flowbite = require("flowbite-react/tailwind");
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     flowbite.content(),
//   ],
//   theme: {
//     extend: {
//       keyframes: {
//         bgColorChange: {
//           '0%, 100%': { backgroundColor: '#554922' }, // First color
//           '50%': { backgroundColor: '#abcdef' },      // Second color
//         },
//       },
//       animation: {
//         bgColorChange: 'bgColorChange 1s ease-in-out infinite',
//       },
//       keyframes: {
//         appear: {
//           '0%': {
//             opacity: '0',
//             transform: 'scale(0.5)',
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'scale(1)',
//           },
//         },
//       },
//       animation: {
//         appear: 'appear 1s linear', // 1s duration, linear timing
//       },
//       keyframes: {
//         slideLeft: {
//           '0%': { transform: 'translateX(-100%)' },
//           '100%': { transform: 'translateX(0)' },
//         },
//       },
//       animation: {
//         slideLeft: 'slideLeft 0.5s ease-out',
//       },
//       colors: {
//         customBrown: '#25200F',
//         customgold: '#524621',
//         boxdark: "#24303F",
//         tiltcard: '#1A1A1A',
//         lightgold: '#D2BA57'
//       },
//       fontFamily: {
//         times: ['"Times New Roman"', 'serif'],
//       },
//       backgroundImage: {
//         spark: "url('/bgs.png')",
//       },
//       keyframes: {
//         spark: {
//           "0%, 100%": { opacity: "0", transform: "scale(1)" },
//           "50%": { opacity: "1", transform: "scale(1.2)" },
//         },
//       },
//       animation: {
//         spark: "spark 2s infinite",
//       },
//     },
//   },
//   plugins: [
//     require('daisyui'),
//     flowbite.plugin(),
//   ],
// };
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/components/**/*.{js,jsx,ts,tsx,mdx}",
    "./src/app/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    // fontFamily: {
    //   satoshi: ["Satoshi", "sans-serif"],
    //   orbitron: ['Orbitron'],
    // },
    screens: {
      "2xsm": "375px",
      xsm: "425px",
      "3xl": "2000px",
      ...defaultTheme.screens,
    },
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
                                 roadmap: '#37766E',
                                 boxdark: "#24303F",
                                 tiltcard: '#1A1A1A',
                                 lightgold: '#D2BA57'
                               },
                               fontFamily: {
                                // times: ['"Orbitron"', 'serif'],
                                san: "Orbitron, sans-serif"
                               },
                               backgroundImage: {
                                 spark: "url('/bgs.png')",
                               },
                               backgroundImage: {
                                'gold-silver': 'linear-gradient(135deg, #000000, #493E1D)',
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
      colors: {
        current: "currentColor",
        customGray: '#24303F',
        lightgold: '#D2BA57',
        transparent: "transparent",
        white: "#FFFFFF",
        black: {
          DEFAULT: "#1C2434",
          2: "#010101",
        },
        red: {
          ...colors.red,
          DEFAULT: "#FB5454",
        },
        body: "#64748B",
        bodydark: "#AEB7C0",
        bodydark1: "#DEE4EE",
        bodydark2: "#8A99AF",
        primary: "#3C50E0",
        secondary: "#80CAEE",
        stroke: "#E2E8F0",
        gray: {
          ...colors.gray,
          DEFAULT: "#EFF4FB",
          2: "#F7F9FC",
          3: "#FAFAFA",
        },
        graydark: "#333A48",
        whiten: "#F1F5F9",
        whiter: "#F5F7FD",
        boxdark: "#24303F",
        "boxdark-2": "#1A222C",
        strokedark: "#2E3A47",
        "form-strokedark": "#3d4d60",
        "form-input": "#1d2a39",
        meta: {
          1: "#DC3545",
          2: "#EFF2F7",
          3: "#10B981",
          4: "#313D4A",
          5: "#259AE6",
          6: "#FFBA00",
          7: "#FF6766",
          8: "#F0950C",
          9: "#E5E7EB",
          10: "#0FADCF",
        },
        success: "#219653",
        danger: "#D34053",
        warning: "#FFA70B",
      },
      fontSize: {
        "title-xxl": ["44px", "55px"],
        "title-xxl2": ["42px", "58px"],
        "title-xl": ["36px", "45px"],
        "title-xl2": ["33px", "45px"],
        "title-lg": ["28px", "35px"],
        "title-md": ["24px", "30px"],
        "title-md2": ["26px", "30px"],
        "title-sm": ["20px", "26px"],
        "title-sm2": ["22px", "28px"],
        "title-xsm": ["18px", "24px"],
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.625rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        9.5: "2.375rem",
        10.5: "2.625rem",
        11: "2.75rem",
        11.5: "2.875rem",
        12.5: "3.125rem",
        13: "3.25rem",
        13.5: "3.375rem",
        14: "3.5rem",
        14.5: "3.625rem",
        15: "3.75rem",
        15.5: "3.875rem",
        16: "4rem",
        16.5: "4.125rem",
        17: "4.25rem",
        17.5: "4.375rem",
        18: "4.5rem",
        18.5: "4.625rem",
        19: "4.75rem",
        19.5: "4.875rem",
        21: "5.25rem",
        21.5: "5.375rem",
        22: "5.5rem",
        22.5: "5.625rem",
        24.5: "6.125rem",
        25: "6.25rem",
        25.5: "6.375rem",
        26: "6.5rem",
        27: "6.75rem",
        27.5: "6.875rem",
        29: "7.25rem",
        29.5: "7.375rem",
        30: "7.5rem",
        31: "7.75rem",
        32.5: "8.125rem",
        33: "8.25rem",
        34: "8.5rem",
        34.5: "8.625rem",
        35: "8.75rem",
        36.5: "9.125rem",
        37.5: "9.375rem",
        39: "9.75rem",
        39.5: "9.875rem",
        40: "10rem",
        42.5: "10.625rem",
        44: "11rem",
        45: "11.25rem",
        46: "11.5rem",
        47.5: "11.875rem",
        49: "12.25rem",
        50: "12.5rem",
        52: "13rem",
        52.5: "13.125rem",
        54: "13.5rem",
        54.5: "13.625rem",
        55: "13.75rem",
        55.5: "13.875rem",
        59: "14.75rem",
        60: "15rem",
        62.5: "15.625rem",
        65: "16.25rem",
        67: "16.75rem",
        67.5: "16.875rem",
        70: "17.5rem",
        72.5: "18.125rem",
        73: "18.25rem",
        75: "18.75rem",
        90: "22.5rem",
        94: "23.5rem",
        95: "23.75rem",
        100: "25rem",
        115: "28.75rem",
        125: "31.25rem",
        132.5: "33.125rem",
        150: "37.5rem",
        171.5: "42.875rem",
        180: "45rem",
        187.5: "46.875rem",
        203: "50.75rem",
        230: "57.5rem",
        242.5: "60.625rem",
      },
      maxWidth: {
        2.5: "0.625rem",
        3: "0.75rem",
        4: "1rem",
        7: "1.75rem",
        9: "2.25rem",
        10: "2.5rem",
        10.5: "2.625rem",
        11: "2.75rem",
        13: "3.25rem",
        14: "3.5rem",
        15: "3.75rem",
        16: "4rem",
        22.5: "5.625rem",
        25: "6.25rem",
        30: "7.5rem",
        34: "8.5rem",
        35: "8.75rem",
        40: "10rem",
        42.5: "10.625rem",
        44: "11rem",
        45: "11.25rem",
        60: "15rem",
        70: "17.5rem",
        90: "22.5rem",
        94: "23.5rem",
        125: "31.25rem",
        132.5: "33.125rem",
        142.5: "35.625rem",
        150: "37.5rem",
        180: "45rem",
        203: "50.75rem",
        230: "57.5rem",
        242.5: "60.625rem",
        270: "67.5rem",
        280: "70rem",
        292.5: "73.125rem",
      },
      maxHeight: {
        35: "8.75rem",
        70: "17.5rem",
        90: "22.5rem",
        110: "27.5rem",
        125: "31.25rem",
        150: "37.5rem",
        175: "43.75rem",
        185: "46.25rem",
        195: "48.75rem",
      },
    },
  },
  plugins: [require("daisyui"),
  ],
};
