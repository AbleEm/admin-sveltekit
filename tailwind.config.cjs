module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        grey : {
          200:'#FAFAFA',
          300:'#F2F4FA',
          400: '#EBECF2',
          500: '#C2C6D5',
          700: '#5B6179',
          800: '#39405C',
          900: '#2B2F3E',
        },
        blue:{
          100: '#F8F9FB',
          300: '#F0F3FF',
          400: '#B3C5F5',
          600: '#4F68CD',
          700: '#4262DF',
          800: '#3852BC',
        },
        red:{
          100: '#FFFBFC',
          400: '#E77EA4',
        },
      },
    },
  },
  plugins: [],
}
