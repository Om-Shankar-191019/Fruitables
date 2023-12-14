/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f8fafc",
        blueish: "#e0f2fe",
        "theme-green": "#65a30d",
        "theme-yellow": "#facc15",
        "coral-red": "#FF6452",
        "dark-gray": "#64748b",
        "slate-gray": "#a3a3a3",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
