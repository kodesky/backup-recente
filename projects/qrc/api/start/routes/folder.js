'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.post('', 'FolderController.store')
    .validator('StoreFolder')
    .middleware(['auth:jwt'])

  Route.get('', 'FolderController.index').middleware(['auth:jwt'])
  Route.get(':id', 'FolderController.show').middleware(['auth:jwt'])

  Route.put(':artId/:folderId', 'FolderController.addArt').middleware([
    'auth:jwt',
  ])
  Route.patch(':id', 'FolderController.update')
    .validator('StoreFolder')
    .middleware(['auth:jwt'])

  Route.delete(':id', 'FolderController.destroy').middleware(['auth:jwt'])
  Route.delete(':id/art/:artId', 'FolderController.removeArt').middleware([
    'auth:jwt',
  ])
}).prefix('folder')
