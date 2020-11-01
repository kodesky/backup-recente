'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ArtFile extends Model {
  static get visible() {
    return ['url']
  }

  art() {
    return this.belongsTo('App/Models/Art')
  }
}

module.exports = ArtFile
