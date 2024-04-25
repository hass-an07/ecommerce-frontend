/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
          xs: "475px",
        //   ...defaultTheme.screens,
        },
      fontFamily: {
        Montserrat: ["Montserrat", " ital"],
        Poppins: ["Poppins", " sans-serif"],
      },
    },
  },
  plugins: [],
};
