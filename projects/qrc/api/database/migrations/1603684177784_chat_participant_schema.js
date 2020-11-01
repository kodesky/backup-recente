'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChatParticipantSchema extends Schema {
  up() {
    this.create('chat_participants', (table) => {
      table.increments()

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

      table.boolean('admin').defaultTo(false)
      table.boolean('accept').defaultTo(false)

      table.timestamps()
    })
  }

  down() {
    this.drop('chat_participants')
  }
}

module.exports = ChatParticipantSchema
