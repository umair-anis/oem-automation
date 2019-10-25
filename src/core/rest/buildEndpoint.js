'use strict'

const { EndpointBuilder } = require('./EndpointBuilder')

const buildEndpoint = async (name = '', url = '', type = '', body = {}, query = {}, headers = []) => {
  const endpoint = await EndpointBuilder().setName(name)
    .setUrl(url)
    .setType(type)
    .setBody(body)
    .setQuery(query)
    .setHeaders(headers)
    .build()

  return Object.freeze(endpoint)
}

module.exports = {
  buildEndpoint
}
