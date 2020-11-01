'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SysCodeSchema extends Schema {
  async up() {
    this.create('sys_codes', (table) => {
      table.increments()

      table
        .uuid('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.string('token').notNullable()
      table.enu('type', ['ACTIVATION', 'RECOVER']).notNullable()
      table.datetime('expires_in').notNullable()

      table.boolean('used').defaultTo(false)

      table.timestamps()
    })
  }

  down() {
    this.drop('sys_codes')
  }
}

module.exports = SysCodeSchema
