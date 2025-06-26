import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./public/index.html",
    "./app.vue",
    "./error.vue",
  ],
  safelist: [
    'flex', 'flex-wrap', 'justify-center', 'items-center',
    'gap-4', 'w-full', 'mb-5', 'max-w-xl', 'mx-auto',
    'section-padding', 'container-padding', 'card'
  ],
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary-button-light-text': "#FFF",
        'secondary-button-light-text': '#202124',
        'link-light-color': '#1A73E8',
        'link-light-color-hover': '#174EA6',
        'primary-button-dark-text': "#121212",
        'secondary-button-dark-text': '#E8EAED',
        'link-dark-color': '#8AB4F8',
        'link-dark-color-hover': '#4F83CC',
      },
      backgroundColor: {
        'primary-button-light': '#1A73E8',
        'primary-button-light-hover': '#00358A',
        'secondary-button-light': '#F1F3F4',
        'secondary-button-light-hover': '#9DB8C8',
        'page-background-dark': '#121212',
        'primary-button-dark': '#4285F4',
        'primary-button-dark-hover': '#86ACEA',
        'secondary-button-dark': '#303134',
        'secondary-button-dark-hover': '#464B5D',
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};