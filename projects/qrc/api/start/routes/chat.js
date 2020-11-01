'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('', 'ChatController.index').middleware(['auth:jwt'])
  Route.get('/requests', 'ChatController.requests').middleware(['auth:jwt'])

  Route.get(':id', 'ChatController.show').middleware(['auth:jwt'])

  Route.post(':id/individual', 'ChatController.store').middleware(['auth:jwt'])
  Route.post(':id/group', 'ChatController.storeGroup').middleware(['auth:jwt'])

  Route.patch(':id/accept', 'ChatController.accept').middleware(['auth:jwt'])

  Route.delete(':id/message', 'ChatController.destroyMessage').middleware([
    'auth:jwt',
  ])
}).prefix('chat')
