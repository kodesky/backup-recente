'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ChatParticipant extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  chat() {
    return this.belongsTo('App/Models/Chat')
  }

  messages() {
    return this.belongsTo('App/Models/ChatMessage')
  }
}

module.exports = ChatParticipant
