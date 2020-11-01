'use strict'

// const Chat = use('App/Models/Chat')
const ChatParticipant = use('App/Models/ChatParticipant')

class ChatController {
  async index({ auth, params: { page } }) {
    const user = await auth.getUser()

    const chats = await ChatParticipant.query()
      .where({
        user_id: user.id,
        accept: true,
      })
      .with('chat')
      .with('messages')
      .leftJoin(
        'chat_messages as m',
        'chat_participants.id',
        'm.chat_participant_id'
      )
      .orderBy('m.id', 'DESC')
      .paginate(page || 1, 10)

    return chats
  }

  async requests({ auth, params: { page }, response, view }) {
    const user = await auth.getUser()

    const chats = await ChatParticipant.query()
      .where({
        user_id: user.id,
        accept: false,
      })
      .with('chat')
      .with('messages')
      .leftJoin(
        'chat_messages as m',
        'chat_participants.id',
        'm.chat_participant_id'
      )
      .orderBy('m.id', 'DESC')
      .paginate(page || 1, 10)

    return chats
  }

  async store({ request, response }) {}

  async storeGroup({ params, request, response }) {}

  async show({ params, request, response }) {}

  async accept({ params, request, response }) {}

  async update({ params, request, response }) {}

  async destroy({ params, request, response }) {}
}

module.exports = ChatController
