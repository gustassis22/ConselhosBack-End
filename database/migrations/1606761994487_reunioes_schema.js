'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ReunioesSchema extends Schema {
  up () {
    this.create('reunioes', (table) => {

      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table.string('titulo').notNullable()
      table.string('descricao').notNullable()
      table.string('data').notNullable()
      table.string('horario').notNullable()
      table.string('address').notNullable()
      table.string('pauta').notNullable()
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('reunioes')
  }
}

module.exports = ReunioesSchema
