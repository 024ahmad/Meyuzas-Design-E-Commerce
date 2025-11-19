/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f9fafb',
          100: '#f3f4f6',
          500: '#111827', // dark text (adjust per figma)
          accent: '#f97316' // example accent, change to match figma
        }
      },
      boxShadow: {
        'card-soft': '0 2px 12px rgba(2,6,23,0.08)'
      }
    }
  },
  plugins: [],
}
