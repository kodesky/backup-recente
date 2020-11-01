'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class InvoiceSchema extends Schema {
  up() {
    this.create('invoices', table => {
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

      table.integer('quantity', 2).notNullable()
      table.decimal('price', 10, 2).notNullable()

      table.string('cupom', 30).nullable()
      table.decimal('discount', 10, 2).nullable()

      table.string('gateway', 20).notNullable()
      table
        .enu('status', ['PENDING', 'REFUSED', 'REFUNDED', 'PAID'])
        .defaultTo('PENDING')

      table.timestamps()
    })
  }

  down() {
    this.drop('invoices')
  }
}

module.exports = InvoiceSchema
