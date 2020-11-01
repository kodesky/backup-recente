'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Store extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }

  categories() {
    return this.hasMany('App/Models/Category')
  }

  products() {
    return this.hasMany('App/Models/Product')
  }

  discounts() {
    return this.hasMany('App/Models/Discount')
  }

  teams() {
    return this.hasMany('App/Models/Team')
  }
}

module.exports = Store
