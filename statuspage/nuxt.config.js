const webpack = require('webpack')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {},
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#3B8070'
  },
  router: {
    middleware: ['ssr-cookie']
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          enforce: 'pre',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'jquery',
      '~/node_modules/bootstrap/dist/js/bootstrap.js'
    ],
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery'
      })
    ]
  },
  modules: [
    ['qonfucius-nuxt-fontawesome'],
    ['@nuxtjs/google-analytics']
  ],
  fontAwesome: {
    packs: [
      {
        package: '@fortawesome/fontawesome-free-brands',
        icons: ['faGithub', 'faBloggerB']
      },
      {
        package: '@fortawesome/fontawesome-free-solid',
        icons: [
          'faHome',
          'faSyncAlt',
          'faEnvelope',
          'faCheckCircle',
          'faTimesCircle'
        ]
      }
    ]
  },
  'google-analytics': {
    id: 'UA-69668170-5'
  }
}
