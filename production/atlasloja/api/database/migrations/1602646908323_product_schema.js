'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up() {
    this.create('products', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))

      table.uuid('store_id').unsigned().references('id').inTable('stores')
      table
        .uuid('category_id')
        .unsigned()
        .references('id')
        .inTable('categories')

      table
        .uuid('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .nullable()

      table.string('title', 255).notNullable()
      table.decimal('price', 10, 2).notNullable()
      table.decimal('promotional_price', 10, 2).nullable()
      table.text('description').nullable()

      table.boolean('activate_only_online').defaultTo(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('products')
  }
}

module.exports = ProductSchema
