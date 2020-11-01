const qrcode = require('qrcode')

qrcode.toFile(
  './qrcode.png',
  'https://qrculture.com.br/xstilex',
  {
    type: 'png',
    width: 300
  }
)
