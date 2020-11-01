'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArtSchema extends Schema {
  up() {
    this.create('arts', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))

      table
        .uuid('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.string('title').notNullable()
      table.text('description').notNullable()

      table.decimal('latitude', 9, 6)
      table.decimal('longitude', 9, 6)

      table.timestamps()
    })
  }

  down() {
    this.drop('arts')
  }
}

module.exports = ArtSchema
