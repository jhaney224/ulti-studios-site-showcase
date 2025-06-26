// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  generate: {
    fallback: true, // Generates a fallback HTML for 404s
  },

  modules: ['@nuxt/content', '@nuxt/image', "nuxt-icon"],
  compatibilityDate: "2024-12-18",
});