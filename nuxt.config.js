export default {
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  serverMiddleware: [{ path: '/api', handler: '~/api/index.js' }],
  auth: {
    strategies: {
      auth0: {
        domain: 'dtinth.us.auth0.com',
        client_id: 'qPf7KVP9Vn2s3x0vYCuMOM7rEOJIZ6PG',
        audience: 'notes-backend'
      }
    }
  }
}

function withoutNullishValues(x) {
  return Object.fromEntries(Object.entries(x).filter(([k, v]) => v != null))
}
