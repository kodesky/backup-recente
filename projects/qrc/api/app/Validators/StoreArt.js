'use strict'

class StoreArt {
  get rules() {
    return {
      title: 'required',
      description: 'required',
      latitude: 'required',
      longitude: 'required',
    }
  }

  get messages() {
    return {
      'title.required': 'You must provide a title.',
      'description.required': 'You must provide a description.',
      'latitude.required': 'You must provide a latitude.',
      'longitude.required': 'You must provide a longitude',
    }
  }
}

module.exports = StoreArt
