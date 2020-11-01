'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CommissionSchema extends Schema {
  up() {
    this.create('commissions', table => {
      table.increments()

      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.decimal('amount', 10, 2).notNullable()
      table.enu('type', ['SIGNATURE', 'PURCHASE']).notNullable()

      table.timestamps()
    })
  }

  down() {
    this.drop('commissions')
  }
}

module.exports = CommissionSchema
