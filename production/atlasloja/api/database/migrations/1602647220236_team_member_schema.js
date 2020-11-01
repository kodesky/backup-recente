'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeamMemberSchema extends Schema {
  up() {
    this.create('team_members', (table) => {
      table.increments()

      table
        .uuid('team_id')
        .unsigned()
        .references('id')
        .inTable('teams')
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
    this.drop('team_members')
  }
}

module.exports = TeamMemberSchema
