'use strict'
var normalizedPath = require('path').join(__dirname, 'routes')

require('fs')
  .readdirSync(normalizedPath)
  .forEach(function (file) {
      require('./routes/' + file)
  })
