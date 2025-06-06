/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    // disable modern color syntax
    modernColorFormat: false,

  },
  theme: {
    extend: {},
    darkMode: 'class',
  },
  plugins: [],
} 