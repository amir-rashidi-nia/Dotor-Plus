// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta:[ { name: 'viewport', content: 'width=device-width, initial-scale=1' } ],
      htmlAttrs: {
        dir: 'rtl',
        lang: 'fa'
      },
      title: 'Doctor Plus'
    },
  },

  routeRules: {
    '/panel' : {
      redirect: '/panel/myappointment'
    }
  },

  runtimeConfig: {
    public: {
      apiBase: "http://localhost:4040/",
      secureItem: false,
    }
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  build: {
    transpile: ['vue-toastification']
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    'nuxt-swiper',
    'dayjs-nuxt',
    'nuxt-bootstrap-icons'
  ],

  bootstrapIcons: {
    display: 'inline'
  },
  colorMode: {
    classSuffix: ''
  },
  compatibilityDate: '2024-12-04'
})