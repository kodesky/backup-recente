'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketSchema extends Schema {
  up() {
    this.create('tickets', table => {
      table.increments()

      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table
        .integer('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.integer('number', 10).notNullable()

      table.enu('status', ['PENDING', 'WINNER', 'LOSER']).defaultTo('PENDING')

      table.timestamps()
    })
  }

  down() {
    this.drop('tickets')
  }
}

module.exports = TicketSchema
