// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  build: {
    transpile: ['gsap', '@studio-freight/lenis']
  },
  css: ['~/assets/scss/main.scss'],
  googleFonts: {
    families: {
      'Inter': [400, 500, 600],
      'Cormorant Garamond': {
        wght: [300, 400, 500],
        ital: [300, 400]
      }
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true
  }
})