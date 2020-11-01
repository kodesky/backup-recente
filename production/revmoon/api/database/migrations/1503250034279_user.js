'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up() {
    this.create('users', table => {
      table.increments()
      table.string('name', 255).notNullable()

      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()

      table.date('birth_date').notNullable()

      table.string('address', 255).notNullable()
      table.string('postal_code', 30).notNullable()

      table.string('affiliate_code', 26).notNullable()
      table.string('reference', 26).notNullable()

      table.decimal('wallet', 10, 2).defaultTo(0)

      table
        .enu('type', ['GUEST', 'VIP', 'PREMIUM', 'PLATINA', 'ADMIN'])
        .defaultTo('GUEST')

      table
        .enu('status', ['PENDING', 'CONFIRMED', 'BANNED'])
        .defaultTo('PENDING')

      table.timestamps()
    })
  }

  down() {
    this.drop('users')
  }
}

module.exports = UserSchema
