'use strict'

class RecoverUser {
  get rules() {
    return {
      email: 'required',
    }
  }

  get messages() {
    return {
      'email.required': 'You must provide a email address.',
    }
  }
}

module.exports = RecoverUser
