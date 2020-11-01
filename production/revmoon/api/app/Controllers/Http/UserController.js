'use strict'

const faker = require('faker')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/auth/src/Schemes/Session')} AuthSession */

const User = use('App/Models/User')

class UserController {
  /**
   * Store new user
   * POST v1/user
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   */
  async store({ request }) {
    const data = request.all()

    const user = await User.create({
      ...data,
      affiliate_code: faker.internet.mac().split(':').join('')
    })

    return user
  }

  async session({ auth, request, response }) {
    const { username, password } = request.all()
    const token = await auth.attempt(username, password)

    response.status(200).json(token)
  }

  async me({ auth }) {
    const user = await auth.getUser()

    user.password = undefined

    return user
  }

  async list() {
    const users = await User.query()
      .where('type', '!=', 'ADMIN')
      .with('invoices')
      .with('awards')
      .with('tickets')
      .fetch()

    return users
  }

  async affiliates({ auth }) {
    const user = await auth.getUser()
    const affiliates = await User.query()
      .where('reference', user.affiliate_code)
      .fetch()

    return affiliates
  }

  async showById({ params: { id } }) {
    const user = await User.findOrFail(id)

    await user.load('invoices')
    await user.load('awards')
    await user.load('tickets')

    const affiliates = await User.query()
      .where('reference', user.affiliate_code)
      .fetch()

    return {
      user,
      affiliates
    }
  }
}

module.exports = UserController
