'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductConfigSchema extends Schema {
  up() {
    this.create('product_configs', (table) => {
      table.increments()

      table
        .uuid('product_id')
        .unsigned()
        .references('id')
        .inTable('products')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.string('data').notNullable()
      table
        .enu('type', [
          'COMMAND',
          'BOOK_LINE',
          'PRIVATE_MESSAGE',
          'BROADCAST',
          'SERVER',
        ])
        .notNullable()

      table.timestamps()
    })
  }

  down() {
    this.drop('product_configs')
  }
}

module.exports = ProductConfigSchema
