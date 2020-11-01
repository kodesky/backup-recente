'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FolderArtSchema extends Schema {
  up() {
    this.create('folder_arts', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))

      table
        .uuid('folder_id')
        .unsigned()
        .references('id')
        .inTable('folders')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .uuid('art_id')
        .unsigned()
        .references('id')
        .inTable('arts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.timestamps()
    })
  }

  down() {
    this.drop('folder_arts')
  }
}

module.exports = FolderArtSchema
