/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: "#F0B82D",
          hover: "#E5A91C",
          light: "#F4C556",
          dark: "#D49E0F",
        },
        title: {
          DEFAULT: "#004077",
          light: "#1a5490",
          dark: "#003366",
        },
      },
    },
  },
  plugins: [],
};
