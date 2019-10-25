'use strict'

const { cloneDeep } = require('lodash')
const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')
const { isNullOrUndefined } = require('../model/isNullOrUndefined')

const QueryBuilder = (() => {
  const query = {
    name: '',
    connectionInfo: {},
    statement: ''
  }

  this.setName = (value = '') => {
    query.name = value
    return this
  }

  this.setConnectionInfo = (value = {}) => {
    query.connectionInfo = value
    return this
  }

  this.setStatement = (value = '') => {
    query.statement = value
    return this
  }

  this.build = () => {
    const copy = cloneDeep(query)
    const isNameEmpty = isEmptyOrWhitespace(query.name)
    const isStatementEmpty = isEmptyOrWhitespace(query.statement)
    const isConnectionUndefined = isNullOrUndefined(query.connectionInfo)

    if (isNameEmpty) throw new Error(`A queries name must be specified.`)
    if (isStatementEmpty) throw new Error(`A query must contain a statement.`)
    if (isConnectionUndefined || connectionInfo === {}) throw new Error(`ConnectionInfo must be specified for a query.`)

    return Object.freeze(copy)
  }
})

module.exports = {
  QueryBuilder
}
