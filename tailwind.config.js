const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        header: ['"Josefin Sans"', "Segoe UI", "Roboto", "Oxygen"],
        headerdua: ['"Protest Strike"', "Segoe UI", "Roboto", "Oxygen"],
        headertiga: ["Anton", "Segoe UI", "Roboto", "Oxygen"],
      },
    },
  },
  plugins: [
    // ...
    flowbite.plugin(),
  ],
};
