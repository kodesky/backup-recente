'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Chat extends Model {
  participants() {
    return this.hasMany('App/Models/ChatParticipant')
  }

  messages() {
    return this.hasMany('App/Models/ChatMessage')
  }
}

module.exports = Chat
