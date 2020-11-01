'use strict'

class StoreFolder {
  get rules() {
    return {
      title: 'required',
    }
  }

  get messages() {
    return {
      'title.required': 'You must provide a title.',
    }
  }
}

module.exports = StoreFolder
