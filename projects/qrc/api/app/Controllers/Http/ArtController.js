'use strict'

const crypto = require('crypto')
const Drive = use('Drive')

const Database = use('Database')
const Art = use('App/Models/Art')
const ArtLike = use('App/Models/ArtLike')
const ArtFavorite = use('App/Models/ArtFavorite')
const ArtFile = use('App/Models/ArtFile')

class ArtController {
  async browser({ params: { page } }) {
    const arts = await Art.query()
      .with('files')
      .with('user')
      .orderBy(Database.raw('random()'))
      .paginate(page | 1, 30)

    return arts
  }

  async show({ params: { id } }) {
    const art = await Art.query()
      .where('id', id)
      .withCount('likes')
      .with('user')
      .with('files')
      .fetch()

    return art
  }

  async store({ auth, request, response }) {
    const user = await auth.getUser()

    if (user.type === 'COMMON') {
      return response.status(401).json([{ message: 'You are not an artist.' }])
    }

    const body = request.all()

    const art = await Art.create({
      ...body,
      user_id: user.id,
    })

    return response.status(200).send(art)
  }

  async storeImage({ auth, params: { id }, request, response }) {
    const user = await auth.getUser()

    const art = await Art.find(id)

    if (art.user_id !== user.id) {
      return response.status(401).json([{ message: 'Not authorized.' }])
    }

    if (user.type === 'COMMON') {
      return response.status(401).json([{ message: 'You are not an artist.' }])
    }

    await request.multipart
      .file('file', {}, async (file) => {
        try {
          const name = `${crypto.randomBytes(10).toString('hex')}.${
            file.extname
          }`

          const url = await Drive.put(name, file.stream, {
            ContentType: file.headers['content-type'],
            ACL: 'public-read',
          })

          await ArtFile.create({
            art_id: id,
            name,
            url,
            content_type: file.headers['content-type'],
          })

          return response.status(200).send()
        } catch (error) {
          return response
            .status(error.status)
            .send({ error: { message: 'Cant upload file' } })
        }
      })
      .process()
  }

  async image({ params, response }) {
    try {
      const { name } = params

      const file = await File.findByOrFail('name', name)

      const exists = await Drive.exists(file.name)
      if (exists) {
        response.implicitEnd = false
        response.header('Content-Type', file.content_type)
        const stream = await Drive.getStream(file.name)

        stream.pipe(response.response)
      } else {
        return response
          .status(404)
          .send({ error: { message: 'File not found' } })
      }
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'File not found' } })
    }
  }

  async like({ params: { id }, auth, response }) {
    const user = await auth.getUser()

    try {
      const art = await Art.findOrFail(id)

      const like = await ArtLike.findBy('user_id', user.id)

      if (like) {
        await like.delete()
      } else {
        await art.likes().create({
          user_id: user.id,
        })
      }

      return response.status(200).send()
    } catch (err) {
      return response
        .status(401)
        .json([{ message: 'An error occurred while trying to like the photo' }])
    }
  }

  async favorite({ auth, params: { id }, response }) {
    const user = await auth.getUser()

    try {
      const art = await Art.findOrFail(id)

      const favorite = await ArtFavorite.findBy('user_id', user.id)

      if (favorite) {
        await favorite.delete()
      } else {
        await art.favorites().create({
          user_id: user.id,
        })
      }

      return response.status(200).send()
    } catch {
      return response
        .status(401)
        .json([
          { message: 'An error occurred while trying to favorite the photo' },
        ])
    }
  }

  async update({ auth, params: { id }, request, response }) {
    const { id: userId } = await auth.getUser()
    const data = request.all()

    try {
      const art = await Art.findOrFail(id)

      if (art.user_id !== userId) {
        return response.status(401).json([{ message: 'Not authorized' }])
      }

      art.merge(data)

      await art.save()

      return response.status(200).send()
    } catch {
      return response.status(404).json([{ message: 'Art not found' }])
    }
  }

  async destroy({ params: { id }, auth, response }) {
    const { id: userId } = await auth.getUser()

    try {
      const art = await Art.findOrFail(id)

      if (art.user_id !== userId) {
        return response.status(401).json([{ message: 'Not authorized' }])
      }

      await art.delete()

      return response.status(200).send()
    } catch {
      return response.status(404).json([{ message: 'Art not found' }])
    }
  }
}

module.exports = ArtController
