const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  ignoreTypes: ['svg'],
  webpack(config, options) {
    return config
  }
})
