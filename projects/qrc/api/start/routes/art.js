'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.group(() => {
  Route.get('browser/:page?', 'ArtController.browser').middleware(['auth:jwt'])
  Route.get(':id', 'ArtController.show')

  Route.put(':id/like', 'ArtController.like').middleware(['auth:jwt'])
  Route.put(':id/favorite', 'ArtController.favorite').middleware(['auth:jwt'])

  Route.post('', 'ArtController.store')
    .validator('StoreArt')
    .middleware(['auth:jwt'])
  Route.put(':id/image', 'ArtController.storeImage').middleware(['auth:jwt'])

  Route.patch(':id', 'ArtController.update')
    .validator('StoreArt')
    .middleware(['auth:jwt'])
  Route.delete(':id', 'ArtController.destroy').middleware(['auth:jwt'])
}).prefix('art')
