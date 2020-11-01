'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

/**
 * User route group
 */

Route.group(() => {
  Route.post('', 'UserController.store').validator('User')
  Route.post('session', 'UserController.session')

  Route.get('', 'UserController.me').middleware(['auth:jwt'])
  Route.get('list', 'UserController.list').middleware(['auth:jwt', 'is:ADMIN'])
  Route.get('affiliates', 'UserController.affiliates').middleware(['auth:jwt'])

  Route.get(':id', 'UserController.showById').middleware([
    'auth:jwt',
    'is:ADMIN'
  ])
}).prefix('v1/user')

/**
 * Product route group
 */

Route.group(() => {
  Route.post('', 'ProductController.store')
    .validator('Product')
    .middleware(['auth:jwt', 'is:ADMIN'])

  Route.get('availables', 'ProductController.availables')

  Route.get('list', 'ProductController.list').middleware([
    'auth:jwt',
    'is:ADMIN'
  ])

  Route.put(':id/promotion', 'ProductController.promotion').middleware([
    'auth:jwt',
    'is:ADMIN'
  ])

  Route.put(':id/draw', 'ProductController.draw').middleware([
    'auth:jwt',
    'is:ADMIN'
  ])

  Route.get(':id', 'ProductController.show').middleware([
    'auth:jwt',
    'is:ADMIN'
  ])

  Route.patch(':id', 'ProductController.update').middleware([
    'auth:jwt',
    'is:ADMIN'
  ])

  Route.delete(':id', 'ProductController.destroy').middleware([
    'auth:jwt',
    'is:ADMIN'
  ])
}).prefix('v1/product')
