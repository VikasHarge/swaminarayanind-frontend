const plugin = require("tailwindcss/plugin");

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
          1: "#0751bf ",
          2: "#6366f1 ",
        },
        secondary: {
          DEFAULT: "#fe5454",
          1: "#fe5454",
          2: "#FF2121",
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
      boxShadow: {
        "3xl": "0px 0px 13px 1px rgba(0,0,0,0.2)",
      },

      keyframes: {
        twinkkle: {
          "0%": {
            opacity: "0",
            fill: "#e9e9e9",
          },
          "100%": {
            opacity: "1",
            fil: "#3093c8",
          },
        },
        overlayShow: {
          from: { opacity: 0,  },
          to: { opacity: 1,  },
        },
        contentShow: {
          from: { opacity: 0, transform: "translate(-50%, -100%) scale(0.96)" },
          to: { opacity: 1, transform: "translate(-50%, -50%) scale(1)" },
        },
      },
      animation: {
        twinkkle: "twinkkle 0.3s ease-in-out repeat",
        overlayShow: "overlayShow  300ms ease-in-out",
        contentShow: "contentShow  300ms ease-in-out",
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".horizontal-tb": {
          writingMode: "horizontal-tb",
        },
        ".vertical-rl": {
          writingMode: "vertical-rl",
        },
        ".vertical-lr": {
          writingMode: "vertical-lr",
        },
      };
      addUtilities(newUtilities);
    }),
    require("@tailwindcss/typography"),
  ],
};
