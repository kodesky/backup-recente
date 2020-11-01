'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArtFileSchema extends Schema {
  up() {
    this.create('art_files', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))

      table
        .uuid('art_id')
        .unsigned()
        .references('id')
        .inTable('arts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.string('name', 255).notNullable()
      table.string('url', 255).notNullable()
      table.string('content_type', 255).notNullable()

      table.timestamps()
    })
  }

  down() {
    this.drop('art_files')
  }
}

module.exports = ArtFileSchema
