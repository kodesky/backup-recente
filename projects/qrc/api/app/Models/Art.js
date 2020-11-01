'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Art extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  files() {
    return this.hasMany('App/Models/ArtFile')
  }

  favorites() {
    return this.hasMany('App/Models/ArtFavorite')
  }

  likes() {
    return this.hasMany('App/Models/ArtLike')
  }
}

module.exports = Art
