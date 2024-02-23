export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'L\'association informatique de l\'EFREI - One Panthéon',
    htmlAttrs: {
      lang: 'fr'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TODO' },
      { name: 'format-detection', content: 'telephone=no' },

      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@one_pantheon' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://onepantheon.fr'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'L\'association informatique de l\'EFREI - One Panthéon'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: 'TODO'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: '/assets/websiteCard.png'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/
      { hid: 'og:site_name', property: 'og:site_name', content: 'onepantheon.fr' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://onepantheon.fr'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'L\'association informatique de l\'EFREI - One Panthéon'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'TODO'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/assets/websiteCard.jpg'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Bannière One Panthéon - L\'association informatique de l\'EFREI. Discussions - Aide aux projets - Événements'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&family=Space+Mono:wght@700&family=Material+Icons&display=swap' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'materialize-css/dist/css/materialize.min.css',
    '@assets/css/global.scss'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  plugins: [{ src: '~/plugins/materialize.js', mode: 'client' }],

  pageTransition: "scale"
}
