'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ModuleSchema extends Schema {
  up() {
    this.create('modules', (table) => {
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
    this.drop('modules')
  }
}

module.exports = ModuleSchema
