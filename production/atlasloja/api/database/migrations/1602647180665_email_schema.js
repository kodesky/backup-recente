'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmailSchema extends Schema {
  up() {
    this.create('emails', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))

      table
        .uuid('store_id')
        .unsigned()
        .references('id')
        .inTable('stores')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.timestamps()
    })
  }

  down() {
    this.drop('emails')
  }
}

module.exports = EmailSchema
