'use strict'

const Reunioes = require('../../Models/Reunioes')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with reunioes
 */
class ReunioesController {
  /**
   * Show a list of all reunioes.
   * GET reunioes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {

    const reunioes = Reunioes.all()

    return reunioes

  }

  /**
   * Render a form to be used for creating a new reunioe.
   * GET reunioes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new reunioe.
   * POST reunioes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single reunioes.
   * GET reunioes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {

    const reunioes = await Reunioes.findOrFail(params.id)
     //await reunioes.load('file')

     return reunioes
  }

  /**
   * Render a form to update an existing reunioes.
   * GET reunioes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update reunioes details.
   * PUT or PATCH reunioes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a reunioes with id.
   * DELETE reunioes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const reunioes = await Reunioes.findOrFail(params.id)

  if (reunioes.user_id !== auth.user.id) {
    return response.status(401).send({ error: 'Not authorized' })
  }

  await reunioes.delete()
  }
}

module.exports = ReunioesController
