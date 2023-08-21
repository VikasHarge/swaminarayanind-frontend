/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0751bf",
        },
        secondary: {
          DEFAULT: "#a77c4f",
        },
        text: {
          DEFAULT: "#323B4B",
          1: "#323B4B",
          2: "#4E5D78",
          3: "#8A94A6",
          4: "#B0B7C3",
        },
      },

      backgroundImage: {
        "hero-background": "url('../public/images/hero_background.svg)",
      },
      boxShadow : {
        '3xl' : '0px 0px 13px 1px rgba(0,0,0,0.2)'
      },

      keyframes : {
        "twinkkle" : {
          "0%" : {
            opacity : "0",
            fill : "#e9e9e9"
          },
          "100%" : {
            opacity : "1",
            fil : "#3093c8"
          }
        }
      },
      animation : {
        'twinkkle' : "twinkkle 0.3s ease-in-out repeat"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },
  },
  plugins: [],
};
