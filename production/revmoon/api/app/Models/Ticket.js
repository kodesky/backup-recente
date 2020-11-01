'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ticket extends Model {
  user() {
    this.belongsTo('App/Models/User')
  }

  product() {
    this.belongsTo('App/Models/Product')
  }
}

module.exports = Ticket
