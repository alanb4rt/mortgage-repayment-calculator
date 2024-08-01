/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(61, 70%, 52%)',
        error: 'hsl(4, 69%, 50%)',
        mySlate: {
          100: 'hsl(203, 87%, 94%)',
          300: 'hsl(203, 41%, 72%)',
          500: 'hsl(200, 26%, 54%)',
          700: 'hsl(200, 24%, 40%)',
          900: 'hsl(201, 56%, 16%)',
        },
      },
    },
  },
  plugins: [],
}

