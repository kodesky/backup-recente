'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.uuid('id').unique().defaultTo(this.db.raw('gen_random_uuid()'))

      table.string('name', 255).notNullable()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()

      table.string('profile_url').nullable()
      table.string('bio', 255).nullable()
      table.string('profession', 255).nullable()
      table.date('birth_date').nullable()

      table.enu('type', ['COMMON', 'ARTIST']).defaultTo('COMMON')

      table.boolean('active').defaultTo(false)
      table.boolean('verified').defaultTo(false)

      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
