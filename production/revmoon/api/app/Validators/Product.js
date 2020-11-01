'use strict'

class Product {
  get rules() {
    return {
      description: 'required|string|max:255',
      quantity: 'required|integer',
      price: 'required|decimal',
      image:
        'required|file|file_ext:png,gif,jpg,jpeg,tiff,bmp|file_size:2mb|file_types:image'
    }
  }
}

module.exports = Product
