'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiscountSchema extends Schema {
  up() {
    this.create('discounts', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))
      table
        .uuid('store_id')
        .unsigned()
        .references('id')
        .inTable('stores')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.string('cupom', 255).notNullable()
      table.decimal('amount', 10, 2).notNullable()

      table.enu('type', ['PERCENTAGE', 'PRICE']).defaultTo('PERCENTAGE')
      table.enu('level', ['GLOBAL', 'CATEGORY', 'PRODUCT']).defaultTo('GLOBAL')

      table.json('config').nullable()

      table.timestamps()
    })
  }

  down() {
    this.drop('discounts')
  }
}

module.exports = DiscountSchema
