/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Make sure this line is included
    "./src/component/ui/**/*.{js,jsx,ts,tsx}" // Add this line for your shadcn components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
