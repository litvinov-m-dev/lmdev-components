/** @type {import('tailwindcss').Config} */

const withOpacity = (v) => ({ opacityValue }) => opacityValue ? `rgba(var(${v}), ${opacityValue})` : `rgb(var(${v}))`;

module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    colors: {
      bg: withOpacity('--color-bg'),
      primary: withOpacity('--color-primary'),
    },
  },
  plugins: [],
}
