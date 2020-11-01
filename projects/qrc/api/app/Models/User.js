'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  static get hidden() {
    return ['created_at', 'updated_at', 'active', 'verified', 'password']
  }

  tokens() {
    return this.hasMany('App/Models/Token')
  }

  arts() {
    return this.hasMany('App/Models/Art')
  }

  likes() {
    return this.hasMany('App/Models/ArtLike')
  }

  favorites() {
    return this.hasMany('App/Models/ArtFavorite')
  }

  folders() {
    return this.hasMany('App/Models/Folder')
  }

  notifications() {
    return this.hasMany('App/Models/Notification')
  }

  codes() {
    return this.hasMany('App/Models/SysCode')
  }

  followers() {
    return this.belongsToMany(
      'App/Models/User',
      'user_id',
      'follower_id'
    ).pivotTable('followers')
  }

  following() {
    return this.belongsToMany(
      'App/Models/User',
      'follower_id',
      'user_id'
    ).pivotTable('followers')
  }

  chats() {
    return this.belongsToMany('App/Models/User').pivotTable('chat_participants')
  }
}

module.exports = User
