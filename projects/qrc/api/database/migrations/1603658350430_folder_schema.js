'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FolderSchema extends Schema {
  up() {
    this.create('folders', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))

      table
        .uuid('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.string('title').notNullable()
      table.boolean('public').defaultTo(false)

      table.timestamps()
    })
  }

  down() {
    this.drop('folders')
  }
}

module.exports = FolderSchema
