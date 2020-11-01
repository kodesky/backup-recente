'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ArtLike extends Model {
  art() {
    return this.belongsTo('App/Models/Art')
  }

  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = ArtLike
