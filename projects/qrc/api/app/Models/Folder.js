'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Folder extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  arts() {
    return this.hasMany('App/Models/FolderArt')
  }
}

module.exports = Folder
