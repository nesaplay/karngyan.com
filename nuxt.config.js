export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Karn | Friendly Neighborhood Developer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'I blog tech, write a weekend newsletter called Software Shots and toker with side projects every now n then.' },
      { name: 'title', content: 'Gyan Prakash Karn | Friendly Neighborhood Developer'},
      { name: 'author', content: 'Gyan Prakash Karn | mail@karngyan.com'},
      { property: 'og:type', content: 'website'},
      { property: 'og:url', content: 'https://karngyan.com'},
      { property: 'og:title', content: 'Karn | Friendly Neighborhood Developer'},
      { property: 'og:description', content: 'I blog tech, write a weekend newsletter called Software Shots and toker with side projects every now n then.'},
      { property: 'og:image', content: 'https://cdn.karngyan.com/logo_dark.png'},

      { property: 'twitter:card', content: 'https://cdn.karngyan.com/logo_dark.png'},
      { property: 'twitter:url', content: 'https://karngyan.com'},
      { property: 'twitter:title', content: 'Karn | Friendly Neighborhood Developer'},
      { property: 'twitter:description', content: 'I blog tech, write a weekend newsletter called Software Shots and toker with side projects every now n then.'},
      { property: 'twitter:image', content: 'https://cdn.karngyan.com/logo_dark.png'},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@900&family=Poppins:ital,wght@0,400;0,600;1,400;1,700&display=swap'},
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'aos/dist/aos.css',
    'github-calendar/dist/github-calendar-responsive.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vuetyper.js', ssr: false},
    { src: '~/plugins/directives.js', ssr: false},
    { src: '~/plugins/aos.js', ssr: false},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '@/components',
    '@/components/home',
    '@/components/logos',
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'G-3S38B2ZY34'
  },


  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'nuxt-i18n',
    'nuxt-buefy',
  ],

  i18n: {
    lazy: true,
    langDir: 'lang/',
    locales: [
      {code: 'en', name: 'English', file: 'en_US.js'}
    ],
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true,  // recommended
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    liveEdit: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    splitChunks: {
      layout: true
    },
  },

  tailwindcss: {
    jit: true
  },

  loadingIndicator: {
    name: 'chasing-dots',
    color: '#fd2d78',
    background: '#212324'
  },

  loading: {
    color: '#fd2d78',
    height: '2px',
    throttle: 0
  },

  hooks: {
    'content:file:beforeInsert': (document) => {
      if (document.extension === '.md') {
        const { text } = require('reading-time')(document.text)

        document.readingTime = text
      }
    }
  }
}
