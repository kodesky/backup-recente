'use strict'

const Folder = use('App/Models/Folder')
const FolderArt = use('App/Models/FolderArt')
const Art = use('App/Models/Art')

class FolderController {
  async index({ auth }) {
    const user = await auth.getUser()
    await user.load('folders')

    return user.toJSON().folders
  }

  async store({ auth, request }) {
    const user = await auth.getUser()
    const data = request.all()

    await user.folders().create(data)
  }

  async show({ auth, params: { id }, response }) {
    const user = await auth.getUser()

    try {
      const folder = await Folder.findOrFail(id)

      if (user.id !== folder.user_id && !folder.public) {
        return response.status(403).json([{ message: 'Access denied' }])
      }

      const data = await Folder.query()
        .where('id', id)
        .with('user')
        .with('arts', (builder) => {
          builder.with('art', (builder) => {
            builder.with('files')
          })
        })
        .fetch()

      return data
    } catch (err) {
      console.log(err)

      return response.status(404).json([{ message: 'Folder not found' }])
    }
  }

  async addArt({ auth, params: { artId, folderId }, response }) {
    const user = await auth.getUser()

    try {
      const art = await Art.findOrFail(artId)
      const folder = await Folder.findOrFail(folderId).catch(() =>
        response.status(404).json([{ message: 'Folder not found.' }])
      )

      if (folder.user_id !== user.id) {
        return response.status(403).json([{ message: 'Access denied.' }])
      }

      const hasArt = await FolderArt.query()
        .where(function () {
          this.where('folder_id', folderId)
          this.where('art_id', artId)
        })
        .fetch()

      if (hasArt.toJSON().length > 0) {
        return response
          .status(401)
          .json([{ message: 'Art already exists on folder.' }])
      }

      await folder.arts().create({
        art_id: art.id,
      })

      return response.status(200).send()
    } catch {
      return response.status(404).json([{ message: 'Art not found.' }])
    }
  }

  async update({ auth, params: { id }, request, response }) {
    const user = await auth.getUser()

    const folder = await Folder.findOrFail(id).catch(() => {
      return response.status(404).json([{ message: 'Folder not found.' }])
    })

    if (user.id !== folder.user_id) {
      return response.status(403).json({ message: 'Access denied.' })
    }

    const data = request.all()

    folder.merge(data)

    await folder.save()
  }

  async removeArt({ auth, params: { id, artId }, response }) {
    const user = await auth.getUser()

    const folder = await Folder.findOrFail(id).catch(() => {
      return response.status(404).json([{ message: 'Folder not found.' }])
    })

    if (user.id !== folder.user_id) {
      return response.status(403).json({ message: 'Access denied.' })
    }

    const art = await FolderArt.query()
      .where({ folder_id: id, art_id: artId })
      .fetch()

    if (art.toJSON().length === 0) {
      return response
        .status(404)
        .json([{ message: 'Art not found on folder.' }])
    }

    for (let i = 0; i < art.toJSON().length; i++) {
      await FolderArt.query().where({ id: art.toJSON()[i].id }).delete()
    }

    return response.status(200).send()
  }

  async destroy({ auth, params: { id }, response }) {
    const user = await auth.getUser()

    const folder = await Folder.findOrFail(id).catch(() => {
      return response.status(404).json([{ message: 'Folder not found.' }])
    })

    if (user.id !== folder.user_id) {
      return response.status(403).json({ message: 'Access denied.' })
    }

    await folder.delete()
  }
}

module.exports = FolderController
