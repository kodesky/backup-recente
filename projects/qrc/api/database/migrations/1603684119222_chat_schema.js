'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChatSchema extends Schema {
  up() {
    this.create('chats', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))

      table.string('title', 255).notNullable()
      table.enu('type', ['INDIVIDUAL', 'GROUP']).defaultTo('INDIVIDUAL')

      table.timestamps()
    })
  }

  down() {
    this.drop('chats')
  }
}

module.exports = ChatSchema
