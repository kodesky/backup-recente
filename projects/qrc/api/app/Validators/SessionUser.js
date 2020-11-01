'use strict'

class SessionUser {
  get rules() {
    return {
      email: 'required',
      password: 'required|min:6|max:30',
    }
  }

  get messages() {
    return {
      'email.required': 'You must provide a email address.',
      'password.required': 'You must provide a password',
      'password.min': 'Your password must be at least 6 characters.',
      'password.max': 'Your password must be at most 30 characters.',
    }
  }
}

module.exports = SessionUser
