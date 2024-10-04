/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Josefin Sans"', "Segoe UI", "Roboto", "Oxygen"],
      },
    },
  },
  plugins: [],
};
