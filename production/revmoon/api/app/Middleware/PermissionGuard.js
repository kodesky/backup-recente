'use strict'

class PermissionGuard {
  async handle({ response, auth }, next, props) {
    var user = await auth.getUser()

    if (user.type !== props[0]) {
      response.status(401).json([{ message: 'Not authorized' }])
    }

    await next()
  }
}

module.exports = PermissionGuard
