'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StoreSchema extends Schema {
  up() {
    this.create('stores', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))
      table
        .uuid('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.string('name', 255).notNullable()
      table.string('domain', 255).notNullable()
      table.string('subdomain', 255).notNullable()
      table
        .uuid('file_id')
        .unsigned()
        .references('id')
        .inTable('files')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .nullable()
      table.enu('status', ['PENDING', 'ACTIVE', 'SUSPENDED', 'DELETED'])
      table.timestamps()
    })
  }

  down() {
    this.drop('stores')
  }
}

module.exports = StoreSchema
