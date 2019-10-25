'use strict'

const { cloneDeep } = require('lodash')
const { getAgent } = require('./getAgent')
const { del, get, patch, post, put } = require('superagent')

const buildRequest = async (endpoint = {}) => {
  let func = {}
  const t = type.toLowerCase()
  const url = endpoint.url
  const agent = await getAgent(url)
  const agentCopy = cloneDeep(agent)

  switch (t) {
    case 'delete':
      func = del(url)
      break

    case 'get':
      func = get(url)
      break

    case 'patch':
      func = patch(url)
      break

    case 'post':
      func = post(url)
      break

    case 'put':
      func = put(url)
      break

    default:
      throw new Error(`Unknown request type specified: ${t}.`)
  }

  func = await setHeaders(func, endpoint.headers)
  func = await setQuery(func, endpoint.query)
  func.agent(agentCopy)

  return func
}

const setHeaders = (func = {}, headers = []) => {
  headers.forEach(header => {
    func.set(header.name, header.value)
  })

  return func
}

const setQuery = (func = {}, query = {}) => {
  if (query != null) func.query(query)

  return func
}

const setBody = (func = {}, body = {}) => {
  if (body != null) func.body(body)

  return func
}

module.exports = {
  buildRequest
}
