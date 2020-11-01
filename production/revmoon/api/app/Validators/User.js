'use strict'

class User {
  get rules() {
    return {
      name: 'required',
      username: 'required|unique:users,username',
      email: 'required|email|unique:users,email',
      password: 'required',
      birth_date: 'required',
      address: 'required',
      postal_code: 'required'
    }
  }

  get messages() {
    return {
      'name.required': 'You must provide your name',
      'username.required': 'You must provide a username.',
      'username.unique': 'This username is already registered.',
      'email.required': 'You must provide a email address.',
      'email.email': 'You must provide a valid email address.',
      'email.unique': 'This email is already registered.',
      'password.required': 'You must provide a password',
      'birth_date.required': 'You must provide a birth date',
      'address.required': 'You must provide a address',
      'postal_code.required': 'You must provide a postal code'
    }
  }
}

module.exports = User
