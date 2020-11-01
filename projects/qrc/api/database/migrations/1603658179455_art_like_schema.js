'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArtLikeSchema extends Schema {
  up() {
    this.create('art_likes', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))

      table
        .uuid('art_id')
        .unsigned()
        .references('id')
        .inTable('arts')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table
        .uuid('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.timestamps()
    })
  }

  down() {
    this.drop('art_likes')
  }
}

module.exports = ArtLikeSchema
