import prose from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#2B3769',
        'secondary-blue': '#1AB6E9',
        'text-light': '#E0E0E0',
        'accent': '#7E7E7E',
        'success': '#3BB77E ',
        'accent-gray': '#828282',
        'red': '#FF263B'
      },
      fontFamily: {
        cairo: ['Cairo']
      }
    },
    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    plugins: [prose],
  },
};
