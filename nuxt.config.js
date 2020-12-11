export default {
  /*
   ** Headers of the page
   */
  head: {
    title: 'notes.dt.in.th',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href:
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADABAMAAACg8nE0AAAAGF' +
          'BMVEUAAADd/3XZ/3LY/XHY/XDX/XDX/HDX/HBGVehjAAAAB3RSTlMAFThdhLvo4ZXzLQAAAr' +
          'dJREFUeAHs18Fu00AQxnHHCeGaA9DrSgi4Wgjo1YhSrgWwfI1L5b3S1t7v9TnshZWIs/buXy' +
          'govwfw1DPzTdwi2urlVdP3Ut83V293RWblu8bqD675ZHI+/rP+4ocBHk+UeG91kPue/udfa9' +
          'Jd4ks8szrCfUxqjyIktOmDovwsllldK9Ldjn2+r8A931cA+p82h1ea6dvM/ddss/KwtprNVT' +
          'MG3GqBMX7Qr7XIbRFpo4VqskG+SVyDvFu0QbFNapVgLI56riRfYyeMzfmFEnXFpNIqkTPUik' +
          'ataqkMDPUCEa+wssrA7bgV8jomAxFZeKJMboArFBiBMxpzVN8omwdsRyc21Y+YHPMXZTQQZy' +
          'hggBQHOiYEE1FYK7OK7ZDUcTvkDeAOeQZI2UTWLpXd4+E7BNyjjQA1t6Rexy2pN4QjQIewkd' +
          'ghbIXYkykIk2CFcMCpDlXcIQrP0YUg92DMgqhZCZ1yKYzBchxkeSvMHstxkOVWmJFdIsnBSy' +
          'QZdomkGrpEwTV6KtAv/78f5wE6dcG5ayU2CEKhMfBBWAtVsTmTajZn0g1fYCvUvrgQ6p68FP' +
          '5WXAr1yJ4iaeALtEKNfAErlDte4FxAsP+ggBXr32/RucDpX9PT/0Xjf/Txzxb8wwv/dDz9r+' +
          'vftdyBAAAAAMIwf+tRDKP66wGkR6geAnuM/UG8Vwm9DOl1Ti+keqXWS8Fea/5idlbLvRzv9X' +
          '4fKPbE8keiP3P9oe5PjX8s/XPvH6z/5N6hgY49fHCjoycdnun4zweYOoLVIbKPwXWQr6OIH6' +
          'bsOGgHWj+S26HijkV/sLuj6R+u73pAFxy+otElk6/JdNHnq0pXtgq6WBDetrLXpcOtTXbx86' +
          'urX779+vAXoL/C/SX0r9H/I4B/ZfDPGP6dxD/E+Jce/5Tk36r8Y5h/bfPPefq9EI9VRTu5xb' +
          'U5AAAAAElFTkSuQmCC'
      }
    ]
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
  buildModules: ['@nuxtjs/composition-api'],
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
