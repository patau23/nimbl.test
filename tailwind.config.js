/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fullblack: '#18191C',
        semiblack: '#1B1B1B',
        fullgrey: '#2A2A2A',
        white: '#ffffff',
        purple: '#733BEB'
      },
    },
  },
  plugins: [
    ({ matchComponents, theme }) => {
      matchComponents(
        {
          "truncate": (value) => ({
            display: "-webkit-box !important",
            "-webkit-box-orient": "vertical",
            "-webkit-line-clamp": value, /* Number of lines to show */
            overflow: "hidden",
          })
        },
        {
          values: theme("truncate"),
        }
      );
    }
  ],
  purge: ['./src/**/*.{js,ts,jsx,tsx}', './index.html'], // Убедись, что purge настроен
}
