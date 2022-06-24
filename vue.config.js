const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    proxy: {
      '^/api': {
        target: 'https://home-ser-be.herokuapp.com',
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {'^/api': '/'},
      }
    }
  }

  // publicPath: process.env.NODE_ENV === 'production'
  // ? '/production-sub-path/'
  // : '/'

})
