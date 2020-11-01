'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeamSchema extends Schema {
  up() {
    this.create('teams', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))
      table
        .uuid('store_id')
        .unsigned()
        .references('id')
        .inTable('stores')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.string('title').notNullable()
      table.json('permissions').notNullable()

      table.timestamps()
    })
  }

  down() {
    this.drop('teams')
  }
}

module.exports = TeamSchema
