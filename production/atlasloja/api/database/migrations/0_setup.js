'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SetupSchema extends Schema {
  async up() {
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "pgcrypto" schema public')
    await this.db.raw(
      'CREATE EXTENSION IF NOT EXISTS "uuid-ossp" schema public'
    )
    await this.db.raw('CREATE EXTENSION IF NOT EXISTS "postgis" schema public')
  }

  down() {
    this.table('setups', (table) => {})
  }
}

module.exports = SetupSchema
