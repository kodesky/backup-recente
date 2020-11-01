'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('', 'UserController.store').validator('StoreUser')
  Route.post('session', 'UserController.session').validator('SessionUser')

  Route.post('recover', 'UserController.recover').validator('RecoverUser')
  Route.patch('recover/:hash', 'UserController.confirmRecover').validator(
    'RecoverUserConfirm'
  )

  Route.get('me', 'UserController.index').middleware(['auth:jwt'])
  Route.get('followers', 'UserController.followers').middleware(['auth:jwt'])

  Route.get(':id', 'UserController.show')
  Route.get(':id/followers/:page?', 'UserController.followers').middleware([
    'auth:jwt',
  ])
  Route.get(':id/following/:page?', 'UserController.following').middleware([
    'auth:jwt',
  ])
  Route.get(':id/arts/:page?', 'UserController.arts').middleware(['auth:jwt'])

  Route.put(':id/follow', 'UserController.follow').middleware(['auth:jwt'])

  Route.patch('', 'UserController.update').middleware(['auth:jwt'])
  Route.delete('', 'UserController.destroy').middleware(['auth:jwt'])
}).prefix('user')
