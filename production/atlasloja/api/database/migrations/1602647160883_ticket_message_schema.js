'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketMessageSchema extends Schema {
  up () {
    this.create('ticket_messages', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))
      table.timestamps()
    })
  }

  down () {
    this.drop('ticket_messages')
  }
}

module.exports = TicketMessageSchema
