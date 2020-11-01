'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChatMessageSchema extends Schema {
  up() {
    this.create('chat_messages', (table) => {
      table.increments()

      table
        .uuid('chat_participant_id')
        .unsigned()
        .references('id')
        .inTable('chat_participants')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .uuid('chat_id')
        .unsigned()
        .references('id')
        .inTable('chats')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .uuid('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.text('body').notNullable()

      table
        .enu('type', ['TEXT', 'IMAGE', 'AUDIO', 'LOCATION'])
        .defaultTo('TEXT')
      table.enu('status', ['PENDING', 'VIEWED']).defaultTo('PENDING')

      table.timestamps()
    })
  }

  down() {
    this.drop('chat_messages')
  }
}

module.exports = ChatMessageSchema
