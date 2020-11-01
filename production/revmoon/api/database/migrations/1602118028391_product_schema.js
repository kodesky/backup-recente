'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments()

      table.string('description', 255).notNullable()
      table.integer('quantity', 10).notNullable()
      table.decimal('price', 10, 2).defaultTo(1.0)

      table
        .enu('status', ['AVAILABLE', 'SORTING', 'CLOSED'])
        .defaultTo('AVAILABLE')

      table
        .integer('user_id')
        .unsigned()
        .nullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductSchema
