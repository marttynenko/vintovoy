export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Винтовые воздушные компрессоры купить в Беларуси с доставкой - цена, отзывы, характеристики',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Винтовые компрессоры популярных брендов Remeza, Атлас, Dali, Aco, Comaro, Ceccato и др. с быстрой доставкой в любой регион Беларуси. Бесплатный первый запуск. Обслуживание в гарантийный и постгарантийный период. Тел. +375336219632' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/fonts/fonts.scss',
    'assets/styles/root.scss',
    'assets/styles/grid.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module'
    // '@nuxt/image',
    // '@aceforth/nuxt-optimized-images',
  ],

  // optimizedImages: {
  //   inlineImageLimit: 1000,
  //   optimizeImages: true,
  //   defaultImageLoader: 'img-loader',
  //   webp: {
  //     preset: 'default',
  //     quality: 75,
  //   },
  // },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxt/image',
    ['nuxt-gmaps', {
      key: 'AIzaSyDw-OnFKGZhozQ5RblsdK7ogE5PLJtS5pI',
      //you can use libraries: ['places']
    }]
  ],

  styleResources: {
    scss: ['assets/styles/variables.scss']
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  image: {
    screens: {
      us: 0,
      xs: 576,
      sm: 768,
      md: 992,
      xl: 1245
    },

    quality: 80,

    presets: {
      default: {
        modifiers: {
          format: 'webp',
          quality: 80
        }
      },

      icon: {
        modifiers: {
          quality: 90,
        }
      }
    }
  }
}
