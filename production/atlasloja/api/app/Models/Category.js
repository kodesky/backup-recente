'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  store() {
    return this.belongsTo('App/Models/Store')
  }

  childrens() {
    return this.hasMany('App/Models/Category', 'id', 'children_id')
  }
}

module.exports = Category
