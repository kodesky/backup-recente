'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class NotificationSchema extends Schema {
  up() {
    this.create('notifications', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))

      table
        .uuid('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.string('title').notNullable()
      table.string('description').notNullable()
      table.string('type').notNullable()

      table.string('extra').notNullable()

      table.boolean('viewed').defaultTo(false)

      table.timestamps()
    })
  }

  down() {
    this.drop('notifications')
  }
}

module.exports = NotificationSchema
