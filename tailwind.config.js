/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D97757',
        secondary: '#7A9B76',
        accent: '#C86240',
        background: '#FAF8F5',
        surface: '#F0EBE3',
        text: '#2D2520',
        'text-muted': '#6B5D57',
        border: '#E5DDD5',
      },
      fontFamily: {
        sans: ['Source Sans 3', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Nunito', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        'lg': '0 10px 25px -3px rgba(217, 119, 87, 0.05), 0 4px 6px -2px rgba(217, 119, 87, 0.03)',
        'xl': '0 20px 35px -5px rgba(217, 119, 87, 0.08), 0 8px 10px -6px rgba(217, 119, 87, 0.05)',
        '2xl': '0 25px 50px -12px rgba(217, 119, 87, 0.12)',
      },
    },
  },
  plugins: [],
}
