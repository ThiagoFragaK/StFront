export default {
  ssr: false,

  head: {
    title: "TK's Calculator",
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  server: {
    port: 4500,
  },

  css: [
    '~/assets/css/theme.css'
  ],

  plugins: [
    { src: '~/plugins/apexcharts.js', ssr: false }
  ],

  axios: {
    baseURL: 'http://localhost:9000/api/',
  },

  components: true,

  buildModules: [
    '@nuxtjs/google-fonts',
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    'nuxt-material-design-icons-iconfont',
    ["vue-toastification/nuxt", {
      timeout: 6000,
      draggable: false
    }]
  ],

  build: {
    vendor : [
      'vue-apexchart'
   ]
  },

  toast: {
    position: 'top-center',
      register: [
        {
          name: 'success',
          options: {
            type: 'success',
            timeout: 5000,            
          }
        },
        {
          name: 'error',
          options: {
            type: 'error',
            timeout: 5000,
          }
        }
      ]
  }
}
