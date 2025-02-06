/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      textColor: {
        custom: {
          blue: "#233551",
          rgba5: "rgba(0,0,0,0.5)",
          "white-rgba6": "rgba(255,255,255,0.6)",
        },
      },
      colors: {
        custom: {
          pink: "#FFE3E4",
          blue: "#233551",
          cyan: "#7EC0B7",
        },
      },
      container: {
        screens: {
          "3xs": "350px",
          "2xs": "400px",
          xs: "500px",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
          "3xl": "1920px",
        },
      },
      screens: {
        "3xs": "350px",
        "2xs": "400px",
        xs: "500px",
        "3xl": "1920px",
      },
      fontSize: {
        "2xs": "10px",
      },
      lineHeight: {
        "2xs": "1rem",
      },
    },
  },
  plugins: [],
};
