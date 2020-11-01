'use strict'

class RecoverUserConfirm {
  get rules() {
    return {
      password: 'required',
      repeat_password: 'required',
    }
  }

  get messages() {
    return {
      'password.required': 'You must provide a password.',
      'repeat_password.required': 'You must repeat the password.',
    }
  }
}

module.exports = RecoverUserConfirm
