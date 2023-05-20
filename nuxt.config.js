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
  ],

  plugins: [
    { src: '~/plugins/apexcharts.js', ssr: false }
  ],

  axios: {
    baseURL: 'http://localhost:9000/api/',
  },

  components: true,

  buildModules: [
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    ["vue-toastification/nuxt", {
      timeout: 1000,
      draggable: false
    }]
  ],

  build: {
    vendor : [
      'vue-apexchart'
   ]
  }
}
