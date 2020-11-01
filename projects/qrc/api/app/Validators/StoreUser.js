'use strict'

class StoreUser {
  get rules() {
    return {
      name: 'required',
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|min:6|max:30',
    }
  }

  get messages() {
    return {
      'name.required': 'You must provide your name.',
      'username.required': 'You must provide a username address.',
      'username.unique': 'This username is already registered.',
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password',
      'password.min': 'Your password must be at least 6 characters.',
      'password.max': 'Your password must be at most 30 characters.',
    }
  }
}

module.exports = StoreUser
