/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "strong-purple": "hsl(270, 80%, 50%)",
        "very-dark-purple": "hsl(265, 100%, 15%)",
        "dark-grayish-purple": "hsl(268, 14%, 43%)",
        "grayish-purple": "hsl(265, 14%, 56%)",
        "light-grayish-purple": "hsl(265, 41%, 84%)",
        "very-light-grayish-purple": "hsl(270, 41%, 97%)",
      },
    },
  },
  plugins: [],
};
