'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
  winner() {
    return this.belongsTo('App/Models/User')
  }

  tickets() {
    return this.belongsTo('App/Models/Ticket')
  }
}

module.exports = Product
