module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {},
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    screens: {
      xl: { min: '1200px' },
      lg: { min: '992px' },
      md: { min: '768px' },
      sm: { min: '576px' },
      xs: { min: '480px' },
    },
    minWidth: {
      min: '768px',
    },
  },
  plugins: [],
}
