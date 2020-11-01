'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CodeSchema extends Schema {
  up() {
    this.create('codes', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))

      table
        .uuid('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.enu('type', ['VERIFICATION', 'FORGOT_PASSWORD'])
      table.boolean('used').defaultTo(false)
      table.datetime('expires_in').nullable()

      table.timestamps()
    })
  }

  down() {
    this.drop('codes')
  }
}

module.exports = CodeSchema
