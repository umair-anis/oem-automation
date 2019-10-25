'use strict'

const { cloneDeep } = require('lodash')
const { isEmptyOrWhitespace } = require('../model/isEmptyOrWhitespace')
const { isNullOrUndefined } = require('../model/isNullOrUndefined')
const { isValidType } = require('./isValidType')

/**
 * @description
 * @function EndpointBuilder
 * @async
 * @method setUrl
 * @method setName
 * @method setBody
 * @method setType
 * @method build
 * @returns {Endpoint}
 * @example
 */
const EndpointBuilder = (() => {
  const endpoint = {
    url: '',
    body: null,
    name: '',
    type: 'get',
    query: null,
    headers: []
  }

  this.name = (value = '') => {
    endpoint.name = value
    return this
  }

  this.url = (value = '') => {
    endpoint.url = value
    return this
  }

  this.body = (value = {}) => {
    endpoint.body = value
    return this
  }

  this.type = (value = 'get') => {
    endpoint.type = value
    return this
  }

  this.setQuery = (value = {}) => {
    endpoint.query = value
    return this
  }

  this.setHeaders = (value = []) => {
    endpoint.headers = value
    return this
  }

  this.build = async () => {

    const isTypeValid = await isValidType(endpoint.type)
    const isNameEmpty = await isEmptyOrWhitespace(endpoint.name)
    const isUrlEmpty = await isEmptyOrWhitespace(endpoint.url)

    if (!isTypeValid) throw new Error(`Invalid type specified: ${endpoint.type}.`)
    if (isNameEmpty) throw new Error(`Endpoint must have a name for reporting purposes.`)
    if (isUrlEmpty) throw new Error(`URL for an endpoint must be specified.`)

    // if post, patch, or put then must have a body
    const type = endpoint.type.toLowerCase()

    if (type === 'patch' || type === 'post' || type === 'put') {
      const isBodyNull = await isNullOrUndefined(endpoint.body)

      if (isBodyNull) throw new Error(`Body must be specified for an endpoint when calling patch, post, or put.`)
    }

    const copy = await cloneDeep(endpoint)
    return Object.freeze(copy)
  }

  return this
})

module.exports = {
  EndpointBuilder
}
