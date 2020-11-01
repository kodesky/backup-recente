'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class FolderArt extends Model {
  static get hidden() {
    return ['created_at', 'updated_at', 'folder_id', 'user_id', 'art_id']
  }

  folder() {
    return this.belongsTo('App/Models/Folder')
  }

  art() {
    return this.belongsTo('App/Models/Art')
  }
}

module.exports = FolderArt
