/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    'index.html'
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  safelist: [
    'bg-green-700',
    'bg-indigo-700',
    'bg-purple-700',
    'bg-red-700',
    'bg-orange-700',
    'bg-cyan-700'
  ],
  theme: {
    extend: {
      colors: {
        dark: "#111111",
        light: "#FFFFFF",
        blue: "#33d2ff",
        gray: "#C4C4C4",
        "dark-gray": "#1A1A1A",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
