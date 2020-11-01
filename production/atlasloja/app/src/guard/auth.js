import * as SecureLS from 'secure-ls'

const ls = new SecureLS({
  encodingType: 'aes',
  encryptionSecret: '90c14285-ab2d-4625-adfb-bb30f6e79dc8'
})

const SESSION_NAME = 'AL@Auth'

export function setData(data) {
  return ls.set(SESSION_NAME, data)
}

export function getData() {
  return ls.get(SESSION_NAME)
}

export function getToken() {
  var data = getData()

  return data.token
}

export function getPermissions() {
  var data = getData()

  return data.group[0].permissions
}

export function clear() {
  return ls.clear()
}
