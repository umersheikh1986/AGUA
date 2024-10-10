/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
  plugins: [],
};
