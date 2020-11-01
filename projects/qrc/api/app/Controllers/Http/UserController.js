'use strict'

const User = use('App/Models/User')
const Follower = use('App/Models/Follower')
const SysCode = use('App/Models/SysCode')

const dayjs = require('dayjs')
const faker = require('faker')

class UserController {
  async index({ auth }) {
    const { id } = await auth.getUser()
    const user = await User.query()
      .where({ id })
      .withCount('arts')
      .withCount('followers')
      .withCount('following')
      .with('folders')
      .fetch()

    return user.toJSON()
  }

  async store({ request, response }) {
    const data = request.all()

    const { id } = await User.create(data)

    await SysCode.create({
      user_id: id,
      token: faker.random.uuid(),
      type: 'ACTIVATION',
      expires_in: dayjs().add(30, 'day').format('YYYY-MM-DD HH:mm:ss'),
    })

    return response.status(200).send()
  }

  async session({ auth, request, response }) {
    const { email, password } = request.all()
    const { token } = await auth.attempt(email, password)

    const user = await User.findBy('email', email)

    response.status(200).json({
      token,
      user,
    })
  }

  async recover({ request, response }) {
    const { email } = request.all()

    const user = await User.findBy('email', email)

    if (!user) {
      return response.status(404).json([{ message: 'User not found' }])
    }

    await user.codes().create({
      token: faker.random.uuid(),
      type: 'RECOVER',
      expires_in: dayjs().add(5, 'minute').format('YYYY-MM-DD HH:mm:ss'),
    })

    return response.status(200).send()
  }

  async confirmRecover({ params: { hash }, request, response }) {
    const { password, repeat_password: repeatPassword } = request.all()

    if (password !== repeatPassword) {
      return response
        .status(404)
        .json([{ message: 'Passwords are not the same' }])
    }

    const code = await SysCode.query()
      .where(function () {
        this.where('token', hash)
        this.where('expires_in', '>=', dayjs().format('YYYY-MM-DD HH:mm:ss'))
        this.where('used', false)
      })
      .fetch()

    if (code.toJSON().length === 0) {
      return response
        .status(401)
        .json([
          { message: 'Your verification code has expired or is not valid' },
        ])
    }

    const userId = code.toJSON()[0].user_id

    const user = await User.find(userId)
    const verificationCode = await SysCode.findBy('token', hash)

    verificationCode.merge({ used: true })

    await verificationCode.save()

    user.merge({
      password,
    })

    await user.save()

    return response.status(200).send()
  }

  async show({ params: { id } }) {
    const user = await User.query()
      .where({ id })
      .withCount('arts')
      .withCount('followers')
      .withCount('following')
      .with('folders', (builder) => {
        builder.where('public', true)
      })
      .fetch()

    return user.toJSON()
  }

  async followers({ params: { id, page } }) {
    const user = await User.find(id)

    const followers = await user
      .followers()
      .orderBy('created_at', 'DESC')
      .paginate(page || 1, 15)

    return followers
  }

  async following({ params: { id, page } }) {
    const user = await User.find(id)

    const following = await user
      .following()
      .orderBy('created_at', 'DESC')
      .paginate(page || 1, 15)

    return following
  }

  async arts({ params: { id, page } }) {
    const user = await User.find(id)

    const arts = await user
      .arts()
      .orderBy('created_at', 'DESC')
      .paginate(page || 1, 15)

    return arts
  }

  async follow({ auth, params: { id }, response }) {
    const user = await auth.getUser()

    try {
      const target = await User.findOrFail(id)

      if (target.id === user.id) {
        return response
          .status(401)
          .json([{ message: "You can't follow yourself" }])
      }

      const follower = await Follower.query()
        .where(function () {
          this.where('user_id', target.id)
          this.where('follower_id', user.id)
        })
        .fetch()

      if (follower.toJSON().length > 0) {
        for (let i = 0; i < follower.toJSON().length; i++) {
          await Follower.query().where('id', follower.toJSON()[i].id).delete()
        }
      } else {
        await Follower.create({
          user_id: target.id,
          follower_id: user.id,
        })
      }

      return response.status(200).send()
    } catch (err) {
      return response.status(404).json([{ message: 'User does not exist' }])
    }
  }

  async update({ auth, request }) {
    const user = await auth.getUser()
    const data = request.all()

    user.merge(data)

    await user.save()
  }

  async destroy({ auth }) {
    const user = await auth.getUser()

    await user.delete()
  }
}

module.exports = UserController
