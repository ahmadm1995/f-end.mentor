/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', 'sans-serif'],
      },
      fontWeight: {
        light: 200,
        normal: 400,
        // Add other weights if needed
      },
      colors: {
        customYellow: '#f3d14e',
      },
    },
  },
  plugins: [],
};