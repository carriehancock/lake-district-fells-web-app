/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./client/src/App.js",
    "./client/src/Components/Layout/Header.js",
    "client/src/Components/EntriesPage.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#059669",

          secondary: "#557bb5",

          accent: "#20508c",

          neutral: "#1f2937",

          "base-100": "#581c87",

          info: "#60a5fa",

          success: "#047857",

          warning: "#eab308",

          error: "#b91c1c",
        },
      },
    ],
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
